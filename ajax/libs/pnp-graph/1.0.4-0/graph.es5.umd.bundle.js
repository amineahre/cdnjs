/**
@license
 * @pnp/graph v1.0.4-0 - pnp - provides functionality to query the Microsoft Graph
 * MIT (https://github.com/pnp/pnp/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnp/
 * source: https://github.com/pnp/pnp
 * bugs: https://github.com/pnp/pnp/issues
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp"] = factory();
	else
		root["pnp"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GraphQueryableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphQueryableSearchableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GraphQueryableInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pnp_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_odata__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__net_graphhttpclient__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types__ = __webpack_require__(5);





/**
 * Queryable Base Class
 *
 */
var GraphQueryable = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphQueryable, _super);
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    function GraphQueryable(baseUrl, path) {
        var _this = _super.call(this) || this;
        if (typeof baseUrl === "string") {
            var urlStr = baseUrl;
            _this._parentUrl = urlStr;
            _this._url = __WEBPACK_IMPORTED_MODULE_1__pnp_common__["e" /* Util */].combinePaths(urlStr, path);
        }
        else {
            var q = baseUrl;
            _this._parentUrl = q._url;
            _this._options = q._options;
            _this._url = __WEBPACK_IMPORTED_MODULE_1__pnp_common__["e" /* Util */].combinePaths(_this._parentUrl, path);
        }
        return _this;
    }
    /**
     * Creates a new instance of the supplied factory and extends this into that new instance
     *
     * @param factory constructor for the new queryable
     */
    GraphQueryable.prototype.as = function (factory) {
        var o = new factory(this._url, null);
        return __WEBPACK_IMPORTED_MODULE_1__pnp_common__["e" /* Util */].extend(o, this, true);
    };
    /**
     * Gets the full url with query information
     *
     */
    GraphQueryable.prototype.toUrlAndQuery = function () {
        var _this = this;
        var url = this.toUrl();
        if (!__WEBPACK_IMPORTED_MODULE_1__pnp_common__["e" /* Util */].isUrlAbsolute(url)) {
            url = __WEBPACK_IMPORTED_MODULE_1__pnp_common__["e" /* Util */].combinePaths("https://graph.microsoft.com", url);
        }
        return url + ("?" + this._query.getKeys().map(function (key) { return key + "=" + _this._query.get(key); }).join("&"));
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    GraphQueryable.prototype.getParent = function (factory, baseUrl, path) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        return new factory(baseUrl, path);
    };
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    GraphQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        var clone = new factory(this, additionalPath);
        clone.configure(this._options);
        // TODO:: include batching info in clone
        if (includeBatch) {
            clone = clone.inBatch(this._batch);
        }
        return clone;
    };
    GraphQueryable.prototype.setEndpoint = function (endpoint) {
        this._url = __WEBPACK_IMPORTED_MODULE_4__types__["a" /* GraphEndpoints */].ensure(this._url, endpoint);
        return this;
    };
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    GraphQueryable.prototype.toRequestContext = function (verb, options, parser, pipeline) {
        if (options === void 0) { options = {}; }
        // TODO:: add batch support
        return Promise.resolve({
            batch: this.batch,
            batchDependency: function () { return void (0); },
            cachingOptions: this._cachingOptions,
            clientFactory: function () { return new __WEBPACK_IMPORTED_MODULE_3__net_graphhttpclient__["a" /* GraphHttpClient */](); },
            isBatched: this.hasBatch,
            isCached: this._useCaching,
            options: options,
            parser: parser,
            pipeline: pipeline,
            requestAbsoluteUrl: this.toUrlAndQuery(),
            requestId: __WEBPACK_IMPORTED_MODULE_1__pnp_common__["e" /* Util */].getGUID(),
            verb: verb,
        });
    };
    return GraphQueryable;
}(__WEBPACK_IMPORTED_MODULE_2__pnp_odata__["e" /* ODataQueryable */]));

/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var GraphQueryableCollection = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphQueryableCollection, _super);
    function GraphQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param filter The string representing the filter query
     */
    GraphQueryableCollection.prototype.filter = function (filter) {
        this._query.add("$filter", filter);
        return this;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    GraphQueryableCollection.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this._query.add("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    GraphQueryableCollection.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this._query.add("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    GraphQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        var _this = this;
        if (ascending === void 0) { ascending = true; }
        var query = this._query.getKeys().filter(function (k) { return k === "$orderby"; }).map(function (k) { return _this._query.get(k); });
        query.push(orderBy + " " + (ascending ? "asc" : "desc"));
        this._query.add("$orderby", query.join(","));
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    GraphQueryableCollection.prototype.top = function (top) {
        this._query.add("$top", top.toString());
        return this;
    };
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    GraphQueryableCollection.prototype.skip = function (num) {
        this._query.add("$top", num.toString());
        return this;
    };
    /**
     * 	To request second and subsequent pages of Graph data
     */
    GraphQueryableCollection.prototype.skipToken = function (token) {
        this._query.add("$skiptoken", token);
        return this;
    };
    Object.defineProperty(GraphQueryableCollection.prototype, "count", {
        /**
         * 	Retrieves the total count of matching resources
         */
        get: function () {
            this._query.add("$count", "true");
            return this;
        },
        enumerable: true,
        configurable: true
    });
    return GraphQueryableCollection;
}(GraphQueryable));

var GraphQueryableSearchableCollection = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphQueryableSearchableCollection, _super);
    function GraphQueryableSearchableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 	To request second and subsequent pages of Graph data
     */
    GraphQueryableSearchableCollection.prototype.search = function (query) {
        this._query.add("$search", query);
        return this;
    };
    return GraphQueryableSearchableCollection;
}(GraphQueryableCollection));

/**
 * Represents an instance that can be selected
 *
 */
var GraphQueryableInstance = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphQueryableInstance, _super);
    function GraphQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    GraphQueryableInstance.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this._query.add("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    GraphQueryableInstance.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this._query.add("$expand", expands.join(","));
        }
        return this;
    };
    return GraphQueryableInstance;
}(GraphQueryable));

//# sourceMappingURL=graphqueryable.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdalClient; });
/* unused harmony export readBlobAsText */
/* unused harmony export readBlobAsArrayBuffer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Dictionary; });
/* unused harmony export deprecated */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return beta; });
/* unused harmony export UrlException */
/* unused harmony export setup */
/* unused harmony export RuntimeConfigImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RuntimeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mergeOptions; });
/* unused harmony export FetchClient */
/* unused harmony export BearerTokenFetchClient */
/* unused harmony export PnPClientStorageWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PnPClientStorage; });
/* unused harmony export getCtxCallback */
/* unused harmony export dateAdd */
/* unused harmony export combinePaths */
/* unused harmony export getRandomString */
/* unused harmony export getGUID */
/* unused harmony export isFunc */
/* unused harmony export objectDefinedNotNull */
/* unused harmony export isArray */
/* unused harmony export extend */
/* unused harmony export isUrlAbsolute */
/* unused harmony export stringIsNullOrEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_adal_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_logging__ = __webpack_require__(3);
/**
@license
 * @pnp/common v1.0.4-0 - pnp - provides shared functionality across all pnp libraries
 * MIT (https://github.com/pnp/pnp/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnp/
 * source: https://github.com/pnp/pnp
 * bugs: https://github.com/pnp/pnp/issues
 */




/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combinePaths() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !Util.stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < chars; i++) {
        text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* tslint:disable no-bitwise */
function getGUID() {
    var d = new Date().getTime();
    var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
}
/* tslint:enable */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(cf) {
    return typeof cf === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    if (Array.isArray) {
        return Array.isArray(array);
    }
    return array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 *
 */
function extend(target, source, noOverwrite) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (!Util.objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    return Object.getOwnPropertyNames(source)
        .filter(function (v) { return check(target, v); })
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * Gets a callback function which will maintain context across async calls.
     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
     *
     * @param context The object that will be the 'this' value in the callback
     * @param method The method to which we will apply the context and parameters
     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
     */
    Util.getCtxCallback = getCtxCallback;
    /**
     * Adds a value to a date
     *
     * @param date The date to which we will add units, done in local time
     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
     * @param units The amount to add to date of the given interval
     *
     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
     */
    Util.dateAdd = dateAdd;
    /**
     * Combines an arbitrary set of paths ensuring and normalizes the slashes
     *
     * @param paths 0 to n path parts to combine
     */
    Util.combinePaths = combinePaths;
    /**
     * Gets a random string of chars length
     *
     * @param chars The length of the random string to generate
     */
    Util.getRandomString = getRandomString;
    /**
     * Gets a random GUID value
     *
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    Util.getGUID = getGUID;
    /**
     * Determines if a given value is a function
     *
     * @param cf The thing to test for functionness
     */
    Util.isFunc = isFunc;
    /**
     * Determines if an object is both defined and not null
     * @param obj Object to test
     */
    Util.objectDefinedNotNull = objectDefinedNotNull;
    /**
     * @returns whether the provided parameter is a JavaScript Array or not.
    */
    Util.isArray = isArray;
    /**
     * Provides functionality to extend the given object by doing a shallow copy
     *
     * @param target The object to which properties will be copied
     * @param source The source object from which properties will be copied
     * @param noOverwrite If true existing properties on the target are not overwritten from the source
     *
     */
    Util.extend = extend;
    /**
     * Determines if a given url is absolute
     *
     * @param url The url to check to see if it is absolute
     */
    Util.isUrlAbsolute = isUrlAbsolute;
    /**
     * Determines if a string is null or empty or undefined
     *
     * @param s The string to test
     */
    Util.stringIsNullOrEmpty = stringIsNullOrEmpty;
    return Util;
}());

function mergeHeaders(target, source) {
    if (typeof source !== "undefined" && source !== null) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (Util.objectDefinedNotNull(source)) {
        var headers = Util.extend(target.headers || {}, source.headers);
        target = Util.extend(target, source);
        target.headers = headers;
    }
}
/**
 * Makes requests using the global/window fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return global.fetch(url, options);
    };
    return FetchClient;
}());
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(_token) {
        var _this = _super.call(this) || this;
        _this._token = _token;
        return _this;
    }
    Object.defineProperty(BearerTokenFetchClient.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this._token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(FetchClient));

/**
 * Azure AD Client for use in the browser
 */
var AdalClient = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(AdalClient, _super);
    /**
     * Creates a new instance of AdalClient
     * @param clientId Azure App Id
     * @param tenant Office 365 tenant (Ex: {tenant}.onmicrosoft.com)
     * @param redirectUri The redirect url used to authenticate the
     */
    function AdalClient(clientId, tenant, redirectUri) {
        var _this = _super.call(this, null) || this;
        _this.clientId = clientId;
        _this.tenant = tenant;
        _this.redirectUri = redirectUri;
        return _this;
    }
    /**
     * Creates a new AdalClient using the values of the supplied SPFx context
     *
     * @param spfxContext Current SPFx context
     * @param clientId Optional client id to use instead of the built-in SPFx id
     * @description Using this method and the default clientId requires that the features described in
     * this article https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient are activated in the tenant. If not you can
     * creat your own app, grant permissions and use that clientId here along with the SPFx context
     */
    AdalClient.fromSPFxContext = function (spfxContext, cliendId) {
        if (cliendId === void 0) { cliendId = "c58637bb-e2e1-4312-8a00-04b5ffcd3403"; }
        // this "magic" client id is the one to which permissions are granted behind the scenes
        // this redirectUrl is the page as used by spfx
        return new AdalClient(cliendId, spfxContext.pageContext.aadInfo.tenantId.toString(), combinePaths(window.location.origin, "/_forms/spfxsinglesignon.aspx"));
    };
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    AdalClient.prototype.fetch = function (url, options) {
        var _this = this;
        if (!isUrlAbsolute(url)) {
            throw new Error("You must supply absolute urls to AdalClient.fetch.");
        }
        // the url we are calling is the resource
        return this.getToken(this.getResource(url)).then(function (token) {
            _this.token = token;
            return _super.prototype.fetch.call(_this, url, options);
        });
    };
    /**
     * Gets a token based on the current user
     *
     * @param resource The resource for which we are requesting a token
     */
    AdalClient.prototype.getToken = function (resource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ensureAuthContext().then(function (_) { return _this.login(); }).then(function (_) {
                AdalClient._authContext.acquireToken(resource, function (message, token) {
                    if (message) {
                        return reject(new Error(message));
                    }
                    resolve(token);
                });
            }).catch(reject);
        });
    };
    /**
     * Ensures we have created and setup the adal AuthenticationContext instance
     */
    AdalClient.prototype.ensureAuthContext = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (AdalClient._authContext === null) {
                AdalClient._authContext = Object(__WEBPACK_IMPORTED_MODULE_1_adal_angular__["inject"])({
                    clientId: _this.clientId,
                    displayCall: function (url) {
                        if (_this._displayCallback) {
                            _this._displayCallback(url);
                        }
                    },
                    navigateToLoginRequestUrl: false,
                    redirectUri: _this.redirectUri,
                    tenant: _this.tenant,
                });
            }
            resolve();
        });
    };
    /**
     * Ensures the current user is logged in
     */
    AdalClient.prototype.login = function () {
        var _this = this;
        if (this._loginPromise) {
            return this._loginPromise;
        }
        this._loginPromise = new Promise(function (resolve, reject) {
            if (AdalClient._authContext.getCachedUser()) {
                return resolve();
            }
            _this._displayCallback = function (url) {
                var popupWindow = window.open(url, "login", "width=483, height=600");
                if (!popupWindow) {
                    return reject(new Error("Could not open pop-up window for auth. Likely pop-ups are blocked by the browser."));
                }
                if (popupWindow && popupWindow.focus) {
                    popupWindow.focus();
                }
                var pollTimer = window.setInterval(function () {
                    if (!popupWindow || popupWindow.closed || popupWindow.closed === undefined) {
                        window.clearInterval(pollTimer);
                    }
                    try {
                        if (popupWindow.document.URL.indexOf(_this.redirectUri) !== -1) {
                            window.clearInterval(pollTimer);
                            AdalClient._authContext.handleWindowCallback(popupWindow.location.hash);
                            popupWindow.close();
                            resolve();
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                }, 30);
            };
            // this triggers the login process
            _this.ensureAuthContext().then(function (_) {
                AdalClient._authContext._loginInProgress = false;
                AdalClient._authContext.login();
                _this._displayCallback = null;
            });
        });
        return this._loginPromise;
    };
    /**
     * Parses out the root of the request url to use as the resource when getting the token
     *
     * After: https://gist.github.com/jlong/2428561
     * @param url The url to parse
     */
    AdalClient.prototype.getResource = function (url) {
        var parser = document.createElement("a");
        parser.href = url;
        return parser.protocol + "//" + parser.hostname;
    };
    /**
     * Our auth context
     */
    AdalClient._authContext = null;
    return AdalClient;
}(BearerTokenFetchClient));

/**
 * Reads a blob as text
 *
 * @param blob The data to read
 */
function readBlobAsText(blob) {
    return readBlobAs(blob, "string");
}
/**
 * Reads a blob into an array buffer
 *
 * @param blob The data to read
 */
function readBlobAsArrayBuffer(blob) {
    return readBlobAs(blob, "buffer");
}
/**
 * Generic method to read blob's content
 *
 * @param blob The data to read
 * @param mode The read mode
 */
function readBlobAs(blob, mode) {
    return new Promise(function (resolve, reject) {
        try {
            var reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            switch (mode) {
                case "string":
                    reader.readAsText(blob);
                    break;
                case "buffer":
                    reader.readAsArrayBuffer(blob);
                    break;
            }
        }
        catch (e) {
            reject(e);
        }
    });
}

/**
 * Generic dictionary
 */
var Dictionary = /** @class */ (function () {
    /**
     * Creates a new instance of the Dictionary<T> class
     *
     * @constructor
     */
    function Dictionary(keys, values) {
        if (keys === void 0) { keys = []; }
        if (values === void 0) { values = []; }
        this.keys = keys;
        this.values = values;
    }
    /**
     * Gets a value from the collection using the specified key
     *
     * @param key The key whose value we want to return, returns null if the key does not exist
     */
    Dictionary.prototype.get = function (key) {
        var index = this.keys.indexOf(key);
        if (index < 0) {
            return null;
        }
        return this.values[index];
    };
    /**
     * Adds the supplied key and value to the dictionary
     *
     * @param key The key to add
     * @param o The value to add
     */
    Dictionary.prototype.add = function (key, o) {
        var index = this.keys.indexOf(key);
        if (index > -1) {
            if (o === null) {
                this.remove(key);
            }
            else {
                this.values[index] = o;
            }
        }
        else {
            if (o !== null) {
                this.keys.push(key);
                this.values.push(o);
            }
        }
    };
    /**
     * Merges the supplied typed hash into this dictionary instance. Existing values are updated and new ones are created as appropriate.
     */
    Dictionary.prototype.merge = function (source) {
        var _this = this;
        if ("getKeys" in source) {
            var sourceAsDictionary_1 = source;
            sourceAsDictionary_1.getKeys().map(function (key) {
                _this.add(key, sourceAsDictionary_1.get(key));
            });
        }
        else {
            var sourceAsHash = source;
            for (var key in sourceAsHash) {
                if (sourceAsHash.hasOwnProperty(key)) {
                    this.add(key, sourceAsHash[key]);
                }
            }
        }
    };
    /**
     * Removes a value from the dictionary
     *
     * @param key The key of the key/value pair to remove. Returns null if the key was not found.
     */
    Dictionary.prototype.remove = function (key) {
        var index = this.keys.indexOf(key);
        if (index < 0) {
            return null;
        }
        var val = this.values[index];
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
        return val;
    };
    /**
     * Returns all the keys currently in the dictionary as an array
     */
    Dictionary.prototype.getKeys = function () {
        return this.keys;
    };
    /**
     * Returns all the values currently in the dictionary as an array
     */
    Dictionary.prototype.getValues = function () {
        return this.values;
    };
    /**
     * Clears the current dictionary
     */
    Dictionary.prototype.clear = function () {
        this.keys = [];
        this.values = [];
    };
    Object.defineProperty(Dictionary.prototype, "count", {
        /**
         * Gets a count of the items currently in the dictionary
         */
        get: function () {
            return this.keys.length;
        },
        enumerable: true,
        configurable: true
    });
    return Dictionary;
}());

function deprecated(deprecationVersion, message) {
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                data: {
                    descriptor: descriptor,
                    propertyKey: propertyKey,
                    target: target,
                },
                level: 2 /* Warning */,
                message: "(" + deprecationVersion + ") " + message,
            });
            return method.apply(this, args);
        };
    };
}
function beta(message) {
    if (message === void 0) { message = "This feature is flagged as beta and is subject to change."; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                data: {
                    descriptor: descriptor,
                    propertyKey: propertyKey,
                    target: target,
                },
                level: 2 /* Warning */,
                message: message,
            });
            return method.apply(this, args);
        };
    };
}

var UrlException = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(UrlException, _super);
    function UrlException(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = "UrlException";
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({ data: {}, level: 3 /* Error */, message: "[" + _this.name + "]::" + _this.message });
        return _this;
    }
    return UrlException;
}(Error));

function setup(config) {
    RuntimeConfig.extend(config);
}
var RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl() {
        this._v = new Dictionary();
        // setup defaults
        this._v.add("defaultCachingStore", "session");
        this._v.add("defaultCachingTimeoutSeconds", 60);
        this._v.add("globalCacheDisable", false);
        this._v.add("enableCacheExpiration", false);
        this._v.add("cacheExpirationIntervalMilliseconds", 750);
        this._v.add("spfxContext", null);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.extend = function (config) {
        var _this = this;
        Object.keys(config).forEach(function (key) {
            _this._v.add(key, config[key]);
        });
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get("defaultCachingStore");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get("defaultCachingTimeoutSeconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get("globalCacheDisable");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get("enableCacheExpiration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get("cacheExpirationIntervalMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get("spfxContext");
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());
var _runtimeConfig = new RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;

/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (RuntimeConfig.enableCacheExpiration) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("Enabling cache expiration.", 1 /* Info */);
            this.cacheExpirationHandler();
        }
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (o == null) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("Removing item with key '" + key + "' from cache due to expiration.", 1 /* Info */);
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        var _this = this;
        if (!this.enabled) {
            return getter();
        }
        return new Promise(function (resolve) {
            var o = _this.get(key);
            if (o == null) {
                getter().then(function (d) {
                    _this.put(key, d, expire);
                    resolve(d);
                });
            }
            else {
                resolve(o);
            }
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.enabled) {
                resolve();
            }
            try {
                for (var i = 0; i < _this.store.length; i++) {
                    var key = _this.store.key(i);
                    if (key !== null) {
                        // test the stored item to see if we stored it
                        if (/["|']?pnp["|']? ?: ?1/i.test(_this.store.getItem(key))) {
                            // get those items as get will delete from cache if they are expired
                            _this.get(key);
                        }
                    }
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "test";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (typeof expire === "undefined") {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = RuntimeConfig.defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = Util.dateAdd(new Date(), "second", defaultTimeout);
        }
        return JSON.stringify({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("Called cache expiration handler.", 0 /* Verbose */);
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(Util.getCtxCallback(_this, _this.cacheExpirationHandler), RuntimeConfig.cacheExpirationIntervalMilliseconds);
        }).catch(function (e) {
            // we've got some error - so just stop the loop and report the error
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                data: e,
                level: 3 /* Error */,
                message: "Error deleting expired cache entries, see data for details. Timeout not reset.",
            });
        });
    };
    return PnPClientStorageWrapper;
}());
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Dictionary(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.count;
        },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return this._store.getKeys()[index];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.remove(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.add(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = typeof localStorage !== "undefined" ? new PnPClientStorageWrapper(localStorage) : new PnPClientStorageWrapper(new MemoryStorage());
            }
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = typeof sessionStorage !== "undefined" ? new PnPClientStorageWrapper(sessionStorage) : new PnPClientStorageWrapper(new MemoryStorage());
            }
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    return PnPClientStorage;
}());


//# sourceMappingURL=common.es5.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* unused harmony export ConsoleListener */
/* unused harmony export FunctionListener */
/**
@license
 * @pnp/logging v1.0.4-0 - pnp - light-weight, subscribable logging framework
 * MIT (https://github.com/pnp/pnp/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnp/
 * source: https://github.com/pnp/pnp
 * bugs: https://github.com/pnp/pnp/issues
 */
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
         * Gets or sets the active log level to apply for log filtering
         */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (typeof Logger._instance === "undefined" || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.map(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modifiction
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 0 /* Verbose */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 0 /* Verbose */; }
        Logger.instance.log({ level: level, message: JSON.stringify(json) });
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());
var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: true,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 0 /* Verbose */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (typeof entry !== "undefined" && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());

/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (typeof entry.data !== "undefined") {
            msg.push(" Data: " + JSON.stringify(entry.data));
        }
        return msg.join("");
    };
    return ConsoleListener;
}());
/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());


//# sourceMappingURL=logging.es5.js.map


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CachingOptions */
/* unused harmony export CachingParserWrapper */
/* unused harmony export ProcessHttpClientResponseException */
/* unused harmony export ODataParserBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ODataDefaultParser; });
/* unused harmony export TextParser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlobParser; });
/* unused harmony export JSONParser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BufferParser; });
/* unused harmony export setResult */
/* unused harmony export pipe */
/* unused harmony export requestPipelineMethod */
/* unused harmony export PipelineMethods */
/* unused harmony export getDefaultPipeline */
/* unused harmony export AlreadyInBatchException */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ODataQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ODataBatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pnp_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_logging__ = __webpack_require__(3);
/**
@license
 * @pnp/odata v1.0.4-0 - pnp - provides shared odata functionality and base classes
 * MIT (https://github.com/pnp/pnp/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnp/
 * source: https://github.com/pnp/pnp
 * bugs: https://github.com/pnp/pnp/issues
 */




var CachingOptions = /** @class */ (function () {
    function CachingOptions(key) {
        this.key = key;
        this.expiration = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].dateAdd(new Date(), "second", __WEBPACK_IMPORTED_MODULE_0__pnp_common__["d" /* RuntimeConfig */].defaultCachingTimeoutSeconds);
        this.storeName = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["d" /* RuntimeConfig */].defaultCachingStore;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: true,
        configurable: true
    });
    CachingOptions.storage = new __WEBPACK_IMPORTED_MODULE_0__pnp_common__["c" /* PnPClientStorage */]();
    return CachingOptions;
}());
var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(_parser, _cacheOptions) {
        this._parser = _parser;
        this._cacheOptions = _cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        // add this to the cache based on the options
        return this._parser.parse(response).then(function (data) {
            if (_this._cacheOptions.store !== null) {
                _this._cacheOptions.store.put(_this._cacheOptions.key, data, _this._cacheOptions.expiration);
            }
            return data;
        });
    };
    return CachingParserWrapper;
}());

/**
 * Represents an exception with an HttpClient request
 *
 */
var ProcessHttpClientResponseException = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ProcessHttpClientResponseException, _super);
    function ProcessHttpClientResponseException(status, statusText, data) {
        var _this = _super.call(this, "Error making HttpClient request in queryable: [" + status + "] " + statusText) || this;
        _this.status = status;
        _this.statusText = statusText;
        _this.data = data;
        _this.name = "ProcessHttpClientResponseException";
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({ data: _this.data, level: 3 /* Error */, message: _this.message });
        return _this;
    }
    return ProcessHttpClientResponseException;
}(Error));
var ODataParserBase = /** @class */ (function () {
    function ODataParserBase() {
    }
    ODataParserBase.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                // handle all requests as text, then parse if they are not empty
                r.text()
                    .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                    .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParserBase.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            // read the response as text, it may not be valid json
            r.json().then(function (json) {
                // include the headers as they contain diagnostic information
                var data = {
                    responseBody: json,
                    responseHeaders: r.headers,
                };
                reject(new ProcessHttpClientResponseException(r.status, r.statusText, data));
            }).catch(function (e) {
                // we failed to read the body - possibly it is empty. Let's report the original status that caused
                // the request to fail and log the error without parsing the body if anyone needs it for debugging
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                    data: e,
                    level: 2 /* Warning */,
                    message: "There was an error parsing the error response body. See data for details.",
                });
                // include the headers as they contain diagnostic information
                var data = {
                    responseBody: "[[body not available]]",
                    responseHeaders: r.headers,
                };
                reject(new ProcessHttpClientResponseException(r.status, r.statusText, data));
            });
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParserBase.prototype.parseODataJSON = function (json) {
        var result = json;
        if (json.hasOwnProperty("d")) {
            if (json.d.hasOwnProperty("results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (json.hasOwnProperty("value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParserBase;
}());

var ODataDefaultParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ODataDefaultParser, _super);
    function ODataDefaultParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ODataDefaultParser;
}(ODataParserBase));
var TextParser = /** @class */ (function () {
    function TextParser() {
    }
    TextParser.prototype.parse = function (r) {
        return r.text();
    };
    return TextParser;
}());
var BlobParser = /** @class */ (function () {
    function BlobParser() {
    }
    BlobParser.prototype.parse = function (r) {
        return r.blob();
    };
    return BlobParser;
}());
var JSONParser = /** @class */ (function () {
    function JSONParser() {
    }
    JSONParser.prototype.parse = function (r) {
        return r.json();
    };
    return JSONParser;
}());
var BufferParser = /** @class */ (function () {
    function BufferParser() {
    }
    BufferParser.prototype.parse = function (r) {
        if (__WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].isFunc(r.arrayBuffer)) {
            return r.arrayBuffer();
        }
        return r.buffer();
    };
    return BufferParser;
}());

/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
        data: context.result,
        level: 0 /* Verbose */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result, see data property for value.",
    });
    return Promise.resolve(context.result || null);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    if (c.pipeline.length > 0) {
        return c.pipeline.shift()(c);
    }
    else {
        return Promise.resolve(c);
    }
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipeline.length < 1) {
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 2 /* Warning */);
    }
    return next(context)
        .then(function (ctx) { return returnResult(ctx); })
        .catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].error(e);
        throw e;
    });
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && args[0].hasOwnProperty("hasResult") && args[0].hasResult) {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.verb + " request (" + context.requestAbsoluteUrl + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.verb === "GET" && context.isCached) {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new CachingOptions(context.requestAbsoluteUrl.toLowerCase());
                if (typeof context.cachingOptions !== "undefined") {
                    cacheOptions = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        // ensure we clear any help batch dependency we are resolving from the cache
                        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                            data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        context.batchDependency();
                        // handle the case where a parser needs to take special actions with a cached result (such as getAs)
                        if (context.parser.hasOwnProperty("hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                // we are in a batch, so add to batch, remove dependency, and resolve with the batch's promise
                var p = context.batch.add(context.requestAbsoluteUrl, context.verb, context.options, context.parser);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                context.batchDependency();
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(context.options || {}, { method: context.verb });
                client.fetch(context.requestAbsoluteUrl, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                    data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.verb + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({
                    data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.verb + " request.",
                });
            }
            resolve(context);
        });
    };
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());
function getDefaultPipeline() {
    return [
        PipelineMethods.logStart,
        PipelineMethods.caching,
        PipelineMethods.send,
        PipelineMethods.logEnd,
    ].slice(0);
}

var AlreadyInBatchException = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(AlreadyInBatchException, _super);
    function AlreadyInBatchException(msg) {
        if (msg === void 0) { msg = "This query is already part of a batch."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "AlreadyInBatchException";
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].error(_this);
        return _this;
    }
    return AlreadyInBatchException;
}(Error));
var ODataQueryable = /** @class */ (function () {
    function ODataQueryable() {
        this._batch = null;
        this._query = new __WEBPACK_IMPORTED_MODULE_0__pnp_common__["b" /* Dictionary */]();
        this._options = {};
        this._url = "";
        this._parentUrl = "";
        this._useCaching = false;
        this._cachingOptions = null;
    }
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    ODataQueryable.prototype.concat = function (pathPart) {
        this._url += pathPart;
        return this;
    };
    Object.defineProperty(ODataQueryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    ODataQueryable.prototype.configure = function (options) {
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* mergeOptions */])(this._options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    ODataQueryable.prototype.configureFrom = function (o) {
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* mergeOptions */])(this._options, o._options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    ODataQueryable.prototype.usingCaching = function (options) {
        if (!__WEBPACK_IMPORTED_MODULE_0__pnp_common__["d" /* RuntimeConfig */].globalCacheDisable) {
            this._useCaching = true;
            if (typeof options !== "undefined") {
                this._cachingOptions = options;
            }
        }
        return this;
    };
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    ODataQueryable.prototype.inBatch = function (batch) {
        if (this.batch !== null) {
            throw new AlreadyInBatchException();
        }
        this._batch = batch;
        return this;
    };
    /**
     * Gets the currentl url
     *
     */
    ODataQueryable.prototype.toUrl = function () {
        return this._url;
    };
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    ODataQueryable.prototype.get = function (parser, options) {
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        if (options === void 0) { options = {}; }
        return this.getCore(parser, options);
    };
    ODataQueryable.prototype.getCore = function (parser, options) {
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        if (options === void 0) { options = {}; }
        return this.toRequestContext("GET", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.postCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("POST", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.patchCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("PATCH", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.deleteCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("DELETE", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.putCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("PUT", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    ODataQueryable.prototype.addBatchDependency = function () {
        if (this._batch !== null) {
            return this._batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(ODataQueryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].objectDefinedNotNull(this._batch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataQueryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this._batch : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    ODataQueryable.prototype.append = function (pathPart) {
        this._url = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].combinePaths(this._url, pathPart);
    };
    Object.defineProperty(ODataQueryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this._parentUrl;
        },
        enumerable: true,
        configurable: true
    });
    return ODataQueryable;
}());

var ODataBatch = /** @class */ (function () {
    function ODataBatch(_batchId) {
        if (_batchId === void 0) { _batchId = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].getGUID(); }
        this._batchId = _batchId;
        this._requests = [];
        this._dependencies = [];
    }
    Object.defineProperty(ODataBatch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataBatch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            return this._requests;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param url Request url
     * @param method Request method (GET, POST, etc)
     * @param options Any request options
     * @param parser The parser used to handle the eventual return from the query
     */
    ODataBatch.prototype.add = function (url, method, options, parser) {
        var info = {
            method: method.toUpperCase(),
            options: options,
            parser: parser,
            reject: null,
            resolve: null,
            url: url,
        };
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._requests.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    ODataBatch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        var promise = new Promise(function (resolve) {
            resolver = resolve;
        });
        this._dependencies.push(promise);
        return resolver;
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    ODataBatch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._dependencies).then(function () { return Promise.all(_this._dependencies); }).then(function () { return _this.executeImpl(); });
    };
    return ODataBatch;
}());


//# sourceMappingURL=odata.es5.js.map


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphEndpoints; });
var GraphEndpoints = /** @class */ (function () {
    function GraphEndpoints() {
    }
    /**
     *
     * @param url The url to set the endpoint
     */
    GraphEndpoints.ensure = function (url, endpoint) {
        var all = [GraphEndpoints.Beta, GraphEndpoints.V1];
        var regex = new RegExp(endpoint, "i");
        var replaces = all.filter(function (s) { return !regex.test(s); }).map(function (s) { return s.replace(".", "\\."); });
        regex = new RegExp("/?(" + replaces.join("|") + ")/", "ig");
        return url.replace(regex, "/" + endpoint + "/");
    };
    GraphEndpoints.Beta = "beta";
    GraphEndpoints.V1 = "v1.0";
    return GraphEndpoints;
}());

//# sourceMappingURL=types.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setup;
/* unused harmony export NoGraphClientAvailableException */
/* unused harmony export GraphRuntimeConfigImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphRuntimeConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pnp_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_logging__ = __webpack_require__(3);



function setup(config) {
    __WEBPACK_IMPORTED_MODULE_1__pnp_common__["d" /* RuntimeConfig */].extend(config);
}
var NoGraphClientAvailableException = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NoGraphClientAvailableException, _super);
    function NoGraphClientAvailableException(msg) {
        if (msg === void 0) { msg = "There is no Graph Client available, either set one using configuraiton or provide a valid SPFx Context using setup."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "NoGraphClientAvailableException";
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({ data: null, level: 3 /* Error */, message: _this.message });
        return _this;
    }
    return NoGraphClientAvailableException;
}(Error));

var GraphRuntimeConfigImpl = /** @class */ (function () {
    function GraphRuntimeConfigImpl() {
    }
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var graphPart = __WEBPACK_IMPORTED_MODULE_1__pnp_common__["d" /* RuntimeConfig */].get("graph");
            if (graphPart !== null && typeof graphPart !== "undefined" && typeof graphPart.headers !== "undefined") {
                return graphPart.headers;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var graphPart = __WEBPACK_IMPORTED_MODULE_1__pnp_common__["d" /* RuntimeConfig */].get("graph");
            // use a configured factory firt
            if (graphPart !== null && typeof graphPart.fetchClientFactory !== "undefined") {
                return graphPart.fetchClientFactory;
            }
            // then try and use spfx context if available
            if (typeof __WEBPACK_IMPORTED_MODULE_1__pnp_common__["d" /* RuntimeConfig */].spfxContext !== "undefined") {
                return function () { return __WEBPACK_IMPORTED_MODULE_1__pnp_common__["a" /* AdalClient */].fromSPFxContext(__WEBPACK_IMPORTED_MODULE_1__pnp_common__["d" /* RuntimeConfig */].spfxContext); };
            }
            throw new NoGraphClientAvailableException();
        },
        enumerable: true,
        configurable: true
    });
    return GraphRuntimeConfigImpl;
}());

var GraphRuntimeConfig = new GraphRuntimeConfigImpl();
//# sourceMappingURL=graphlibconfig.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GroupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pnp_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conversations__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plans__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photos__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teams__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types__ = __webpack_require__(5);










var GroupType;
(function (GroupType) {
    /**
     * Office 365 (aka unified group)
     */
    GroupType[GroupType["Office365"] = 0] = "Office365";
    /**
     * Dynamic membership
     */
    GroupType[GroupType["Dynamic"] = 1] = "Dynamic";
    /**
     * Security
     */
    GroupType[GroupType["Security"] = 2] = "Security";
})(GroupType || (GroupType = {}));
/**
 * Describes a collection of Field objects
 *
 */
var Groups = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Groups, _super);
    function Groups(baseUrl, path) {
        if (path === void 0) { path = "groups"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a group from the collection using the specified id
     *
     * @param id Id of the group to get from this collection
     */
    Groups.prototype.getById = function (id) {
        return new Group(this, id);
    };
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    Groups.prototype.add = function (name, mailNickname, groupType, additionalProperties) {
        var _this = this;
        if (additionalProperties === void 0) { additionalProperties = {}; }
        var postBody = __WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].extend({
            displayName: name,
            mailEnabled: groupType === GroupType.Office365,
            mailNickname: mailNickname,
            securityEnabled: groupType !== GroupType.Office365,
        }, additionalProperties);
        // include a group type if required
        if (groupType !== GroupType.Security) {
            postBody = __WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].extend(postBody, {
                groupTypes: groupType === GroupType.Office365 ? ["Unified"] : ["DynamicMembership"],
            });
        }
        return this.postCore({
            body: JSON.stringify(postBody),
        }).then(function (r) {
            return {
                data: r,
                group: _this.getById(r.id),
            };
        });
    };
    return Groups;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

/**
 * Represents a group entity
 */
var Group = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Group.prototype, "calendar", {
        /**
         * The calendar associated with this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_4__calendars__["a" /* Calendar */](this, "calendar");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "events", {
        /**
         * Retrieve a list of event objects
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_4__calendars__["b" /* Events */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "owners", {
        /**
         * Gets the collection of owners for this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_2__members__["b" /* Owners */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "plans", {
        /**
         * The collection of plans for this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_6__plans__["a" /* Plans */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "members", {
        /**
         * Gets the collection of members for this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_2__members__["a" /* Members */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "conversations", {
        /**
         * Gets the conversations collection for this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_5__conversations__["a" /* Conversations */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "acceptedSenders", {
        /**
         * Gets the collection of accepted senders for this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_5__conversations__["b" /* Senders */](this, "acceptedsenders");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "rejectedSenders", {
        /**
         * Gets the collection of rejected senders for this group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_5__conversations__["b" /* Senders */](this, "rejectedsenders");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "photo", {
        /**
         * The photo associated with the group
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_7__photos__["a" /* Photo */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "team", {
        /**
         * Gets the team associated with this group, if it exists
         */
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_8__teams__["a" /* Team */](this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add the group to the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    Group.prototype.addFavorite = function () {
        return this.clone(Group, "addFavorite").postCore();
    };
    /**
     * Creates a Microsoft Team associated with this group
     *
     * @param properties Initial properties for the new Team
     */
    Group.prototype.createTeam = function (properties) {
        return this.clone(Group, "team").setEndpoint(__WEBPACK_IMPORTED_MODULE_9__types__["a" /* GraphEndpoints */].Beta).putCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Return all the groups that the specified group is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    Group.prototype.getMemberGroups = function (securityEnabledOnly) {
        if (securityEnabledOnly === void 0) { securityEnabledOnly = false; }
        return this.clone(Group, "getMemberGroups").postCore({
            body: JSON.stringify({
                securityEnabledOnly: securityEnabledOnly,
            }),
        });
    };
    /**
     * Deletes this group
     */
    Group.prototype.delete = function () {
        return this.deleteCore();
    };
    /**
     * Update the properties of a group object
     *
     * @param properties Set of properties of this group to update
     */
    Group.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    Group.prototype.removeFavorite = function () {
        return this.clone(Group, "removeFavorite").postCore();
    };
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    Group.prototype.resetUnseenCount = function () {
        return this.clone(Group, "resetUnseenCount").postCore();
    };
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    Group.prototype.subscribeByMail = function () {
        return this.clone(Group, "subscribeByMail").postCore();
    };
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    Group.prototype.unsubscribeByMail = function () {
        return this.clone(Group, "unsubscribeByMail").postCore();
    };
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    Group.prototype.getCalendarView = function (start, end) {
        var view = this.clone(Group, "calendarView");
        view.query.add("startDateTime", start.toISOString());
        view.query.add("endDateTime", end.toISOString());
        return view.get();
    };
    return Group;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=groups.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Teams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphqueryable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pnp_odata__ = __webpack_require__(4);






var Teams = /** @class */ (function () {
    function Teams() {
    }
    /**
     * Creates a new team and associated Group with the given information
     */
    Teams.prototype.create = function (name, description, teamProperties) {
        if (description === void 0) { description = ""; }
        if (teamProperties === void 0) { teamProperties = {}; }
        var groupProps = description && description.length > 0 ? { description: description } : {};
        return __WEBPACK_IMPORTED_MODULE_1__rest__["b" /* graph */].groups.add(name, name, __WEBPACK_IMPORTED_MODULE_2__groups__["b" /* GroupType */].Office365, groupProps).then(function (gar) {
            return gar.group.createTeam(teamProperties).then(function (data) {
                return {
                    data: data,
                    group: gar.group,
                    team: new Team(gar.group),
                };
            });
        });
    };
    return Teams;
}());

/**
 * Represents a Microsoft Team
 */
var Team = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Team, _super);
    function Team(baseUrl, path) {
        if (path === void 0) { path = "team"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Updates this team instance's properties
     *
     * @param properties The set of properties to update
     */
    // TODO:: update properties to be typed once type is available in graph-types
    Team.prototype.update = function (properties) {
        var _this = this;
        return this.clone(Team, "").setEndpoint(__WEBPACK_IMPORTED_MODULE_4__types__["a" /* GraphEndpoints */].Beta).patchCore({
            body: JSON.stringify(properties),
        }).then(function (data) {
            return {
                data: data,
                team: _this,
            };
        });
    };
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    Team.prototype.get = function (parser, options) {
        if (parser === void 0) { parser = new __WEBPACK_IMPORTED_MODULE_5__pnp_odata__["d" /* ODataDefaultParser */](); }
        if (options === void 0) { options = {}; }
        return this.clone(Team, "").setEndpoint(__WEBPACK_IMPORTED_MODULE_4__types__["a" /* GraphEndpoints */].Beta).getCore(parser, options);
    };
    return Team;
}(__WEBPACK_IMPORTED_MODULE_3__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=teams.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return graph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_graphlibconfig__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__me__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams__ = __webpack_require__(8);






var GraphRest = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphRest, _super);
    function GraphRest(baseUrl, path) {
        return _super.call(this, baseUrl, path) || this;
    }
    Object.defineProperty(GraphRest.prototype, "groups", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_3__groups__["c" /* Groups */](this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphRest.prototype, "teams", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_5__teams__["b" /* Teams */]();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphRest.prototype, "me", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_4__me__["a" /* Me */](this);
        },
        enumerable: true,
        configurable: true
    });
    GraphRest.prototype.setup = function (config) {
        Object(__WEBPACK_IMPORTED_MODULE_2__config_graphlibconfig__["b" /* setup */])(config);
    };
    return GraphRest;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["a" /* GraphQueryable */]));

var graph = new GraphRest("v1.0");
//# sourceMappingURL=rest.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphHttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pnp_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_graphlibconfig__ = __webpack_require__(6);


var GraphHttpClient = /** @class */ (function () {
    function GraphHttpClient() {
        this._impl = __WEBPACK_IMPORTED_MODULE_1__config_graphlibconfig__["a" /* GraphRuntimeConfig */].fetchClientFactory();
    }
    GraphHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["g" /* mergeHeaders */])(headers, __WEBPACK_IMPORTED_MODULE_1__config_graphlibconfig__["a" /* GraphRuntimeConfig */].headers);
        // second we add the local options so we can overwrite the globals
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["g" /* mergeHeaders */])(headers, options.headers);
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json;");
        }
        var opts = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(options, { headers: headers });
        return this.fetchRaw(url, opts);
    };
    GraphHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["g" /* mergeHeaders */])(rawHeaders, options.headers);
        options = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(options, { headers: rawHeaders });
        var retry = function (ctx) {
            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                if (response.status !== 429 && response.status !== 503) {
                    ctx.reject(response);
                }
                // grab our current delay
                var delay = ctx.delay;
                // Increment our counters.
                ctx.delay *= 2;
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(response);
                }
                // Set our retry timeout for {delay} milliseconds.
                setTimeout(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].getCtxCallback(_this, retry, ctx), delay);
            });
        };
        return new Promise(function (resolve, reject) {
            var retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(_this, retryContext);
        });
    };
    GraphHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["e" /* Util */].extend(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return GraphHttpClient;
}());

//# sourceMappingURL=graphhttpclient.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_graph__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "graph", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphRest", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphBatch", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphQueryable", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphQueryableCollection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphQueryableInstance", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphQueryableSearchableCollection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Teams", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GraphEndpoints", function() { return __WEBPACK_IMPORTED_MODULE_0__src_graph__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rest__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__rest__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__rest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groups__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__groups__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__groups__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__groups__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batch__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__batch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphqueryable__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__graphqueryable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__graphqueryable__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__graphqueryable__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__graphqueryable__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teams__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__teams__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__teams__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__types__["a"]; });






//# sourceMappingURL=graph.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

//----------------------------------------------------------------------
// AdalJS v1.0.17
// @preserve Copyright (c) Microsoft Open Technologies, Inc.
// All Rights Reserved
// Apache License 2.0
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//id
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//----------------------------------------------------------------------

var AuthenticationContext = (function () {

    'use strict';

    /**
     * Configuration options for Authentication Context.
     * @class config
     *  @property {string} tenant - Your target tenant.
     *  @property {string} clientId - Client ID assigned to your app by Azure Active Directory.
     *  @property {string} redirectUri - Endpoint at which you expect to receive tokens.Defaults to `window.location.href`.
     *  @property {string} instance - Azure Active Directory Instance.Defaults to `https://login.microsoftonline.com/`.
     *  @property {Array} endpoints - Collection of {Endpoint-ResourceId} used for automatically attaching tokens in webApi calls.
     *  @property {Boolean} popUp - Set this to true to enable login in a popup winodow instead of a full redirect.Defaults to `false`.
     *  @property {string} localLoginUrl - Set this to redirect the user to a custom login page.
     *  @property {function} displayCall - User defined function of handling the navigation to Azure AD authorization endpoint in case of login. Defaults to 'null'.
     *  @property {string} postLogoutRedirectUri - Redirects the user to postLogoutRedirectUri after logout. Defaults is 'redirectUri'.
     *  @property {string} cacheLocation - Sets browser storage to either 'localStorage' or sessionStorage'. Defaults to 'sessionStorage'.
     *  @property {Array.<string>} anonymousEndpoints Array of keywords or URI's. Adal will not attach a token to outgoing requests that have these keywords or uri. Defaults to 'null'.
     *  @property {number} expireOffsetSeconds If the cached token is about to be expired in the expireOffsetSeconds (in seconds), Adal will renew the token instead of using the cached token. Defaults to 300 seconds.
     *  @property {string} correlationId Unique identifier used to map the request with the response. Defaults to RFC4122 version 4 guid (128 bits).
     *  @property {number} loadFrameTimeout The number of milliseconds of inactivity before a token renewal response from AAD should be considered timed out.
     */

    /**
     * Creates a new AuthenticationContext object.
     * @constructor
     * @param {config}  config               Configuration options for AuthenticationContext
     */

    AuthenticationContext = function (config) {
        /**
         * Enum for request type
         * @enum {string}
         */
        this.REQUEST_TYPE = {
            LOGIN: 'LOGIN',
            RENEW_TOKEN: 'RENEW_TOKEN',
            UNKNOWN: 'UNKNOWN'
        };

        this.RESPONSE_TYPE = {
            ID_TOKEN_TOKEN: 'id_token token',
            TOKEN: 'token'
        };

        /**
         * Enum for storage constants
         * @enum {string}
         */
        this.CONSTANTS = {
            ACCESS_TOKEN: 'access_token',
            EXPIRES_IN: 'expires_in',
            ID_TOKEN: 'id_token',
            ERROR_DESCRIPTION: 'error_description',
            SESSION_STATE: 'session_state',
            ERROR: 'error',
            STORAGE: {
                TOKEN_KEYS: 'adal.token.keys',
                ACCESS_TOKEN_KEY: 'adal.access.token.key',
                EXPIRATION_KEY: 'adal.expiration.key',
                STATE_LOGIN: 'adal.state.login',
                STATE_RENEW: 'adal.state.renew',
                NONCE_IDTOKEN: 'adal.nonce.idtoken',
                SESSION_STATE: 'adal.session.state',
                USERNAME: 'adal.username',
                IDTOKEN: 'adal.idtoken',
                ERROR: 'adal.error',
                ERROR_DESCRIPTION: 'adal.error.description',
                LOGIN_REQUEST: 'adal.login.request',
                LOGIN_ERROR: 'adal.login.error',
                RENEW_STATUS: 'adal.token.renew.status',
                ANGULAR_LOGIN_REQUEST: 'adal.angular.login.request'
            },
            RESOURCE_DELIMETER: '|',
            CACHE_DELIMETER: '||',
            LOADFRAME_TIMEOUT: 6000,
            TOKEN_RENEW_STATUS_CANCELED: 'Canceled',
            TOKEN_RENEW_STATUS_COMPLETED: 'Completed',
            TOKEN_RENEW_STATUS_IN_PROGRESS: 'In Progress',
            LOGGING_LEVEL: {
                ERROR: 0,
                WARN: 1,
                INFO: 2,
                VERBOSE: 3
            },
            LEVEL_STRING_MAP: {
                0: 'ERROR:',
                1: 'WARNING:',
                2: 'INFO:',
                3: 'VERBOSE:'
            },
            POPUP_WIDTH: 483,
            POPUP_HEIGHT: 600
        };

        if (AuthenticationContext.prototype._singletonInstance) {
            return AuthenticationContext.prototype._singletonInstance;
        }
        AuthenticationContext.prototype._singletonInstance = this;

        // public
        this.instance = 'https://login.microsoftonline.com/';
        this.config = {};
        this.callback = null;
        this.popUp = false;
        this.isAngular = false;

        // private
        this._user = null;
        this._activeRenewals = {};
        this._loginInProgress = false;
        this._acquireTokenInProgress = false;
        this._renewStates = [];
        this._callBackMappedToRenewStates = {};
        this._callBacksMappedToRenewStates = {};
        this._openedWindows = [];
        this._requestType = this.REQUEST_TYPE.LOGIN;
        window._adalInstance = this;

        // validate before constructor assignments
        if (config.displayCall && typeof config.displayCall !== 'function') {
            throw new Error('displayCall is not a function');
        }

        if (!config.clientId) {
            throw new Error('clientId is required');
        }

        this.config = this._cloneConfig(config);

        if (this.config.navigateToLoginRequestUrl === undefined)
            this.config.navigateToLoginRequestUrl = true;

        if (this.config.popUp)
            this.popUp = true;

        if (this.config.callback && typeof this.config.callback === 'function')
            this.callback = this.config.callback;

        if (this.config.instance) {
            this.instance = this.config.instance;
        }

        // App can request idtoken for itself using clientid as resource
        if (!this.config.loginResource) {
            this.config.loginResource = this.config.clientId;
        }

        // redirect and logout_redirect are set to current location by default
        if (!this.config.redirectUri) {
            // strip off query parameters or hashes from the redirect uri as AAD does not allow those.
            this.config.redirectUri = window.location.href.split("?")[0].split("#")[0];
        }

        if (!this.config.postLogoutRedirectUri) {
            // strip off query parameters or hashes from the post logout redirect uri as AAD does not allow those.
            this.config.postLogoutRedirectUri = window.location.href.split("?")[0].split("#")[0];
        }

        if (!this.config.anonymousEndpoints) {
            this.config.anonymousEndpoints = [];
        }

        if (this.config.isAngular) {
            this.isAngular = this.config.isAngular;
        }

        if (this.config.loadFrameTimeout) {
            this.CONSTANTS.LOADFRAME_TIMEOUT = this.config.loadFrameTimeout;
        }
    };

    if (typeof window !== 'undefined') {
        window.Logging = {
            piiLoggingEnabled: false,
            level: 0,
            log: function (message) { }
        };
    }

    /**
     * Initiates the login process by redirecting the user to Azure AD authorization endpoint.
     */
    AuthenticationContext.prototype.login = function () {
        if (this._loginInProgress) {
            this.info("Login in progress");
            return;
        }

        this._loginInProgress = true;

        // Token is not present and user needs to login
        var expectedState = this._guid();
        this.config.state = expectedState;
        this._idTokenNonce = this._guid();
        var loginStartPage = this._getItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST);

        if (!loginStartPage || loginStartPage === "") {
            loginStartPage = window.location.href;
        }
        else {
            this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST, "")
        }

        this.verbose('Expected state: ' + expectedState + ' startPage:' + loginStartPage);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, loginStartPage);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, expectedState, true);
        this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce, true);
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');
        var urlNavigate = this._getNavigateUrl('id_token', null) + '&nonce=' + encodeURIComponent(this._idTokenNonce);

        if (this.config.displayCall) {
            // User defined way of handling the navigation
            this.config.displayCall(urlNavigate);
        }
        else if (this.popUp) {
            this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, '');// so requestInfo does not match redirect case
            this._renewStates.push(expectedState);
            this.registerCallback(expectedState, this.config.clientId, this.callback);
            this._loginPopup(urlNavigate);
        }
        else {
            this.promptUser(urlNavigate);
        }
    };

    /**
     * Configures popup window for login.
     * @ignore
     */
    AuthenticationContext.prototype._openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
            * adding winLeft and winTop to account for dual monitor
            * using screenLeft and screenTop for IE8 and earlier
            */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
            * window.innerWidth displays browser window's height and width excluding toolbars
            * using document.documentElement.clientWidth for IE8 and earlier
            */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;

            var popupWindow = window.open(urlNavigate, title, 'width=' + popUpWidth + ', height=' + popUpHeight + ', top=' + top + ', left=' + left);

            if (popupWindow.focus) {
                popupWindow.focus();
            }

            return popupWindow;
        } catch (e) {
            this.warn('Error opening popup, ' + e.message);
            this._loginInProgress = false;
            this._acquireTokenInProgress = false;
            return null;
        }
    }

    AuthenticationContext.prototype._handlePopupError = function (loginCallback, resource, error, errorDesc, loginError) {
        this.warn(errorDesc);
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, error);
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, errorDesc);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, loginError);

        if (resource && this._activeRenewals[resource]) {
            this._activeRenewals[resource] = null;
        }

        this._loginInProgress = false;
        this._acquireTokenInProgress = false;

        if (loginCallback) {
            loginCallback(errorDesc, null, error);
        }
    }

    /**
     * After authorization, the user will be sent to your specified redirect_uri with the user's bearer token
     * attached to the URI fragment as an id_token field. It closes popup window after redirection.
     * @ignore
     */
    AuthenticationContext.prototype._loginPopup = function (urlNavigate, resource, callback) {
        var popupWindow = this._openPopup(urlNavigate, "login", this.CONSTANTS.POPUP_WIDTH, this.CONSTANTS.POPUP_HEIGHT);
        var loginCallback = callback || this.callback;

        if (popupWindow == null) {
            var error = 'Error opening popup';
            var errorDesc = 'Popup Window is null. This can happen if you are using IE';
            this._handlePopupError(loginCallback, resource, error, errorDesc, errorDesc);
            return;
        }

        this._openedWindows.push(popupWindow);

        if (this.config.redirectUri.indexOf('#') != -1) {
            var registeredRedirectUri = this.config.redirectUri.split("#")[0];
        }

        else {
            var registeredRedirectUri = this.config.redirectUri;
        }

        var that = this;

        var pollTimer = window.setInterval(function () {
            if (!popupWindow || popupWindow.closed || popupWindow.closed === undefined) {
                var error = 'Popup Window closed';
                var errorDesc = 'Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge'

                if (that.isAngular) {
                    that._broadcast('adal:popUpClosed', errorDesc + that.CONSTANTS.RESOURCE_DELIMETER + error);
                }

                that._handlePopupError(loginCallback, resource, error, errorDesc, errorDesc);
                window.clearInterval(pollTimer);
                return;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                if (encodeURI(popUpWindowLocation.href).indexOf(encodeURI(registeredRedirectUri)) != -1) {
                    if (that.isAngular) {
                        that._broadcast('adal:popUpHashChanged', popUpWindowLocation.hash);
                    }
                    else {
                        that.handleWindowCallback(popUpWindowLocation.hash);
                    }

                    window.clearInterval(pollTimer);
                    that._loginInProgress = false;
                    that._acquireTokenInProgress = false;
                    that.info("Closing popup window");
                    that._openedWindows = [];
                    popupWindow.close();
                    return;
                }
            } catch (e) {
            }
        }, 1);
    };

    AuthenticationContext.prototype._broadcast = function (eventName, data) {
        // Custom Event is not supported in IE, below IIFE will polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher
        (function () {

            if (typeof window.CustomEvent === "function") {
                return false;
            }

            function CustomEvent(event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }

            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();

        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };

    AuthenticationContext.prototype.loginInProgress = function () {
        return this._loginInProgress;
    };

    /**
     * Checks for the resource in the cache. By default, cache location is Session Storage
     * @ignore
     * @returns {Boolean} 'true' if login is in progress, else returns 'false'.
     */
    AuthenticationContext.prototype._hasResource = function (key) {
        var keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);
        return keys && !this._isEmpty(keys) && (keys.indexOf(key + this.CONSTANTS.RESOURCE_DELIMETER) > -1);
    };

    /**
     * Gets token for the specified resource from the cache.
     * @param {string}   resource A URI that identifies the resource for which the token is requested.
     * @returns {string} token if if it exists and not expired, otherwise null.
     */
    AuthenticationContext.prototype.getCachedToken = function (resource) {
        if (!this._hasResource(resource)) {
            return null;
        }

        var token = this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource);
        var expiry = this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource);

        // If expiration is within offset, it will force renew
        var offset = this.config.expireOffsetSeconds || 300;

        if (expiry && (expiry > this._now() + offset)) {
            return token;
        } else {
            this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, '');
            this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, 0);
            return null;
        }
    };

    /**
    * User information from idtoken.
    *  @class User
    *  @property {string} userName - username assigned from upn or email.
    *  @property {object} profile - properties parsed from idtoken.
    */

    /**
     * If user object exists, returns it. Else creates a new user object by decoding id_token from the cache.
     * @returns {User} user object
     */
    AuthenticationContext.prototype.getCachedUser = function () {
        if (this._user) {
            return this._user;
        }

        var idtoken = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
        this._user = this._createUser(idtoken);
        return this._user;
    };

    /**
     * Adds the passed callback to the array of callbacks for the specified resource and puts the array on the window object. 
     * @param {string}   resource A URI that identifies the resource for which the token is requested.
     * @param {string}   expectedState A unique identifier (guid).
     * @param {tokenCallback} callback - The callback provided by the caller. It will be called with token or error.
     */
    AuthenticationContext.prototype.registerCallback = function (expectedState, resource, callback) {
        this._activeRenewals[resource] = expectedState;

        if (!this._callBacksMappedToRenewStates[expectedState]) {
            this._callBacksMappedToRenewStates[expectedState] = [];
        }

        var self = this;
        this._callBacksMappedToRenewStates[expectedState].push(callback);

        if (!this._callBackMappedToRenewStates[expectedState]) {
            this._callBackMappedToRenewStates[expectedState] = function (errorDesc, token, error, tokenType) {
                self._activeRenewals[resource] = null;

                for (var i = 0; i < self._callBacksMappedToRenewStates[expectedState].length; ++i) {
                    try {
                        self._callBacksMappedToRenewStates[expectedState][i](errorDesc, token, error, tokenType);
                    }
                    catch (error) {
                        self.warn(error);
                    }
                }

                self._callBacksMappedToRenewStates[expectedState] = null;
                self._callBackMappedToRenewStates[expectedState] = null;
            };
        }
    };

    // var errorResponse = {error:'', error_description:''};
    // var token = 'string token';
    // callback(errorResponse, token)
    // with callback
    /**
     * Acquires access token with hidden iframe
     * @ignore
     */
    AuthenticationContext.prototype._renewToken = function (resource, callback, responseType) {
        // use iframe to try to renew token
        // use given resource to create new authz url
        this.info('renewToken is called for resource:' + resource);
        var frameHandle = this._addAdalFrame('adalRenewFrame' + resource);
        var expectedState = this._guid() + '|' + resource;
        this.config.state = expectedState;
        // renew happens in iframe, so it keeps javascript context
        this._renewStates.push(expectedState);
        this.verbose('Renew token Expected state: ' + expectedState);
        // remove the existing prompt=... query parameter and add prompt=none
        responseType = responseType || 'token';
        var urlNavigate = this._urlRemoveQueryStringParameter(this._getNavigateUrl(responseType, resource), 'prompt');

        if (responseType === this.RESPONSE_TYPE.ID_TOKEN_TOKEN) {
            this._idTokenNonce = this._guid();
            this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce, true);
            urlNavigate += '&nonce=' + encodeURIComponent(this._idTokenNonce);
        }

        urlNavigate = urlNavigate + '&prompt=none';
        urlNavigate = this._addHintParameters(urlNavigate);
        this.registerCallback(expectedState, resource, callback);
        this.verbosePii('Navigate to:' + urlNavigate);
        frameHandle.src = 'about:blank';
        this._loadFrameTimeout(urlNavigate, 'adalRenewFrame' + resource, resource);

    };

    /**
     * Renews idtoken for app's own backend when resource is clientId and calls the callback with token/error
     * @ignore
     */
    AuthenticationContext.prototype._renewIdToken = function (callback, responseType) {
        // use iframe to try to renew token
        this.info('renewIdToken is called');
        var frameHandle = this._addAdalFrame('adalIdTokenFrame');
        var expectedState = this._guid() + '|' + this.config.clientId;
        this._idTokenNonce = this._guid();
        this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce, true);
        this.config.state = expectedState;
        // renew happens in iframe, so it keeps javascript context
        this._renewStates.push(expectedState);
        this.verbose('Renew Idtoken Expected state: ' + expectedState);
        // remove the existing prompt=... query parameter and add prompt=none
        var resource = responseType === null || typeof (responseType) === "undefined" ? null : this.config.clientId;
        var responseType = responseType || 'id_token';
        var urlNavigate = this._urlRemoveQueryStringParameter(this._getNavigateUrl(responseType, resource), 'prompt');
        urlNavigate = urlNavigate + '&prompt=none';
        urlNavigate = this._addHintParameters(urlNavigate);
        urlNavigate += '&nonce=' + encodeURIComponent(this._idTokenNonce);
        this.registerCallback(expectedState, this.config.clientId, callback);
        this.verbosePii('Navigate to:' + urlNavigate);
        frameHandle.src = 'about:blank';
        this._loadFrameTimeout(urlNavigate, 'adalIdTokenFrame', this.config.clientId);
    };

    /**
     * Checks if the authorization endpoint URL contains query string parameters
     * @ignore
     */
    AuthenticationContext.prototype._urlContainsQueryStringParameter = function (name, url) {
        // regex to detect pattern of a ? or & followed by the name parameter and an equals character
        var regex = new RegExp("[\\?&]" + name + "=");
        return regex.test(url);
    }

    /**
     * Removes the query string parameter from the authorization endpoint URL if it exists
     * @ignore
     */
    AuthenticationContext.prototype._urlRemoveQueryStringParameter = function (url, name) {
        // we remove &name=value, name=value& and name=value
        // &name=value
        var regex = new RegExp('(\\&' + name + '=)[^\&]+');
        url = url.replace(regex, '');
        // name=value&
        regex = new RegExp('(' + name + '=)[^\&]+&');
        url = url.replace(regex, '');
        // name=value
        regex = new RegExp('(' + name + '=)[^\&]+');
        url = url.replace(regex, '');
        return url;
    }

    // Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left
    // registered when network errors occur and subsequent token requests for same resource are registered to the pending request
    /**
     * @ignore
     */
    AuthenticationContext.prototype._loadFrameTimeout = function (urlNavigation, frameName, resource) {
        //set iframe session to pending
        this.verbose('Set loading state to pending for: ' + resource);
        this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS + resource, this.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS);
        this._loadFrame(urlNavigation, frameName);
        var self = this;

        setTimeout(function () {
            if (self._getItem(self.CONSTANTS.STORAGE.RENEW_STATUS + resource) === self.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS) {
                // fail the iframe session if it's in pending state
                self.verbose('Loading frame has timed out after: ' + (self.CONSTANTS.LOADFRAME_TIMEOUT / 1000) + ' seconds for resource ' + resource);
                var expectedState = self._activeRenewals[resource];

                if (expectedState && self._callBackMappedToRenewStates[expectedState]) {
                    self._callBackMappedToRenewStates[expectedState]('Token renewal operation failed due to timeout', null, 'Token Renewal Failed');
                }

                self._saveItem(self.CONSTANTS.STORAGE.RENEW_STATUS + resource, self.CONSTANTS.TOKEN_RENEW_STATUS_CANCELED);
            }
        }, self.CONSTANTS.LOADFRAME_TIMEOUT);
    }

    /**
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    AuthenticationContext.prototype._loadFrame = function (urlNavigate, frameName) {
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        var self = this;
        self.info('LoadFrame: ' + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = self._addAdalFrame(frameCheck);

            if (frameHandle.src === '' || frameHandle.src === 'about:blank') {
                frameHandle.src = urlNavigate;
                self._loadFrame(urlNavigate, frameCheck);
            }

        }, 500);
    };

    /**
     * @callback tokenCallback
     * @param {string} error_description error description returned from AAD if token request fails.
     * @param {string} token token returned from AAD if token request is successful.
     * @param {string} error error message returned from AAD if token request fails.
     */

    /**
     * Acquires token from the cache if it is not expired. Otherwise sends request to AAD to obtain a new token.
     * @param {string}   resource  ResourceUri identifying the target resource
     * @param {tokenCallback} callback -  The callback provided by the caller. It will be called with token or error.
     */
    AuthenticationContext.prototype.acquireToken = function (resource, callback) {
        if (this._isEmpty(resource)) {
            this.warn('resource is required');
            callback('resource is required', null, 'resource is required');
            return;
        }

        var token = this.getCachedToken(resource);

        if (token) {
            this.info('Token is already in cache for resource:' + resource);
            callback(null, token, null);
            return;
        }

        if (!this._user && !(this.config.extraQueryParameter && this.config.extraQueryParameter.indexOf('login_hint') !== -1)) {
            this.warn('User login is required');
            callback('User login is required', null, 'login required');
            return;
        }

        // renew attempt with iframe
        // Already renewing for this resource, callback when we get the token.
        if (this._activeRenewals[resource]) {
            // Active renewals contains the state for each renewal.
            this.registerCallback(this._activeRenewals[resource], resource, callback);
        }
        else {
            this._requestType = this.REQUEST_TYPE.RENEW_TOKEN;
            if (resource === this.config.clientId) {
                // App uses idtoken to send to api endpoints
                // Default resource is tracked as clientid to store this token
                if (this._user) {
                    this.verbose('renewing idtoken');
                    this._renewIdToken(callback);
                }
                else {
                    this.verbose('renewing idtoken and access_token');
                    this._renewIdToken(callback, this.RESPONSE_TYPE.ID_TOKEN_TOKEN);
                }
            } else {
                if (this._user) {
                    this.verbose('renewing access_token');
                    this._renewToken(resource, callback);
                }
                else {
                    this.verbose('renewing idtoken and access_token');
                    this._renewToken(resource, callback, this.RESPONSE_TYPE.ID_TOKEN_TOKEN);
                }
            }
        }
    };

    /**
  * Acquires token (interactive flow using a popUp window) by sending request to AAD to obtain a new token.
  * @param {string}   resource  ResourceUri identifying the target resource
  * @param {string}   extraQueryParameters  extraQueryParameters to add to the authentication request
  * @param {tokenCallback} callback -  The callback provided by the caller. It will be called with token or error.
  */
    AuthenticationContext.prototype.acquireTokenPopup = function (resource, extraQueryParameters, claims, callback) {
        if (this._isEmpty(resource)) {
            this.warn('resource is required');
            callback('resource is required', null, 'resource is required');
            return;
        }

        if (!this._user) {
            this.warn('User login is required');
            callback('User login is required', null, 'login required');
            return;
        }

        if (this._acquireTokenInProgress) {
            this.warn("Acquire token interactive is already in progress")
            callback("Acquire token interactive is already in progress", null, "Acquire token interactive is already in progress");
            return;
        }

        var expectedState = this._guid() + '|' + resource;
        this.config.state = expectedState;
        this._renewStates.push(expectedState);
        this._requestType = this.REQUEST_TYPE.RENEW_TOKEN;
        this.verbose('Renew token Expected state: ' + expectedState);
        // remove the existing prompt=... query parameter and add prompt=select_account
        var urlNavigate = this._urlRemoveQueryStringParameter(this._getNavigateUrl('token', resource), 'prompt');
        urlNavigate = urlNavigate + '&prompt=select_account';

        if (extraQueryParameters) {
            urlNavigate += extraQueryParameters;
        }

        if (claims && (urlNavigate.indexOf("&claims") === -1)) {
            urlNavigate += '&claims=' + encodeURIComponent(claims);
        }
        else if (claims && (urlNavigate.indexOf("&claims") !== -1)) {
            throw new Error('Claims cannot be passed as an extraQueryParameter');
        }

        urlNavigate = this._addHintParameters(urlNavigate);
        this._acquireTokenInProgress = true;
        this.info('acquireToken interactive is called for the resource ' + resource);
        this.registerCallback(expectedState, resource, callback);
        this._loginPopup(urlNavigate, resource, callback);

    };

    /**
      * Acquires token (interactive flow using a redirect) by sending request to AAD to obtain a new token. In this case the callback passed in the Authentication
      * request constructor will be called.
      * @param {string}   resource  ResourceUri identifying the target resource
      * @param {string}   extraQueryParameters  extraQueryParameters to add to the authentication request
      */
    AuthenticationContext.prototype.acquireTokenRedirect = function (resource, extraQueryParameters, claims) {
        if (this._isEmpty(resource)) {
            this.warn('resource is required');
            callback('resource is required', null, 'resource is required');
            return;
        }

        var callback = this.callback;

        if (!this._user) {
            this.warn('User login is required');
            callback('User login is required', null, 'login required');
            return;
        }

        if (this._acquireTokenInProgress) {
            this.warn("Acquire token interactive is already in progress")
            callback("Acquire token interactive is already in progress", null, "Acquire token interactive is already in progress");
            return;
        }

        var expectedState = this._guid() + '|' + resource;
        this.config.state = expectedState;
        this.verbose('Renew token Expected state: ' + expectedState);

        // remove the existing prompt=... query parameter and add prompt=select_account
        var urlNavigate = this._urlRemoveQueryStringParameter(this._getNavigateUrl('token', resource), 'prompt');
        urlNavigate = urlNavigate + '&prompt=select_account';
        if (extraQueryParameters) {
            urlNavigate += extraQueryParameters;
        }

        if (claims && (urlNavigate.indexOf("&claims") === -1)) {
            urlNavigate += '&claims=' + encodeURIComponent(claims);
        }
        else if (claims && (urlNavigate.indexOf("&claims") !== -1)) {
            throw new Error('Claims cannot be passed as an extraQueryParameter');
        }

        urlNavigate = this._addHintParameters(urlNavigate);
        this._acquireTokenInProgress = true;
        this.info('acquireToken interactive is called for the resource ' + resource);
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, window.location.href);
        this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, expectedState, true);
        this.promptUser(urlNavigate);
    };
    /**
     * Redirects the browser to Azure AD authorization endpoint.
     * @param {string}   urlNavigate  Url of the authorization endpoint.
     */
    AuthenticationContext.prototype.promptUser = function (urlNavigate) {
        if (urlNavigate) {
            this.infoPii('Navigate to:' + urlNavigate);
            window.location.replace(urlNavigate);
        } else {
            this.info('Navigate url is empty');
        }
    };

    /**
     * Clears cache items.
     */
    AuthenticationContext.prototype.clearCache = function () {
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, '');
        this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST, '');
        this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, '');
        this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, '');
        this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, '');
        this._renewStates = [];
        this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, '');
        this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, '');
        var keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);

        if (!this._isEmpty(keys)) {
            keys = keys.split(this.CONSTANTS.RESOURCE_DELIMETER);
            for (var i = 0; i < keys.length && keys[i] !== ""; i++) {
                this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + keys[i], '');
                this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + keys[i], 0);
            }
        }

        this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, '');
    };

    /**
     * Clears cache items for a given resource.
     * @param {string}  resource a URI that identifies the resource.
     */
    AuthenticationContext.prototype.clearCacheForResource = function (resource) {
        this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');

        if (this._hasResource(resource)) {
            this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, '');
            this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, 0);
        }
    };

    /**
     * Redirects user to logout endpoint.
     * After logout, it will redirect to postLogoutRedirectUri if added as a property on the config object.
     */
    AuthenticationContext.prototype.logOut = function () {
        this.clearCache();
        this._user = null;
        var urlNavigate;

        if (this.config.logOutUri) {
            urlNavigate = this.config.logOutUri;
        } else {
            var tenant = 'common';
            var logout = '';

            if (this.config.tenant) {
                tenant = this.config.tenant;
            }

            if (this.config.postLogoutRedirectUri) {
                logout = 'post_logout_redirect_uri=' + encodeURIComponent(this.config.postLogoutRedirectUri);
            }

            urlNavigate = this.instance + tenant + '/oauth2/logout?' + logout;
        }

        this.infoPii('Logout navigate to: ' + urlNavigate);
        this.promptUser(urlNavigate);
    };

    AuthenticationContext.prototype._isEmpty = function (str) {
        return (typeof str === 'undefined' || !str || 0 === str.length);
    };

    /**
     * @callback userCallback
     * @param {string} error error message if user info is not available.
     * @param {User} user user object retrieved from the cache.
     */

    /**
     * Calls the passed in callback with the user object or error message related to the user.
     * @param {userCallback} callback - The callback provided by the caller. It will be called with user or error.
     */
    AuthenticationContext.prototype.getUser = function (callback) {
        // IDToken is first call
        if (typeof callback !== 'function') {
            throw new Error('callback is not a function');
        }

        // user in memory
        if (this._user) {
            callback(null, this._user);
            return;
        }

        // frame is used to get idtoken
        var idtoken = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);

        if (!this._isEmpty(idtoken)) {
            this.info('User exists in cache: ');
            this._user = this._createUser(idtoken);
            callback(null, this._user);
        } else {
            this.warn('User information is not available');
            callback('User information is not available', null);
        }
    };

    /**
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time.
     * domain_hint can be one of users/organisations which when added skips the email based discovery process of the user.
     * @ignore
     */
    AuthenticationContext.prototype._addHintParameters = function (urlNavigate) {
        //If you don�t use prompt=none, then if the session does not exist, there will be a failure.
        //If sid is sent alongside domain or login hints, there will be a failure since request is ambiguous.
        //If sid is sent with a prompt value other than none or attempt_none, there will be a failure since the request is ambiguous.

        if (this._user && this._user.profile) {
            if (this._user.profile.sid && urlNavigate.indexOf('&prompt=none') !== -1) {
                // don't add sid twice if user provided it in the extraQueryParameter value
                if (!this._urlContainsQueryStringParameter("sid", urlNavigate)) {
                    // add sid
                    urlNavigate += '&sid=' + encodeURIComponent(this._user.profile.sid);
                }
            }
            else if (this._user.profile.upn) {
                // don't add login_hint twice if user provided it in the extraQueryParameter value
                if (!this._urlContainsQueryStringParameter("login_hint", urlNavigate)) {
                    // add login_hint
                    urlNavigate += '&login_hint=' + encodeURIComponent(this._user.profile.upn);
                }
                // don't add domain_hint twice if user provided it in the extraQueryParameter value
                if (!this._urlContainsQueryStringParameter("domain_hint", urlNavigate) && this._user.profile.upn.indexOf('@') > -1) {
                    var parts = this._user.profile.upn.split('@');
                    // local part can include @ in quotes. Sending last part handles that.
                    urlNavigate += '&domain_hint=' + encodeURIComponent(parts[parts.length - 1]);
                }
            }

        }

        return urlNavigate;
    }

    /**
     * Creates a user object by decoding the id_token
     * @ignore
     */
    AuthenticationContext.prototype._createUser = function (idToken) {
        var user = null;
        var parsedJson = this._extractIdToken(idToken);
        if (parsedJson && parsedJson.hasOwnProperty('aud')) {
            if (parsedJson.aud.toLowerCase() === this.config.clientId.toLowerCase()) {

                user = {
                    userName: '',
                    profile: parsedJson
                };

                if (parsedJson.hasOwnProperty('upn')) {
                    user.userName = parsedJson.upn;
                } else if (parsedJson.hasOwnProperty('email')) {
                    user.userName = parsedJson.email;
                }
            } else {
                this.warn('IdToken has invalid aud field');
            }

        }

        return user;
    };

    /**
     * Returns the anchor part(#) of the URL
     * @ignore
     */
    AuthenticationContext.prototype._getHash = function (hash) {
        if (hash.indexOf('#/') > -1) {
            hash = hash.substring(hash.indexOf('#/') + 2);
        } else if (hash.indexOf('#') > -1) {
            hash = hash.substring(1);
        }

        return hash;
    };

    /**
     * Checks if the URL fragment contains access token, id token or error_description.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {Boolean} true if response contains id_token, access_token or error, false otherwise.
     */
    AuthenticationContext.prototype.isCallback = function (hash) {
        hash = this._getHash(hash);
        var parameters = this._deserialize(hash);
        return (
            parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) ||
            parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) ||
            parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)
        );
    };

    /**
     * Gets login error
     * @returns {string} error message related to login.
     */
    AuthenticationContext.prototype.getLoginError = function () {
        return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR);
    };

    /**
     * Request info object created from the response received from AAD.
     *  @class RequestInfo
     *  @property {object} parameters - object comprising of fields such as id_token/error, session_state, state, e.t.c.
     *  @property {REQUEST_TYPE} requestType - either LOGIN, RENEW_TOKEN or UNKNOWN.
     *  @property {boolean} stateMatch - true if state is valid, false otherwise.
     *  @property {string} stateResponse - unique guid used to match the response with the request.
     *  @property {boolean} valid - true if requestType contains id_token, access_token or error, false otherwise.
     */

    /**
     * Creates a requestInfo object from the URL fragment and returns it.
     * @returns {RequestInfo} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     */
    AuthenticationContext.prototype.getRequestInfo = function (hash) {
        hash = this._getHash(hash);
        var parameters = this._deserialize(hash);
        var requestInfo = {
            valid: false,
            parameters: {},
            stateMatch: false,
            stateResponse: '',
            requestType: this.REQUEST_TYPE.UNKNOWN,
        };

        if (parameters) {
            requestInfo.parameters = parameters;
            if (parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) ||
                parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) ||
                parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)) {

                requestInfo.valid = true;

                // which call
                var stateResponse = '';
                if (parameters.hasOwnProperty('state')) {
                    this.verbose('State: ' + parameters.state);
                    stateResponse = parameters.state;
                } else {
                    this.warn('No state returned');
                    return requestInfo;
                }

                requestInfo.stateResponse = stateResponse;

                // async calls can fire iframe and login request at the same time if developer does not use the API as expected
                // incoming callback needs to be looked up to find the request type
                if (this._matchState(requestInfo)) { // loginRedirect or acquireTokenRedirect
                    return requestInfo;
                }

                // external api requests may have many renewtoken requests for different resource
                if (!requestInfo.stateMatch && window.parent) {
                    requestInfo.requestType = this._requestType;
                    var statesInParentContext = this._renewStates;
                    for (var i = 0; i < statesInParentContext.length; i++) {
                        if (statesInParentContext[i] === requestInfo.stateResponse) {
                            requestInfo.stateMatch = true;
                            break;
                        }
                    }
                }
            }
        }
        return requestInfo;
    };

    /**
    * Matches nonce from the request with the response.
    * @ignore
    */
    AuthenticationContext.prototype._matchNonce = function (user) {
        var requestNonce = this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN);

        if (requestNonce) {
            requestNonce = requestNonce.split(this.CONSTANTS.CACHE_DELIMETER);
            for (var i = 0; i < requestNonce.length; i++) {
                if (requestNonce[i] === user.profile.nonce) {
                    return true;
                }
            }
        }

        return false;
    };

    /**
    * Matches state from the request with the response.
    * @ignore
    */
    AuthenticationContext.prototype._matchState = function (requestInfo) {
        var loginStates = this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN);

        if (loginStates) {
            loginStates = loginStates.split(this.CONSTANTS.CACHE_DELIMETER);
            for (var i = 0; i < loginStates.length; i++) {
                if (loginStates[i] === requestInfo.stateResponse) {
                    requestInfo.requestType = this.REQUEST_TYPE.LOGIN;
                    requestInfo.stateMatch = true;
                    return true;
                }
            }
        }

        var acquireTokenStates = this._getItem(this.CONSTANTS.STORAGE.STATE_RENEW);

        if (acquireTokenStates) {
            acquireTokenStates = acquireTokenStates.split(this.CONSTANTS.CACHE_DELIMETER);
            for (var i = 0; i < acquireTokenStates.length; i++) {
                if (acquireTokenStates[i] === requestInfo.stateResponse) {
                    requestInfo.requestType = this.REQUEST_TYPE.RENEW_TOKEN;
                    requestInfo.stateMatch = true;
                    return true;
                }
            }
        }

        return false;

    };

    /**
     * Extracts resource value from state.
     * @ignore
     */
    AuthenticationContext.prototype._getResourceFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf('|');

            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }

        return '';
    };

    /**
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the user object.
     */
    AuthenticationContext.prototype.saveTokenFromHash = function (requestInfo) {
        this.info('State status:' + requestInfo.stateMatch + '; Request type:' + requestInfo.requestType);
        this._saveItem(this.CONSTANTS.STORAGE.ERROR, '');
        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, '');

        var resource = this._getResourceFromState(requestInfo.stateResponse);

        // Record error
        if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)) {
            this.infoPii('Error :' + requestInfo.parameters.error + '; Error description:' + requestInfo.parameters[this.CONSTANTS.ERROR_DESCRIPTION]);
            this._saveItem(this.CONSTANTS.STORAGE.ERROR, requestInfo.parameters.error);
            this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, requestInfo.parameters[this.CONSTANTS.ERROR_DESCRIPTION]);

            if (requestInfo.requestType === this.REQUEST_TYPE.LOGIN) {
                this._loginInProgress = false;
                this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, requestInfo.parameters.error_description);
            }
        } else {
            // It must verify the state from redirect
            if (requestInfo.stateMatch) {
                // record tokens to storage if exists
                this.info('State is right');
                if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE)) {
                    this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, requestInfo.parameters[this.CONSTANTS.SESSION_STATE]);
                }

                var keys;

                if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)) {
                    this.info('Fragment has access token');

                    if (!this._hasResource(resource)) {
                        keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || '';
                        this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, keys + resource + this.CONSTANTS.RESOURCE_DELIMETER);
                    }

                    // save token with related resource
                    this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, requestInfo.parameters[this.CONSTANTS.ACCESS_TOKEN]);
                    this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, this._expiresIn(requestInfo.parameters[this.CONSTANTS.EXPIRES_IN]));
                }

                if (requestInfo.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)) {
                    this.info('Fragment has id token');
                    this._loginInProgress = false;
                    this._user = this._createUser(requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);
                    if (this._user && this._user.profile) {
                        if (!this._matchNonce(this._user)) {
                            this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, 'Nonce received: ' + this._user.profile.nonce + ' is not same as requested: ' +
                                this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN));
                            this._user = null;
                        } else {
                            this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);

                            // Save idtoken as access token for app itself
                            resource = this.config.loginResource ? this.config.loginResource : this.config.clientId;

                            if (!this._hasResource(resource)) {
                                keys = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || '';
                                this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, keys + resource + this.CONSTANTS.RESOURCE_DELIMETER);
                            }

                            this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + resource, requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);
                            this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + resource, this._user.profile.exp);
                        }
                    }
                    else {
                        requestInfo.parameters['error'] = 'invalid id_token';
                        requestInfo.parameters['error_description'] = 'Invalid id_token. id_token: ' + requestInfo.parameters[this.CONSTANTS.ID_TOKEN];
                        this._saveItem(this.CONSTANTS.STORAGE.ERROR, 'invalid id_token');
                        this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, 'Invalid id_token. id_token: ' + requestInfo.parameters[this.CONSTANTS.ID_TOKEN]);
                    }
                }
            } else {
                requestInfo.parameters['error'] = 'Invalid_state';
                requestInfo.parameters['error_description'] = 'Invalid_state. state: ' + requestInfo.stateResponse;
                this._saveItem(this.CONSTANTS.STORAGE.ERROR, 'Invalid_state');
                this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, 'Invalid_state. state: ' + requestInfo.stateResponse);
            }
        }

        this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS + resource, this.CONSTANTS.TOKEN_RENEW_STATUS_COMPLETED);
    };

    /**
     * Gets resource for given endpoint if mapping is provided with config.
     * @param {string} endpoint  -  The URI for which the resource Id is requested.
     * @returns {string} resource for this API endpoint.
     */
    AuthenticationContext.prototype.getResourceForEndpoint = function (endpoint) {

        // if user specified list of anonymous endpoints, no need to send token to these endpoints, return null.
        if (this.config && this.config.anonymousEndpoints) {
            for (var i = 0; i < this.config.anonymousEndpoints.length; i++) {
                if (endpoint.indexOf(this.config.anonymousEndpoints[i]) > -1) {
                    return null;
                }
            }
        }

        if (this.config && this.config.endpoints) {
            for (var configEndpoint in this.config.endpoints) {
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(configEndpoint) > -1) {
                    return this.config.endpoints[configEndpoint];
                }
            }
        }

        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf('http://') > -1 || endpoint.indexOf('https://') > -1) {
            if (this._getHostFromUri(endpoint) === this._getHostFromUri(this.config.redirectUri)) {
                return this.config.loginResource;
            }
        }
        else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.            
            return this.config.loginResource;
        }

        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };

    /**
     * Strips the protocol part of the URL and returns it.
     * @ignore
     */
    AuthenticationContext.prototype._getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, '');
        extractedUri = extractedUri.split('/')[0];
        return extractedUri;
    };

    /**
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    AuthenticationContext.prototype.handleWindowCallback = function (hash) {
        // This is for regular javascript usage for redirect handling
        // need to make sure this is for callback
        if (hash == null) {
            hash = window.location.hash;
        }

        if (this.isCallback(hash)) {
            var self = null;
            var isPopup = false;

            if (this._openedWindows.length > 0 && this._openedWindows[this._openedWindows.length - 1].opener
                && this._openedWindows[this._openedWindows.length - 1].opener._adalInstance) {
                self = this._openedWindows[this._openedWindows.length - 1].opener._adalInstance;
                isPopup = true;
            }
            else if (window.parent && window.parent._adalInstance) {
                self = window.parent._adalInstance;
            }

            var requestInfo = self.getRequestInfo(hash);
            var token, tokenReceivedCallback, tokenType = null;

            if (isPopup || window.parent !== window) {
                tokenReceivedCallback = self._callBackMappedToRenewStates[requestInfo.stateResponse];
            }
            else {
                tokenReceivedCallback = self.callback;
            }

            self.info("Returned from redirect url");
            self.saveTokenFromHash(requestInfo);

            if ((requestInfo.requestType === this.REQUEST_TYPE.RENEW_TOKEN) && window.parent) {
                if (window.parent !== window) {
                    self.verbose("Window is in iframe, acquiring token silently");
                } else {
                    self.verbose("acquiring token interactive in progress");
                }

                token = requestInfo.parameters[self.CONSTANTS.ACCESS_TOKEN] || requestInfo.parameters[self.CONSTANTS.ID_TOKEN];
                tokenType = self.CONSTANTS.ACCESS_TOKEN;
            } else if (requestInfo.requestType === this.REQUEST_TYPE.LOGIN) {
                token = requestInfo.parameters[self.CONSTANTS.ID_TOKEN];
                tokenType = self.CONSTANTS.ID_TOKEN;
            }

            var errorDesc = requestInfo.parameters[self.CONSTANTS.ERROR_DESCRIPTION];
            var error = requestInfo.parameters[self.CONSTANTS.ERROR];
            try {
                if (tokenReceivedCallback) {
                    tokenReceivedCallback(errorDesc, token, error, tokenType);
                }

            } catch (err) {
                self.error("Error occurred in user defined callback function: " + err);
            }

            if (window.parent === window && !isPopup) {
                if (self.config.navigateToLoginRequestUrl) {
                    window.location.href = self._getItem(self.CONSTANTS.STORAGE.LOGIN_REQUEST);
                } else window.location.hash = '';
            }
        }
    };

    /**
     * Constructs the authorization endpoint URL and returns it.
     * @ignore
     */
    AuthenticationContext.prototype._getNavigateUrl = function (responseType, resource) {
        var tenant = 'common';
        if (this.config.tenant) {
            tenant = this.config.tenant;
        }

        var urlNavigate = this.instance + tenant + '/oauth2/authorize' + this._serialize(responseType, this.config, resource) + this._addLibMetadata();
        this.info('Navigate url:' + urlNavigate);
        return urlNavigate;
    };

    /**
     * Returns the decoded id_token.
     * @ignore
     */
    AuthenticationContext.prototype._extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this._decodeJwt(encodedIdToken);

        if (!decodedToken) {
            return null;
        }

        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this._base64DecodeStringUrlSafe(base64IdToken);

            if (!base64Decoded) {
                this.info('The returned id_token could not be base64 url safe decoded.');
                return null;
            }

            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        } catch (err) {
            this.error('The returned id_token could not be decoded', err);
        }

        return null;
    };

    /**
     * Decodes a string of data which has been encoded using base-64 encoding.
     * @ignore
     */
    AuthenticationContext.prototype._base64DecodeStringUrlSafe = function (base64IdToken) {
        // html5 should support atob function for decoding
        base64IdToken = base64IdToken.replace(/-/g, '+').replace(/_/g, '/');

        if (window.atob) {
            return decodeURIComponent(escape(window.atob(base64IdToken))); // jshint ignore:line
        }
        else {
            return decodeURIComponent(escape(this._decode(base64IdToken)));
        }
    };

    //Take https://cdnjs.cloudflare.com/ajax/libs/Base64/0.3.0/base64.js and https://en.wikipedia.org/wiki/Base64 as reference. 
    AuthenticationContext.prototype._decode = function (base64IdToken) {
        var codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        base64IdToken = String(base64IdToken).replace(/=+$/, '');

        var length = base64IdToken.length;

        if (length % 4 === 1) {
            throw new Error('The token to be decoded is not correctly encoded.');
        }

        var h1, h2, h3, h4, bits, c1, c2, c3, decoded = '';

        for (var i = 0; i < length; i += 4) {
            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
            // then 6 bits per base64 encoded character
            h1 = codes.indexOf(base64IdToken.charAt(i));
            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
            h4 = codes.indexOf(base64IdToken.charAt(i + 3));

            // For padding, if last two are '='
            if (i + 2 === length - 1) {
                bits = h1 << 18 | h2 << 12 | h3 << 6;
                c1 = bits >> 16 & 255;
                c2 = bits >> 8 & 255;
                decoded += String.fromCharCode(c1, c2);
                break;
            }
            // if last one is '='
            else if (i + 1 === length - 1) {
                bits = h1 << 18 | h2 << 12
                c1 = bits >> 16 & 255;
                decoded += String.fromCharCode(c1);
                break;
            }

            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

            // then convert to 3 byte chars
            c1 = bits >> 16 & 255;
            c2 = bits >> 8 & 255;
            c3 = bits & 255;

            decoded += String.fromCharCode(c1, c2, c3);
        }

        return decoded;
    };

    /**
     * Decodes an id token into an object with header, payload and signature fields.
     * @ignore
     */
    // Adal.node js crack function
    AuthenticationContext.prototype._decodeJwt = function (jwtToken) {
        if (this._isEmpty(jwtToken)) {
            return null;
        };

        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;

        var matches = idTokenPartsRegex.exec(jwtToken);

        if (!matches || matches.length < 4) {
            this.warn('The returned id_token is not parseable.');
            return null;
        }

        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };

        return crackedToken;
    };

    /**
     * Converts string to represent binary data in ASCII string format by translating it into a radix-64 representation and returns it
     * @ignore
     */
    AuthenticationContext.prototype._convertUrlSafeToRegularBase64EncodedString = function (str) {
        return str.replace('-', '+').replace('_', '/');
    };

    /**
     * Serializes the parameters for the authorization endpoint URL and returns the serialized uri string.
     * @ignore
     */
    AuthenticationContext.prototype._serialize = function (responseType, obj, resource) {
        var str = [];

        if (obj !== null) {
            str.push('?response_type=' + responseType);
            str.push('client_id=' + encodeURIComponent(obj.clientId));
            if (resource) {
                str.push('resource=' + encodeURIComponent(resource));
            }

            str.push('redirect_uri=' + encodeURIComponent(obj.redirectUri));
            str.push('state=' + encodeURIComponent(obj.state));

            if (obj.hasOwnProperty('slice')) {
                str.push('slice=' + encodeURIComponent(obj.slice));
            }

            if (obj.hasOwnProperty('extraQueryParameter')) {
                str.push(obj.extraQueryParameter);
            }

            var correlationId = obj.correlationId ? obj.correlationId : this._guid();
            str.push('client-request-id=' + encodeURIComponent(correlationId));
        }

        return str.join('&');
    };

    /**
     * Parses the query string parameters into a key-value pair object.
     * @ignore
     */
    AuthenticationContext.prototype._deserialize = function (query) {
        var match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=([^&]*)/g,
            decode = function (s) {
                return decodeURIComponent(s.replace(pl, ' '));
            },
            obj = {};
        match = search.exec(query);

        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }

        return obj;
    };

    /**
     * Converts decimal value to hex equivalent
     * @ignore
     */
    AuthenticationContext.prototype._decimalToHex = function (number) {
        var hex = number.toString(16);

        while (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }

    /**
     * Generates RFC4122 version 4 guid (128 bits)
     * @ignore
     */
    /* jshint ignore:start */
    AuthenticationContext.prototype._guid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var cryptoObj = window.crypto || window.msCrypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return this._decimalToHex(buffer[0]) + this._decimalToHex(buffer[1]) + this._decimalToHex(buffer[2]) + this._decimalToHex(buffer[3]) + '-' + this._decimalToHex(buffer[4]) + this._decimalToHex(buffer[5]) + '-' + this._decimalToHex(buffer[6]) + this._decimalToHex(buffer[7]) + '-' +
                this._decimalToHex(buffer[8]) + this._decimalToHex(buffer[9]) + '-' + this._decimalToHex(buffer[10]) + this._decimalToHex(buffer[11]) + this._decimalToHex(buffer[12]) + this._decimalToHex(buffer[13]) + this._decimalToHex(buffer[14]) + this._decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
            var hex = '0123456789abcdef';
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== '-' && guidHolder[i] !== '4') {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === 'x') {
                    guidResponse += hex[r];
                } else if (guidHolder[i] === 'y') {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                } else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /* jshint ignore:end */

    /**
     * Calculates the expires in value in milliseconds for the acquired token
     * @ignore
     */
    AuthenticationContext.prototype._expiresIn = function (expires) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expires) expires = 3599;
        return this._now() + parseInt(expires, 10);
    };

    /**
     * Return the number of milliseconds since 1970/01/01
     * @ignore
     */
    AuthenticationContext.prototype._now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };

    /**
     * Adds the hidden iframe for silent token renewal
     * @ignore
     */
    AuthenticationContext.prototype._addAdalFrame = function (iframeId) {
        if (typeof iframeId === 'undefined') {
            return;
        }

        this.info('Add adal frame to document:' + iframeId);
        var adalFrame = document.getElementById(iframeId);

        if (!adalFrame) {
            if (document.createElement && document.documentElement &&
                (window.opera || window.navigator.userAgent.indexOf('MSIE 5.0') === -1)) {
                var ifr = document.createElement('iframe');
                ifr.setAttribute('id', iframeId);
                ifr.setAttribute('aria-hidden', 'true');
                ifr.style.visibility = 'hidden';
                ifr.style.position = 'absolute';
                ifr.style.width = ifr.style.height = ifr.borderWidth = '0px';

                adalFrame = document.getElementsByTagName('body')[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML('beforeEnd', '<iframe name="' + iframeId + '" id="' + iframeId + '" style="display:none"></iframe>');
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }

        return adalFrame;
    };

    /**
     * Saves the key-value pair in the cache
     * @ignore
     */
    AuthenticationContext.prototype._saveItem = function (key, obj, preserve) {

        if (this.config && this.config.cacheLocation && this.config.cacheLocation === 'localStorage') {

            if (!this._supportsLocalStorage()) {
                this.info('Local storage is not supported');
                return false;
            }

            if (preserve) {
                var value = this._getItem(key) || '';
                localStorage.setItem(key, value + obj + this.CONSTANTS.CACHE_DELIMETER);
            }
            else {
                localStorage.setItem(key, obj);
            }

            return true;
        }

        // Default as session storage
        if (!this._supportsSessionStorage()) {
            this.info('Session storage is not supported');
            return false;
        }

        sessionStorage.setItem(key, obj);
        return true;
    };

    /**
     * Searches the value for the given key in the cache
     * @ignore
     */
    AuthenticationContext.prototype._getItem = function (key) {

        if (this.config && this.config.cacheLocation && this.config.cacheLocation === 'localStorage') {

            if (!this._supportsLocalStorage()) {
                this.info('Local storage is not supported');
                return null;
            }

            return localStorage.getItem(key);
        }

        // Default as session storage
        if (!this._supportsSessionStorage()) {
            this.info('Session storage is not supported');
            return null;
        }

        return sessionStorage.getItem(key);
    };

    /**
     * Returns true if browser supports localStorage, false otherwise.
     * @ignore
     */
    AuthenticationContext.prototype._supportsLocalStorage = function () {
        try {
            if (!window.localStorage) return false; // Test availability
            window.localStorage.setItem('storageTest', 'A'); // Try write
            if (window.localStorage.getItem('storageTest') != 'A') return false; // Test read/write
            window.localStorage.removeItem('storageTest'); // Try delete
            if (window.localStorage.getItem('storageTest')) return false; // Test delete
            return true; // Success
        } catch (e) {
            return false;
        }
    };

    /**
     * Returns true if browser supports sessionStorage, false otherwise.
     * @ignore
     */
    AuthenticationContext.prototype._supportsSessionStorage = function () {
        try {
            if (!window.sessionStorage) return false; // Test availability
            window.sessionStorage.setItem('storageTest', 'A'); // Try write
            if (window.sessionStorage.getItem('storageTest') != 'A') return false; // Test read/write
            window.sessionStorage.removeItem('storageTest'); // Try delete
            if (window.sessionStorage.getItem('storageTest')) return false; // Test delete
            return true; // Success
        } catch (e) {
            return false;
        }
    };

    /**
     * Returns a cloned copy of the passed object.
     * @ignore
     */
    AuthenticationContext.prototype._cloneConfig = function (obj) {
        if (null === obj || 'object' !== typeof obj) {
            return obj;
        }

        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    };

    /**
     * Adds the library version and returns it.
     * @ignore
     */
    AuthenticationContext.prototype._addLibMetadata = function () {
        // x-client-SKU
        // x-client-Ver
        return '&x-client-SKU=Js&x-client-Ver=' + this._libVersion();
    };

    /**
     * Checks the Logging Level, constructs the Log message and logs it. Users need to implement/override this method to turn on Logging. 
     * @param {number} level  -  Level can be set 0,1,2 and 3 which turns on 'error', 'warning', 'info' or 'verbose' level logging respectively.
     * @param {string} message  -  Message to log.
     * @param {string} error  -  Error to log.
     */
    AuthenticationContext.prototype.log = function (level, message, error, containsPii) {

        if (level <= Logging.level) {

            if (!Logging.piiLoggingEnabled && containsPii)
                return;

            var timestamp = new Date().toUTCString();
            var formattedMessage = '';

            if (this.config.correlationId)
                formattedMessage = timestamp + ':' + this.config.correlationId + '-' + this._libVersion() + '-' + this.CONSTANTS.LEVEL_STRING_MAP[level] + ' ' + message;
            else
                formattedMessage = timestamp + ':' + this._libVersion() + '-' + this.CONSTANTS.LEVEL_STRING_MAP[level] + ' ' + message;

            if (error) {
                formattedMessage += '\nstack:\n' + error.stack;
            }

            Logging.log(formattedMessage);
        }
    };

    /**
     * Logs messages when Logging Level is set to 0.
     * @param {string} message  -  Message to log.
     * @param {string} error  -  Error to log.
     */
    AuthenticationContext.prototype.error = function (message, error) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR, message, error);
    };

    /**
     * Logs messages when Logging Level is set to 1.
     * @param {string} message  -  Message to log.
     */
    AuthenticationContext.prototype.warn = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.WARN, message, null);
    };

    /**
     * Logs messages when Logging Level is set to 2.
     * @param {string} message  -  Message to log.
     */
    AuthenticationContext.prototype.info = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.INFO, message, null);
    };

    /**
     * Logs messages when Logging Level is set to 3.
     * @param {string} message  -  Message to log.
     */
    AuthenticationContext.prototype.verbose = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE, message, null);
    };

    /**
    * Logs Pii messages when Logging Level is set to 0 and window.piiLoggingEnabled is set to true.
    * @param {string} message  -  Message to log.
    * @param {string} error  -  Error to log.
    */
    AuthenticationContext.prototype.errorPii = function (message, error) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR, message, error, true);
    };

    /**
     * Logs  Pii messages when Logging Level is set to 1 and window.piiLoggingEnabled is set to true.
     * @param {string} message  -  Message to log.
     */
    AuthenticationContext.prototype.warnPii = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.WARN, message, null, true);
    };

    /**
     * Logs messages when Logging Level is set to 2 and window.piiLoggingEnabled is set to true.
     * @param {string} message  -  Message to log.
     */
    AuthenticationContext.prototype.infoPii = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.INFO, message, null, true);
    };

    /**
     * Logs messages when Logging Level is set to 3 and window.piiLoggingEnabled is set to true.
     * @param {string} message  -  Message to log.
     */
    AuthenticationContext.prototype.verbosePii = function (message) {
        this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE, message, null, true);
    };
    /**
     * Returns the library version.
     * @ignore
     */
    AuthenticationContext.prototype._libVersion = function () {
        return '1.0.17';
    };

    /**
     * Returns a reference of Authentication Context as a result of a require call.
     * @ignore
     */
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = AuthenticationContext;
        module.exports.inject = function (conf) {
            return new AuthenticationContext(conf);
        };
    }

    return AuthenticationContext;

}());


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Members; });
/* unused harmony export Member */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Owners; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);


var Members = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Members, _super);
    function Members(baseUrl, path) {
        if (path === void 0) { path = "members"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: https://graph.microsoft.com/v1.0/directoryObjects/${id})
     */
    Members.prototype.add = function (id) {
        return this.clone(Members, "$ref").postCore({
            body: JSON.stringify({
                "@odata.id": id,
            }),
        });
    };
    /**
     * Gets a member of the group by id
     *
     * @param id Group member's id
     */
    Members.prototype.getById = function (id) {
        return new Member(this, id);
    };
    return Members;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Member = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Member;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

var Owners = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Owners, _super);
    function Owners(baseUrl, path) {
        if (path === void 0) { path = "owners"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return Owners;
}(Members));

//# sourceMappingURL=members.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Calendars */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Events; });
/* unused harmony export Event */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);


// import { Attachments } from "./attachments";
var Calendars = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Calendars, _super);
    function Calendars(baseUrl, path) {
        if (path === void 0) { path = "calendars"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return Calendars;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Calendar = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Calendar.prototype, "events", {
        get: function () {
            return new Events(this);
        },
        enumerable: true,
        configurable: true
    });
    return Calendar;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

var Events = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Events, _super);
    function Events(baseUrl, path) {
        if (path === void 0) { path = "events"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Events.prototype.getById = function (id) {
        return new Event(this, id);
    };
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    Events.prototype.add = function (properties) {
        var _this = this;
        return this.postCore({
            body: JSON.stringify(properties),
        }).then(function (r) {
            return {
                data: r,
                event: _this.getById(r.id),
            };
        });
    };
    return Events;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Event = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO:: when supported
    // /**
    //  * Gets the collection of attachments for this event
    //  */
    // public get attachments(): Attachments {
    //     return new Attachments(this);
    // }
    /**
     * Update the properties of an event object
     *
     * @param properties Set of properties of this event to update
     */
    Event.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Deletes this event
     */
    Event.prototype.delete = function () {
        return this.deleteCore();
    };
    return Event;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=calendars.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversations; });
/* unused harmony export Threads */
/* unused harmony export Posts */
/* unused harmony export Conversation */
/* unused harmony export Thread */
/* unused harmony export Post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Senders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachments__ = __webpack_require__(18);



var Conversations = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Conversations, _super);
    function Conversations(baseUrl, path) {
        if (path === void 0) { path = "conversations"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Create a new conversation by including a thread and a post.
     *
     * @param properties Properties used to create the new conversation
     */
    Conversations.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Gets a conversation from this collection by id
     *
     * @param id Group member's id
     */
    Conversations.prototype.getById = function (id) {
        return new Conversation(this, id);
    };
    return Conversations;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Threads = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Threads, _super);
    function Threads(baseUrl, path) {
        if (path === void 0) { path = "threads"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    Threads.prototype.getById = function (id) {
        return new Thread(this, id);
    };
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    Threads.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    return Threads;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Posts = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Posts, _super);
    function Posts(baseUrl, path) {
        if (path === void 0) { path = "posts"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    Posts.prototype.getById = function (id) {
        return new Post(this, id);
    };
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    Posts.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    return Posts;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Conversation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Conversation.prototype, "threads", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return new Threads(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this conversation
     */
    Conversation.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Deletes this member from the group
     */
    Conversation.prototype.delete = function () {
        return this.deleteCore();
    };
    return Conversation;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

var Thread = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Thread, _super);
    function Thread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Thread.prototype, "posts", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return new Posts(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    Thread.prototype.reply = function (post) {
        return this.clone(Thread, "reply").postCore({
            body: JSON.stringify({
                post: post,
            }),
        });
    };
    /**
     * Deletes this member from the group
     */
    Thread.prototype.delete = function () {
        return this.deleteCore();
    };
    return Thread;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

var Post = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Post.prototype, "attachments", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_2__attachments__["a" /* Attachments */](this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this post
     */
    Post.prototype.delete = function () {
        return this.deleteCore();
    };
    /**
     * Forward a post to a recipient
     */
    Post.prototype.forward = function (info) {
        return this.clone(Post, "forward").postCore({
            body: JSON.stringify(info),
        });
    };
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    Post.prototype.reply = function (post) {
        return this.clone(Post, "reply").postCore({
            body: JSON.stringify({
                post: post,
            }),
        });
    };
    return Post;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

var Senders = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Senders, _super);
    function Senders(baseUrl, path) {
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    Senders.prototype.add = function (id) {
        return this.clone(Senders, "$ref").postCore({
            body: JSON.stringify({
                "@odata.id": id,
            }),
        });
    };
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    Senders.prototype.remove = function (id) {
        var remover = this.clone(Senders, "$ref");
        remover.query.add("$id", id);
        return remover.deleteCore();
    };
    return Senders;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

//# sourceMappingURL=conversations.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attachments; });
/* unused harmony export Attachment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);


var Attachments = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Attachments, _super);
    function Attachments(baseUrl, path) {
        if (path === void 0) { path = "attachments"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a member of the group by id
     *
     * @param id Attachment id
     */
    Attachments.prototype.getById = function (id) {
        return new Attachment(this, id);
    };
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    Attachments.prototype.addFile = function (name, bytes) {
        return this.postCore({
            body: JSON.stringify({
                "@odata.type": "#microsoft.graph.fileAttachment",
                contentBytes: bytes,
                name: name,
            }),
        });
    };
    return Attachments;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Attachment = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Attachment;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=attachments.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plans; });
/* unused harmony export Plan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);


var Plans = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Plans, _super);
    function Plans(baseUrl, path) {
        if (path === void 0) { path = "planner/plans"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a plan from this collection by id
     *
     * @param id Plan's id
     */
    Plans.prototype.getById = function (id) {
        return new Plan(this, id);
    };
    return Plans;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["b" /* GraphQueryableCollection */]));

var Plan = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Plan, _super);
    function Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Plan;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=plans.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_odata__ = __webpack_require__(4);



var Photo = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Photo, _super);
    function Photo(baseUrl, path) {
        if (path === void 0) { path = "photo"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets the image bytes as a blob (browser)
     */
    Photo.prototype.getBlob = function () {
        return this.clone(Photo, "$value", false).get(new __WEBPACK_IMPORTED_MODULE_2__pnp_odata__["a" /* BlobParser */]());
    };
    /**
     * Gets the image file byets as a Buffer (node.js)
     */
    Photo.prototype.getBuffer = function () {
        return this.clone(Photo, "$value", false).get(new __WEBPACK_IMPORTED_MODULE_2__pnp_odata__["b" /* BufferParser */]());
    };
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    Photo.prototype.setContent = function (content) {
        return this.clone(Photo, "$value", false).patchCore({
            body: content,
        });
    };
    return Photo;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=photos.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Me; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphqueryable__ = __webpack_require__(1);


var Me = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Me, _super);
    function Me(baseUrl, path) {
        if (path === void 0) { path = "me"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return Me;
}(__WEBPACK_IMPORTED_MODULE_1__graphqueryable__["c" /* GraphQueryableInstance */]));

//# sourceMappingURL=me.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GraphBatchParseException */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphBatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pnp_odata__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_logging__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pnp_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_graphlibconfig__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__net_graphhttpclient__ = __webpack_require__(10);






var GraphBatchParseException = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphBatchParseException, _super);
    function GraphBatchParseException(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = "GraphBatchParseException";
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].log({ data: {}, level: 3 /* Error */, message: "[" + _this.name + "]::" + _this.message });
        return _this;
    }
    return GraphBatchParseException;
}(Error));

var GraphBatch = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GraphBatch, _super);
    function GraphBatch(batchUrl) {
        if (batchUrl === void 0) { batchUrl = "https://graph.microsoft.com/beta/$batch"; }
        var _this = _super.call(this) || this;
        _this.batchUrl = batchUrl;
        return _this;
    }
    GraphBatch.prototype.executeImpl = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
        var client = new __WEBPACK_IMPORTED_MODULE_5__net_graphhttpclient__["a" /* GraphHttpClient */]();
        var batchRequest = {
            requests: this.formatRequests(),
        };
        var batchOptions = {
            "body": JSON.stringify(batchRequest),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            "method": "POST",
        };
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
        // let nextLinkFlag = false;
        return client.fetch(this.batchUrl, batchOptions)
            .then(function (r) { return r.json(); })
            .then(this._parseResponse)
            .then(function (parsedResponse) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
            return parsedResponse.responses.reduce(function (chain, response, index) {
                var request = _this.requests[index];
                if (__WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].objectDefinedNotNull(request)) {
                    __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["a" /* Logger */].write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched request " + request.method + " " + request.url + ".", 0 /* Verbose */);
                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                }
                else {
                    // do we have a next url? if no this is an error
                    if (parsedResponse.nextLink) {
                        throw new GraphBatchParseException("Could not properly parse responses to match requests in batch.");
                    }
                    // nextLinkFlag = true;
                    // keep the chain moving, but don't add anything for this request yet
                    // here we need to process the next link - so what do we do?
                    // need to append a .then()
                    // TODO::
                    return chain;
                }
            }, Promise.resolve());
        });
    };
    GraphBatch.prototype.formatRequests = function () {
        return this.requests.map(function (reqInfo, index) {
            var requestFragment = {
                id: "" + ++index,
                method: reqInfo.method,
                url: reqInfo.url,
            };
            var headers = {};
            // merge global config headers
            if (typeof __WEBPACK_IMPORTED_MODULE_4__config_graphlibconfig__["a" /* GraphRuntimeConfig */].headers !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__config_graphlibconfig__["a" /* GraphRuntimeConfig */].headers !== null) {
                headers = __WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].extend(headers, __WEBPACK_IMPORTED_MODULE_4__config_graphlibconfig__["a" /* GraphRuntimeConfig */].headers);
            }
            if (typeof reqInfo.options !== "undefined") {
                // merge per request headers
                if (typeof reqInfo.options.headers !== "undefined" && reqInfo.options.headers !== null) {
                    headers = __WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].extend(headers, reqInfo.options.headers);
                }
                // add a request body
                if (typeof reqInfo.options.body !== "undefined" && reqInfo.options.body !== null) {
                    requestFragment = __WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].extend(requestFragment, {
                        body: reqInfo.options.body,
                    });
                }
            }
            requestFragment = __WEBPACK_IMPORTED_MODULE_3__pnp_common__["e" /* Util */].extend(requestFragment, {
                headers: headers,
            });
            return requestFragment;
        });
    };
    GraphBatch.prototype._parseResponse = function (graphResponse) {
        var _this = this;
        return new Promise(function (resolve) {
            var parsedResponses = new Array(_this.requests.length).fill(null);
            for (var i = 0; i < graphResponse.responses.length; ++i) {
                var response = graphResponse.responses[i];
                // we create the request id by adding 1 to the index, so we place the response by subtracting one to match
                // the array of requests and make it easier to map them by index
                var responseId = parseInt(response.id, 10) - 1;
                if (response.status === 204) {
                    parsedResponses[responseId] = new Response();
                }
                else {
                    parsedResponses[responseId] = new Response(null, {
                        headers: response.headers,
                        status: response.status,
                    });
                }
            }
            resolve({
                nextLink: graphResponse.nextLink,
                responses: parsedResponses,
            });
        });
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__pnp_common__["f" /* beta */])("Graph batching functionality is in beta.")
    ], GraphBatch.prototype, "executeImpl", null);
    return GraphBatch;
}(__WEBPACK_IMPORTED_MODULE_1__pnp_odata__["c" /* ODataBatch */]));

//# sourceMappingURL=batch.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=graph.es5.umd.bundle.js.map