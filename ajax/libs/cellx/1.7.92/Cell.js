"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("@riim/is");
var logger_1 = require("@riim/logger");
var map_set_polyfill_1 = require("@riim/map-set-polyfill");
var next_tick_1 = require("@riim/next-tick");
var symbol_polyfill_1 = require("@riim/symbol-polyfill");
var EventEmitter_1 = require("./EventEmitter");
var WaitError_1 = require("./WaitError");
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff;
var KEY_WRAPPERS = symbol_polyfill_1.Symbol('cellx[wrappers]');
var releasePlan = new map_set_polyfill_1.Map();
var releasePlanIndex = MAX_SAFE_INTEGER;
var releasePlanToIndex = -1;
var releasePlanned = false;
var currentlyRelease = 0;
var currentCell = null;
var $error = { error: null };
var pushingIndexCounter = 0;
var errorIndexCounter = 0;
var releaseVersion = 1;
var afterRelease;
var STATE_INITED = 1;
var STATE_ACTIVE = 1 << 1;
var STATE_HAS_FOLLOWERS = 1 << 2;
var STATE_CURRENTLY_PULLING = 1 << 3;
var STATE_PENDING = 1 << 4;
var STATE_FULFILLED = 1 << 5;
var STATE_REJECTED = 1 << 6;
var STATE_CAN_CANCEL_CHANGE = 1 << 7;
function release(force) {
    if (!releasePlanned && !force) {
        return;
    }
    releasePlanned = false;
    currentlyRelease++;
    var queue = releasePlan.get(releasePlanIndex);
    for (;;) {
        var cell = queue && queue.shift();
        if (!cell) {
            if (releasePlanIndex == releasePlanToIndex) {
                break;
            }
            queue = releasePlan.get(++releasePlanIndex);
            continue;
        }
        var prevReleasePlanIndex = void 0;
        var level = cell._level;
        var changeEvent = cell._changeEvent;
        if (changeEvent) {
            prevReleasePlanIndex = releasePlanIndex;
        }
        else {
            if (level > releasePlanIndex || cell._levelInRelease == -1) {
                if (!queue.length) {
                    if (releasePlanIndex == releasePlanToIndex) {
                        break;
                    }
                    queue = releasePlan.get(++releasePlanIndex);
                }
                continue;
            }
            prevReleasePlanIndex = releasePlanIndex;
            cell.pull();
            if (releasePlanIndex < prevReleasePlanIndex) {
                queue.unshift(cell);
                queue = releasePlan.get(releasePlanIndex);
                continue;
            }
            level = cell._level;
            if (level > releasePlanIndex) {
                if (!queue.length) {
                    queue = releasePlan.get(++releasePlanIndex);
                }
                continue;
            }
            changeEvent = cell._changeEvent;
        }
        cell._levelInRelease = -1;
        if (changeEvent) {
            cell._fixedValue = cell._value;
            cell._changeEvent = null;
            var pushingIndex = cell._pushingIndex;
            var reactions = cell._reactions;
            for (var i = 0, l = reactions.length; i < l; i++) {
                var reaction = reactions[i];
                if (reaction._level <= level) {
                    reaction._level = level + 1;
                }
                if (pushingIndex > reaction._pushingIndex) {
                    reaction._pushingIndex = pushingIndex;
                    reaction._prevChangeEvent = reaction._changeEvent;
                    reaction._changeEvent = null;
                    reaction._addToRelease();
                }
            }
            cell.handleEvent(changeEvent);
            if (releasePlanIndex == MAX_SAFE_INTEGER) {
                break;
            }
            if (releasePlanIndex != prevReleasePlanIndex) {
                queue = releasePlan.get(releasePlanIndex);
                continue;
            }
        }
        if (!queue.length) {
            if (releasePlanIndex == releasePlanToIndex) {
                break;
            }
            queue = releasePlan.get(++releasePlanIndex);
        }
    }
    if (!--currentlyRelease) {
        releasePlanIndex = MAX_SAFE_INTEGER;
        releasePlanToIndex = -1;
        releaseVersion++;
        if (afterRelease) {
            var after = afterRelease;
            afterRelease = null;
            for (var i = 0, l = after.length; i < l; i++) {
                var callback = after[i];
                if (typeof callback == 'function') {
                    callback();
                }
                else {
                    callback[0]._push(callback[1], true, false);
                }
            }
        }
    }
}
function defaultPut(cell, value) {
    cell.push(value);
}
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(value, options) {
        var _this = _super.call(this) || this;
        _this._error = null;
        _this._pushingIndex = 0;
        _this._errorIndex = 0;
        _this._version = 0;
        _this._dependencies = undefined;
        _this._reactions = [];
        _this._level = 0;
        _this._levelInRelease = -1;
        _this._selfPendingStatusCell = null;
        _this._pendingStatusCell = null;
        _this._selfErrorCell = null;
        _this._errorCell = null;
        _this._state = STATE_CAN_CANCEL_CHANGE;
        _this._prevChangeEvent = null;
        _this._changeEvent = null;
        _this._lastErrorEvent = null;
        _this.debugKey = options && options.debugKey;
        _this.context = (options && options.context) || _this;
        _this._pull = typeof value == 'function' ? value : null;
        _this._get = (options && options.get) || null;
        _this._validate = (options && options.validate) || null;
        _this._merge = (options && options.merge) || null;
        _this._put = (options && options.put) || defaultPut;
        _this._onFulfilled = _this._onRejected = null;
        _this._reap = (options && options.reap) || null;
        _this.meta = (options && options.meta) || null;
        if (_this._pull) {
            _this._fixedValue = _this._value = undefined;
        }
        else {
            if (_this._validate) {
                _this._validate(value, undefined);
            }
            if (_this._merge) {
                value = _this._merge(value, undefined);
            }
            _this._fixedValue = _this._value = value;
            if (value instanceof EventEmitter_1.EventEmitter) {
                value.on('change', _this._onValueChange, _this);
            }
        }
        if (options) {
            if (options.onChange) {
                _this.on('change', options.onChange);
            }
            if (options.onError) {
                _this.on('error', options.onError);
            }
        }
        return _this;
    }
    Object.defineProperty(Cell, "currentlyPulling", {
        get: function () {
            return !!currentCell;
        },
        enumerable: true,
        configurable: true
    });
    Cell.autorun = function (callback, context) {
        var disposer;
        new Cell(function () {
            var _this = this;
            if (!disposer) {
                disposer = function () {
                    _this.dispose();
                };
            }
            callback.call(context, disposer);
        }, {
            onChange: function () { }
        });
        return disposer;
    };
    Cell.forceRelease = function () {
        if (releasePlanned || currentlyRelease) {
            release(true);
        }
    };
    Cell.afterRelease = function (callback) {
        (afterRelease || (afterRelease = [])).push(callback);
    };
    Cell.prototype.on = function (type, listener, context) {
        if (releasePlanned || currentlyRelease) {
            release(true);
        }
        this._activate();
        if (typeof type == 'object') {
            _super.prototype.on.call(this, type, listener !== undefined ? listener : this.context);
        }
        else {
            _super.prototype.on.call(this, type, listener, context !== undefined ? context : this.context);
        }
        this._state |= STATE_HAS_FOLLOWERS;
        return this;
    };
    Cell.prototype.off = function (type, listener, context) {
        if (releasePlanned || currentlyRelease) {
            release(true);
        }
        if (type) {
            if (typeof type == 'object') {
                _super.prototype.off.call(this, type, listener !== undefined ? listener : this.context);
            }
            else {
                _super.prototype.off.call(this, type, listener, context !== undefined ? context : this.context);
            }
        }
        else {
            _super.prototype.off.call(this);
        }
        if (!this._reactions.length &&
            !this._events.has('change') &&
            !this._events.has('error') &&
            this._state & STATE_HAS_FOLLOWERS) {
            this._state ^= STATE_HAS_FOLLOWERS;
            this._deactivate();
            if (this._reap) {
                this._reap.call(this.context);
            }
        }
        return this;
    };
    Cell.prototype.addChangeListener = function (listener, context) {
        return this.on('change', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.removeChangeListener = function (listener, context) {
        return this.off('change', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.addErrorListener = function (listener, context) {
        return this.on('error', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.removeErrorListener = function (listener, context) {
        return this.off('error', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.subscribe = function (listener, context) {
        var wrappers = listener[KEY_WRAPPERS] || (listener[KEY_WRAPPERS] = new map_set_polyfill_1.Map());
        if (wrappers.has(this)) {
            return this;
        }
        function wrapper(evt) {
            return listener.call(this, evt.data.error || null, evt);
        }
        wrappers.set(this, wrapper);
        if (context === undefined) {
            context = this.context;
        }
        return this.on('change', wrapper, context).on('error', wrapper, context);
    };
    Cell.prototype.unsubscribe = function (listener, context) {
        var wrappers = listener[KEY_WRAPPERS];
        var wrapper = wrappers && wrappers.get(this);
        if (!wrapper) {
            return this;
        }
        wrappers.delete(this);
        if (context === undefined) {
            context = this.context;
        }
        return this.off('change', wrapper, context).off('error', wrapper, context);
    };
    Cell.prototype._addReaction = function (reaction) {
        this._activate();
        this._reactions.push(reaction);
        this._state |= STATE_HAS_FOLLOWERS;
    };
    Cell.prototype._deleteReaction = function (reaction) {
        this._reactions.splice(this._reactions.indexOf(reaction), 1);
        if (!this._reactions.length && !this._events.has('change') && !this._events.has('error')) {
            this._state ^= STATE_HAS_FOLLOWERS;
            this._deactivate();
            if (this._reap) {
                this._reap.call(this.context);
            }
        }
    };
    Cell.prototype._activate = function () {
        if (!this._pull || this._state & STATE_ACTIVE) {
            return;
        }
        var deps = this._dependencies;
        if (deps === null) {
            return;
        }
        if (this._version < releaseVersion) {
            var value = this._pull$();
            if (deps || this._dependencies || !(this._state & STATE_INITED)) {
                if (value === $error) {
                    this._fail($error.error, false, false);
                }
                else {
                    this._push(value, false, false);
                }
            }
            deps = this._dependencies;
        }
        if (deps) {
            var i = deps.length;
            do {
                deps[--i]._addReaction(this);
            } while (i);
            this._state |= STATE_ACTIVE;
        }
    };
    Cell.prototype._deactivate = function () {
        if (!(this._state & STATE_ACTIVE)) {
            return;
        }
        var deps = this._dependencies;
        var i = deps.length;
        do {
            deps[--i]._deleteReaction(this);
        } while (i);
        if (this._levelInRelease != -1) {
            this._levelInRelease = -1;
            this._changeEvent = null;
        }
        this._state ^= STATE_ACTIVE;
    };
    Cell.prototype._onValueChange = function (evt) {
        this._pushingIndex = ++pushingIndexCounter;
        if (this._state & STATE_HAS_FOLLOWERS) {
            var changeEvent = ((evt.data || (evt.data = {})).prevEvent = this._changeEvent);
            this._changeEvent = evt;
            if (changeEvent) {
                if (this._value === this._fixedValue) {
                    this._state &= ~STATE_CAN_CANCEL_CHANGE;
                }
            }
            else {
                this._state &= ~STATE_CAN_CANCEL_CHANGE;
                this._addToRelease();
            }
        }
        else {
            this._version = ++releaseVersion + +(currentlyRelease != 0);
        }
    };
    Cell.prototype.get = function () {
        if (this._pull) {
            if (this._state & STATE_ACTIVE) {
                if (releasePlanned || (currentlyRelease && !currentCell)) {
                    release(true);
                }
            }
            else if (this._version <
                releaseVersion + +releasePlanned + +(currentlyRelease != 0)) {
                var prevDeps = this._dependencies;
                if (prevDeps !== null) {
                    var value = this._pull$();
                    var deps = this._dependencies;
                    if (prevDeps || deps || !(this._state & STATE_INITED)) {
                        if (deps && this._state & STATE_HAS_FOLLOWERS) {
                            var i = deps.length;
                            do {
                                deps[--i]._addReaction(this);
                            } while (i);
                            this._state |= STATE_ACTIVE;
                        }
                        if (value === $error) {
                            this._fail($error.error, false, false);
                        }
                        else {
                            this._push(value, false, false);
                        }
                    }
                }
            }
        }
        if (currentCell) {
            var currentCellDeps = currentCell._dependencies;
            var level = this._level;
            if (currentCellDeps) {
                if (currentCellDeps.indexOf(this) == -1) {
                    currentCellDeps.push(this);
                    if (currentCell._level <= level) {
                        currentCell._level = level + 1;
                    }
                }
            }
            else {
                currentCell._dependencies = [this];
                currentCell._level = level + 1;
            }
        }
        if (currentCell && this._error && this._error instanceof WaitError_1.WaitError) {
            throw this._error;
        }
        return this._get ? this._get(this._value) : this._value;
    };
    Cell.prototype.pull = function () {
        if (!this._pull) {
            return false;
        }
        if (releasePlanned) {
            release();
        }
        var prevDeps;
        var prevLevel;
        var value;
        if (this._state & STATE_HAS_FOLLOWERS) {
            prevDeps = this._dependencies;
            prevLevel = this._level;
            value = this._pull$();
            var deps = this._dependencies;
            var newDepCount = 0;
            if (deps) {
                var i = deps.length;
                do {
                    var dep = deps[--i];
                    if (!prevDeps || prevDeps.indexOf(dep) == -1) {
                        dep._addReaction(this);
                        newDepCount++;
                    }
                } while (i);
            }
            if (prevDeps && (deps ? deps.length - newDepCount : 0) < prevDeps.length) {
                for (var i = prevDeps.length; i;) {
                    var prevDep = prevDeps[--i];
                    if (!deps || deps.indexOf(prevDep) == -1) {
                        prevDep._deleteReaction(this);
                    }
                }
            }
            if (deps) {
                this._state |= STATE_ACTIVE;
            }
            else {
                this._state &= ~STATE_ACTIVE;
            }
            if (currentlyRelease && this._level > prevLevel) {
                this._addToRelease();
                return false;
            }
        }
        else {
            value = this._pull$();
        }
        if (value === $error) {
            this._fail($error.error, false, true);
            return true;
        }
        return this._push(value, false, true);
    };
    Cell.prototype._pull$ = function () {
        if (this._state & STATE_CURRENTLY_PULLING) {
            throw new TypeError('Circular pulling detected');
        }
        var pull = this._pull;
        if (pull.length) {
            if (this._selfPendingStatusCell) {
                this._selfPendingStatusCell.set(true);
            }
            this._state |= STATE_PENDING;
            this._state &= ~(STATE_FULFILLED | STATE_REJECTED);
        }
        var prevCell = currentCell;
        currentCell = this;
        this._dependencies = null;
        this._level = 0;
        this._state |= STATE_CURRENTLY_PULLING;
        try {
            return pull.length
                ? pull.call(this.context, this, this._value)
                : pull.call(this.context);
        }
        catch (err) {
            $error.error = err;
            return $error;
        }
        finally {
            currentCell = prevCell;
            this._version = releaseVersion + +(currentlyRelease != 0);
            var pendingStatusCell = this._pendingStatusCell;
            if (pendingStatusCell && pendingStatusCell._state & STATE_ACTIVE) {
                pendingStatusCell.pull();
            }
            var errorCell = this._errorCell;
            if (errorCell && errorCell._state & STATE_ACTIVE) {
                errorCell.pull();
            }
            this._state ^= STATE_CURRENTLY_PULLING;
        }
    };
    Cell.prototype.getError = function () {
        var errorCell = this._errorCell;
        if (!errorCell) {
            var debugKey = this.debugKey;
            this._selfErrorCell = new Cell(this._error, debugKey ? { debugKey: debugKey + '._selfErrorCell' } : undefined);
            errorCell = this._errorCell = new Cell(function () {
                this.get();
                var err = this._selfErrorCell.get();
                var errorIndex;
                if (err) {
                    errorIndex = this._errorIndex;
                    if (errorIndex == errorIndexCounter) {
                        return err;
                    }
                }
                var deps = this._dependencies;
                if (deps) {
                    var i = deps.length;
                    do {
                        var dep = deps[--i];
                        var depError = dep.getError();
                        if (depError) {
                            var depErrorIndex = dep._errorIndex;
                            if (depErrorIndex == errorIndexCounter) {
                                return depError;
                            }
                            if (!err || errorIndex < depErrorIndex) {
                                err = depError;
                                errorIndex = depErrorIndex;
                            }
                        }
                    } while (i);
                }
                return err;
            }, debugKey
                ? { debugKey: debugKey + '._errorCell', context: this }
                : { context: this });
        }
        return errorCell.get();
    };
    Cell.prototype.isPending = function () {
        var pendingStatusCell = this._pendingStatusCell;
        if (!pendingStatusCell) {
            var debugKey = this.debugKey;
            this._selfPendingStatusCell = new Cell(!!(this._state & STATE_PENDING), debugKey ? { debugKey: debugKey + '._selfPendingStatusCell' } : undefined);
            pendingStatusCell = this._pendingStatusCell = new Cell(function () {
                if (this._selfPendingStatusCell.get()) {
                    return true;
                }
                try {
                    this.get();
                }
                catch (_a) { }
                var deps = this._dependencies;
                if (deps) {
                    var i = deps.length;
                    do {
                        if (deps[--i].isPending()) {
                            return true;
                        }
                    } while (i);
                }
                return false;
            }, debugKey
                ? { debugKey: debugKey + '._pendingStatusCell', context: this }
                : { context: this });
        }
        return pendingStatusCell.get();
    };
    Cell.prototype.set = function (value) {
        if (this._validate) {
            this._validate(value, this._value);
        }
        if (this._merge) {
            value = this._merge(value, this._value);
        }
        if (this._selfPendingStatusCell) {
            this._selfPendingStatusCell.set(true);
        }
        this._state |= STATE_PENDING;
        this._state &= ~(STATE_FULFILLED | STATE_REJECTED);
        if (this._put.length >= 3) {
            this._put.call(this.context, this, value, this._value);
        }
        else {
            this._put.call(this.context, this, value);
        }
        return this;
    };
    Cell.prototype.push = function (value) {
        this._push(value, true, false);
        return this;
    };
    Cell.prototype._push = function (value, public$, pulling) {
        if (public$ || (!currentlyRelease && pulling)) {
            this._pushingIndex = ++pushingIndexCounter;
        }
        this._state |= STATE_INITED;
        if (this._error) {
            this._setError(null, false);
        }
        var prevValue = this._value;
        if (is_1.is(value, prevValue)) {
            if (public$ || (currentlyRelease && pulling)) {
                this._fulfill(value);
            }
            return false;
        }
        this._value = value;
        if (prevValue instanceof EventEmitter_1.EventEmitter) {
            prevValue.off('change', this._onValueChange, this);
        }
        if (value instanceof EventEmitter_1.EventEmitter) {
            value.on('change', this._onValueChange, this);
        }
        if (this._state & STATE_HAS_FOLLOWERS) {
            var changeEvent = this._changeEvent || this._prevChangeEvent;
            if (changeEvent) {
                if (is_1.is(value, this._fixedValue) && this._state & STATE_CAN_CANCEL_CHANGE) {
                    this._levelInRelease = -1;
                    this._changeEvent = null;
                }
                else {
                    this._changeEvent = {
                        target: this,
                        type: 'change',
                        data: {
                            prevEvent: changeEvent,
                            prevValue: prevValue,
                            value: value
                        }
                    };
                }
                this._prevChangeEvent = null;
            }
            else {
                this._state |= STATE_CAN_CANCEL_CHANGE;
                this._changeEvent = {
                    target: this,
                    type: 'change',
                    data: {
                        prevEvent: null,
                        prevValue: prevValue,
                        value: value
                    }
                };
                this._addToRelease();
            }
        }
        else {
            if (public$ || (!currentlyRelease && pulling)) {
                releaseVersion++;
            }
            this._fixedValue = value;
            this._version = releaseVersion + +(currentlyRelease != 0);
        }
        if (public$ || (currentlyRelease && pulling)) {
            this._fulfill(value);
        }
        return true;
    };
    Cell.prototype._fulfill = function (value) {
        this._resolvePending();
        if (!(this._state & STATE_FULFILLED)) {
            this._state |= STATE_FULFILLED;
            if (this._onFulfilled) {
                this._onFulfilled(value);
            }
        }
    };
    Cell.prototype.fail = function (err) {
        this._fail(err, true, false);
        return this;
    };
    Cell.prototype._fail = function (err, public$, pulling) {
        if (!(err instanceof WaitError_1.WaitError)) {
            if (this.debugKey) {
                logger_1.error('[' + this.debugKey + ']', err);
            }
            else {
                logger_1.error(err);
            }
            if (!(err instanceof Error)) {
                err = new Error(String(err));
            }
        }
        this._setError(err, public$ || (currentlyRelease != 0 && pulling));
    };
    Cell.prototype._setError = function (err, reject) {
        this._error = err;
        if (this._selfErrorCell) {
            this._selfErrorCell.set(err);
        }
        if (err) {
            this._errorIndex = ++errorIndexCounter;
            this._handleErrorEvent({
                target: this,
                type: 'error',
                data: {
                    error: err
                }
            }, reject ? err : null);
        }
    };
    Cell.prototype._handleErrorEvent = function (evt, err) {
        if (this._lastErrorEvent === evt) {
            return;
        }
        this._lastErrorEvent = evt;
        this.handleEvent(evt);
        if (err) {
            this._reject(err);
        }
        var reactions = this._reactions;
        for (var i = reactions.length; i;) {
            reactions[--i]._handleErrorEvent(evt, err);
        }
    };
    Cell.prototype._reject = function (err) {
        this._resolvePending();
        if (!(err instanceof WaitError_1.WaitError) && !(this._state & STATE_REJECTED)) {
            this._state |= STATE_REJECTED;
            if (this._onRejected) {
                this._onRejected(err);
            }
        }
    };
    Cell.prototype.wait = function () {
        throw new WaitError_1.WaitError();
    };
    Cell.prototype._addToRelease = function () {
        var level = this._level;
        if (level <= this._levelInRelease) {
            return;
        }
        var queue;
        (releasePlan.get(level) || (releasePlan.set(level, (queue = [])), queue)).push(this);
        if (releasePlanIndex > level) {
            releasePlanIndex = level;
        }
        if (releasePlanToIndex < level) {
            releasePlanToIndex = level;
        }
        this._levelInRelease = level;
        if (!releasePlanned && !currentlyRelease) {
            releasePlanned = true;
            next_tick_1.nextTick(release);
        }
    };
    Cell.prototype._resolvePending = function () {
        if (this._state & STATE_PENDING) {
            if (this._selfPendingStatusCell) {
                this._selfPendingStatusCell.set(false);
            }
            this._state ^= STATE_PENDING;
        }
    };
    Cell.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        var listener = function () { };
        this.on('change', listener);
        if (!this._pull || this._state & STATE_FULFILLED) {
            this.off('change', listener);
            return Promise.resolve(this._get ? this._get(this._value) : this._value).then(onFulfilled);
        }
        if (this._state & STATE_REJECTED) {
            this.off('change', listener);
            return Promise.reject(this._error).catch(onRejected);
        }
        var cell = this;
        var promise = new Promise(function (resolve, reject) {
            cell._onFulfilled = function (value) {
                cell._onFulfilled = cell._onRejected = null;
                _this.off('change', listener);
                resolve(cell._get ? cell._get(value) : value);
            };
            cell._onRejected = function (err) {
                cell._onFulfilled = cell._onRejected = null;
                _this.off('change', listener);
                reject(err);
            };
        }).then(onFulfilled, onRejected);
        return promise;
    };
    Cell.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    Cell.prototype.reap = function () {
        this.off();
        var reactions = this._reactions;
        for (var i = reactions.length; i;) {
            reactions[--i].reap();
        }
        return this;
    };
    Cell.prototype.dispose = function () {
        return this.reap();
    };
    return Cell;
}(EventEmitter_1.EventEmitter));
exports.Cell = Cell;
