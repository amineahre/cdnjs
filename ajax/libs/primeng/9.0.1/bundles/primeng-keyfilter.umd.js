(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/keyfilter', ['exports', '@angular/core', '@angular/common', 'primeng/dom', '@angular/forms'], factory) :
    (global = global || self, factory((global.primeng = global.primeng || {}, global.primeng.keyfilter = {}), global.ng.core, global.ng.common, global.primeng.dom, global.ng.forms));
}(this, (function (exports, core, common, dom, forms) { 'use strict';

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __values = (this && this.__values) || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var KEYFILTER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return KeyFilter; }),
        multi: true
    };
    var DEFAULT_MASKS = {
        pint: /[\d]/,
        'int': /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.\s,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
    };
    var KEYS = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        BACKSPACE: 8,
        DELETE: 46
    };
    var SAFARI_KEYS = {
        63234: 37,
        63235: 39,
        63232: 38,
        63233: 40,
        63276: 33,
        63277: 34,
        63272: 46,
        63273: 36,
        63275: 35 // end
    };
    var KeyFilter = /** @class */ (function () {
        function KeyFilter(el) {
            this.el = el;
            this.ngModelChange = new core.EventEmitter();
            this.isAndroid = dom.DomHandler.isAndroid();
        }
        Object.defineProperty(KeyFilter.prototype, "pattern", {
            get: function () {
                return this._pattern;
            },
            set: function (_pattern) {
                this._pattern = _pattern;
                this.regex = DEFAULT_MASKS[this._pattern] || this._pattern;
            },
            enumerable: true,
            configurable: true
        });
        KeyFilter.prototype.isNavKeyPress = function (e) {
            var k = e.keyCode;
            k = dom.DomHandler.getBrowser().safari ? (SAFARI_KEYS[k] || k) : k;
            return (k >= 33 && k <= 40) || k == KEYS.RETURN || k == KEYS.TAB || k == KEYS.ESC;
        };
        ;
        KeyFilter.prototype.isSpecialKey = function (e) {
            var k = e.keyCode;
            var c = e.charCode;
            return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || (k >= 18 && k <= 20) ||
                (dom.DomHandler.getBrowser().opera && !e.shiftKey && (k == 8 || (k >= 33 && k <= 35) || (k >= 36 && k <= 39) || (k >= 44 && k <= 45)));
        };
        KeyFilter.prototype.getKey = function (e) {
            var k = e.keyCode || e.charCode;
            return dom.DomHandler.getBrowser().safari ? (SAFARI_KEYS[k] || k) : k;
        };
        KeyFilter.prototype.getCharCode = function (e) {
            return e.charCode || e.keyCode || e.which;
        };
        KeyFilter.prototype.findDelta = function (value, prevValue) {
            var delta = '';
            for (var i = 0; i < value.length; i++) {
                var str = value.substr(0, i) + value.substr(i + value.length - prevValue.length);
                if (str === prevValue)
                    delta = value.substr(i, value.length - prevValue.length);
            }
            return delta;
        };
        KeyFilter.prototype.isValidChar = function (c) {
            return this.regex.test(c);
        };
        KeyFilter.prototype.isValidString = function (str) {
            for (var i = 0; i < str.length; i++) {
                if (!this.isValidChar(str.substr(i, 1))) {
                    return false;
                }
            }
            return true;
        };
        KeyFilter.prototype.onInput = function (e) {
            if (this.isAndroid && !this.pValidateOnly) {
                var val = this.el.nativeElement.value;
                var lastVal = this.lastValue || '';
                var inserted = this.findDelta(val, lastVal);
                var removed = this.findDelta(lastVal, val);
                var pasted = inserted.length > 1 || (!inserted && !removed);
                if (pasted) {
                    if (!this.isValidString(val)) {
                        this.el.nativeElement.value = lastVal;
                        this.ngModelChange.emit(lastVal);
                    }
                }
                else if (!removed) {
                    if (!this.isValidChar(inserted)) {
                        this.el.nativeElement.value = lastVal;
                        this.ngModelChange.emit(lastVal);
                    }
                }
                val = this.el.nativeElement.value;
                if (this.isValidString(val)) {
                    this.lastValue = val;
                }
            }
        };
        KeyFilter.prototype.onKeyPress = function (e) {
            if (this.isAndroid || this.pValidateOnly) {
                return;
            }
            var browser = dom.DomHandler.getBrowser();
            if (e.ctrlKey || e.altKey) {
                return;
            }
            var k = this.getKey(e);
            if (k == 13) {
                return;
            }
            if (browser.mozilla && (this.isNavKeyPress(e) || k == KEYS.BACKSPACE || (k == KEYS.DELETE && e.charCode == 0))) {
                return;
            }
            var c = this.getCharCode(e);
            var cc = String.fromCharCode(c);
            var ok = true;
            if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
                return;
            }
            ok = this.regex.test(cc);
            if (!ok) {
                e.preventDefault();
            }
        };
        KeyFilter.prototype.onPaste = function (e) {
            var e_1, _a;
            var clipboardData = e.clipboardData || window.clipboardData.getData('text');
            if (clipboardData) {
                var pastedText = clipboardData.getData('text');
                try {
                    for (var _b = __values(pastedText.toString()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var char = _c.value;
                        if (!this.regex.test(char)) {
                            e.preventDefault();
                            return;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        KeyFilter.prototype.validate = function (c) {
            if (this.pValidateOnly) {
                var value = this.el.nativeElement.value;
                if (value && !this.regex.test(value)) {
                    return {
                        validatePattern: false
                    };
                }
            }
        };
        KeyFilter.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], KeyFilter.prototype, "pValidateOnly", void 0);
        __decorate([
            core.Output()
        ], KeyFilter.prototype, "ngModelChange", void 0);
        __decorate([
            core.Input('pKeyFilter')
        ], KeyFilter.prototype, "pattern", null);
        __decorate([
            core.HostListener('input', ['$event'])
        ], KeyFilter.prototype, "onInput", null);
        __decorate([
            core.HostListener('keypress', ['$event'])
        ], KeyFilter.prototype, "onKeyPress", null);
        __decorate([
            core.HostListener('paste', ['$event'])
        ], KeyFilter.prototype, "onPaste", null);
        KeyFilter = __decorate([
            core.Directive({
                selector: '[pKeyFilter]',
                providers: [KEYFILTER_VALIDATOR]
            })
        ], KeyFilter);
        return KeyFilter;
    }());
    var KeyFilterModule = /** @class */ (function () {
        function KeyFilterModule() {
        }
        KeyFilterModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [KeyFilter],
                declarations: [KeyFilter]
            })
        ], KeyFilterModule);
        return KeyFilterModule;
    }());

    exports.KEYFILTER_VALIDATOR = KEYFILTER_VALIDATOR;
    exports.KeyFilter = KeyFilter;
    exports.KeyFilterModule = KeyFilterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=primeng-keyfilter.umd.js.map
