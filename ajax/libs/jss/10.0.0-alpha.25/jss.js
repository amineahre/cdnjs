(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.jss = {}));
}(this, function (exports) { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

  function warning(condition, message) {
    {
      if (condition) {
        return;
      }

      var text = "Warning: " + message;

      if (typeof console !== 'undefined') {
        console.warn(text);
      }

      try {
        throw Error(text);
      } catch (x) {}
    }
  }

  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== 'object') return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};

    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }

    return newStyle;
  }

  /**
   * Create a rule instance.
   */

  function createRule(name, decl, options) {
    if (name === void 0) {
      name = 'unnamed';
    }

    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule; // It is an at-rule and it has no instance.

    if (name[0] === '@') {
      warning(false, "[JSS] Unknown rule " + name);
    }

    return null;
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var join = function join(value, by) {
    var result = '';

    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }

    return result;
  };
  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */


  function toCssValue(value, ignoreImportant) {
    if (ignoreImportant === void 0) {
      ignoreImportant = false;
    }

    if (!Array.isArray(value)) return value;
    var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', '); // Add !important, because it was ignored.


    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';

    for (var index = 0; index < indent; index++) {
      result += '  ';
    }

    return result + str;
  }
  /**
   * Converts a Rule to CSS string.
   */


  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }

    var result = '';
    if (!style) return result;
    var _options = options,
        _options$indent = _options.indent,
        indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;
    if (selector) indent++; // Apply fallbacks first.

    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];

          for (var prop in fallback) {
            var value = fallback[prop];

            if (value != null) {
              if (result) result += '\n';
              result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];

          if (_value != null) {
            if (result) result += '\n';
            result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];

      if (_value2 != null && _prop2 !== 'fallbacks') {
        if (result) result += '\n';
        result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
      }
    } // Allow empty style in this case, because properties will be added dynamically.


    if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

    if (!selector) return result;
    indent--;
    if (result) result = "\n" + result + "\n";
    return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
  }

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  var escape = (function (str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
  });

  var BaseStyleRule =
  /*#__PURE__*/
  function () {
    function BaseStyleRule(key, style, options) {
      this.type = 'style';
      this.key = void 0;
      this.isProcessed = false;
      this.style = void 0;
      this.renderer = void 0;
      this.renderable = void 0;
      this.options = void 0;
      var sheet = options.sheet,
          Renderer = options.Renderer;
      this.key = key;
      this.options = options;
      this.style = style;
      if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
    }
    /**
     * Get or set a style property.
     */


    var _proto = BaseStyleRule.prototype;

    _proto.prop = function prop(name, value, options) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      var force = options ? options.force : false;
      if (!force && this.style[name] === value) return this;
      var newValue = value;

      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value, name, this);
      }

      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable && this.renderer) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) {
        warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".');
      }

      return this;
    };

    return BaseStyleRule;
  }();
  var StyleRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(StyleRule, _BaseStyleRule);

    function StyleRule(key, style, options) {
      var _this;

      _this = _BaseStyleRule.call(this, key, style, options) || this;
      _this.selectorText = void 0;
      _this.id = void 0;
      _this.renderable = void 0;
      var selector = options.selector,
          scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;

      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
        _this.selectorText = "." + escape(_this.id);
      }

      return _this;
    }
    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    var _proto2 = StyleRule.prototype;

    /**
     * Apply rule to an element inline.
     */
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;

      if (renderer) {
        var json = this.toJSON();

        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */
    ;

    _proto2.toJSON = function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto2.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };

    _createClass(StyleRule, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText) return;
        this.selectorText = selector;
        var renderer = this.renderer,
            renderable = this.renderable;
        if (!renderable || !renderer) return;
        var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      }
      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(name, style, options) {
      if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
        return null;
      }

      return new StyleRule(name, style, options);
    }
  };

  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  /**
   * Conditional rule for @media, @supports
   */

  var ConditionalRule =
  /*#__PURE__*/
  function () {
    function ConditionalRule(key, styles, options) {
      this.type = 'conditional';
      this.at = void 0;
      this.key = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      var atMatch = key.match(atRegExp);
      this.at = atMatch ? atMatch[1] : 'unknown';
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = ConditionalRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }

      if (options.indent == null) options.indent = defaultToStringOptions.indent;
      if (options.children == null) options.children = defaultToStringOptions.children;

      if (options.children === false) {
        return this.key + " {}";
      }

      var children = this.rules.toString(options);
      return children ? this.key + " {\n" + children + "\n}" : '';
    };

    return ConditionalRule;
  }();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key, styles, options) {
      return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
    }
  };

  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  /**
   * Rule for @keyframes
   */

  var KeyframesRule =
  /*#__PURE__*/
  function () {
    function KeyframesRule(key, frames, options) {
      this.type = 'keyframes';
      this.at = '@keyframes';
      this.key = void 0;
      this.name = void 0;
      this.id = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      var nameMatch = key.match(nameRegExp);

      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = 'noname';
        warning(false, "[JSS] Bad keyframes name " + key);
      }

      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;
      this.id = scoped === false ? this.name : escape(generateId(this, sheet));
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, options, {
          parent: this
        }));
      }

      this.rules.process();
    }
    /**
     * Generates a CSS string.
     */


    var _proto = KeyframesRule.prototype;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }

      if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
      if (options.children == null) options.children = defaultToStringOptions$1.children;

      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }

      var children = this.rules.toString(options);
      if (children) children = "\n" + children + "\n";
      return this.at + " " + this.id + " {" + children + "}";
    };

    return KeyframesRule;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;

  var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
    if (typeof val === 'string') {
      return val.replace(refRegExp, function (match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }

        warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.");
        return match;
      });
    }

    return val;
  };
  /**
   * Replace the reference for a animation name.
   */


  var replaceRef = function replaceRef(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);

    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };

  var plugin = {
    onCreateRule: function onCreateRule(key, frames, options) {
      return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style' || !sheet) return style;
      if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
      if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;

      if (!sheet) {
        return val;
      }

      switch (prop) {
        case 'animation':
          return findReferencedKeyframe(val, sheet.keyframes);

        case 'animation-name':
          return findReferencedKeyframe(val, sheet.keyframes);

        default:
          return val;
      }
    }
  };

  var KeyframeRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(KeyframeRule, _BaseStyleRule);

    function KeyframeRule() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
      _this.renderable = void 0;
      return _this;
    }

    var _proto = KeyframeRule.prototype;

    /**
     * Generates a CSS string.
     */
    _proto.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };

    return KeyframeRule;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (options.parent && options.parent.type === 'keyframes') {
        return new KeyframeRule(key, style, options);
      }

      return null;
    }
  };

  var FontFaceRule =
  /*#__PURE__*/
  function () {
    function FontFaceRule(key, style, options) {
      this.type = 'font-face';
      this.at = '@font-face';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = FontFaceRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += toCss(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return toCss(this.key, this.style, options);
    };

    return FontFaceRule;
  }();
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
    }
  };

  var ViewportRule =
  /*#__PURE__*/
  function () {
    function ViewportRule(key, style, options) {
      this.type = 'viewport';
      this.at = '@viewport';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = ViewportRule.prototype;

    _proto.toString = function toString(options) {
      return toCss(this.key, this.style, options);
    };

    return ViewportRule;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
    }
  };

  var SimpleRule =
  /*#__PURE__*/
  function () {
    function SimpleRule(key, value, options) {
      this.type = 'simple';
      this.key = void 0;
      this.value = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.value = value;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    var _proto = SimpleRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + " " + this.value[index] + ";";
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + " " + this.value + ";";
    };

    return SimpleRule;
  }();
  var keysMap = {
    '@charset': true,
    '@import': true,
    '@namespace': true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    }
  };

  var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */

  };

  var RuleList =
  /*#__PURE__*/
  function () {
    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.
    // Original styles object.
    // Used to ensure correct rules order.
    function RuleList(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.options = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    var _proto = RuleList.prototype;

    _proto.add = function add(key, decl, ruleOptions) {
      var _this$options = this.options,
          parent = _this$options.parent,
          sheet = _this$options.sheet,
          jss = _this$options.jss,
          Renderer = _this$options.Renderer,
          generateId = _this$options.generateId,
          scoped = _this$options.scoped;

      var options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateId: generateId,
        scoped: scoped
      }, ruleOptions); // We need to save the original decl before creating the rule
      // because cache plugin needs to use it as a key to return a cached rule.


      this.raw[key] = decl;

      if (key in this.classes) {
        // For e.g. rules inside of @media container
        options.selector = "." + escape(this.classes[key]);
      }

      var rule = createRule(key, decl, options);
      if (!rule) return null;
      this.register(rule);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */
    ;

    _proto.get = function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */
    ;

    _proto.process = function process() {
      var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
    }
    /**
     * Register a rule in `.map` and `.classes` maps.
     */
    ;

    _proto.register = function register(rule) {
      this.map[rule.key] = rule;

      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id) this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    }
    /**
     * Unregister a rule.
     */
    ;

    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var name;
      var data;
      var options;

      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

        options = arguments.length <= 2 ? undefined : arguments[2];
      } else {
        data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        options = arguments.length <= 1 ? undefined : arguments[1];
        name = null;
      }

      if (name) {
        this.onUpdate(data, this.get(name), options);
      } else {
        for (var index = 0; index < this.index.length; index++) {
          this.onUpdate(data, this.index[index], options);
        }
      }
    }
    /**
     * Execute plugins, update rule props.
     */
    ;

    _proto.onUpdate = function onUpdate(data, rule, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }

      var _this$options2 = this.options,
          plugins$$1 = _this$options2.jss.plugins,
          sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

      if (rule.rules instanceof RuleList) {
        rule.rules.update(data, options);
        return;
      }

      var styleRule = rule;
      var style = styleRule.style;
      plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

      if (options.process && style && style !== styleRule.style) {
        // We need to run the plugins in case new `style` relies on syntax plugins.
        plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

        for (var prop in styleRule.style) {
          var nextValue = styleRule.style[prop];
          var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (nextValue !== prevValue) {
            styleRule.prop(prop, nextValue, forceUpdateOptions);
          }
        } // Remove props.


        for (var _prop in style) {
          var _nextValue = styleRule.style[_prop];
          var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (_nextValue == null && _nextValue !== _prevValue) {
            styleRule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    };

    return RuleList;
  }();

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(styles, options) {
      this.options = void 0;
      this.deployed = void 0;
      this.attached = void 0;
      this.rules = void 0;
      this.renderer = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.queue = void 0;
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });

      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }

      this.rules = new RuleList(this.options);

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Attach renderable to the render tree.
     */


    var _proto = StyleSheet.prototype;

    _proto.attach = function attach() {
      if (this.attached) return this;
      if (this.renderer) this.renderer.attach();
      this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

      if (!this.deployed) this.deploy();
      return this;
    }
    /**
     * Remove renderable from render tree.
     */
    ;

    _proto.detach = function detach() {
      if (!this.attached) return this;
      if (this.renderer) this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    ;

    _proto.addRule = function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */
    ;

    _proto.insertRule = function insertRule(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    ;

    _proto.addRules = function addRules(styles, options) {
      var added = [];

      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule) added.push(rule);
      }

      return added;
    }
    /**
     * Get a rule by name.
     */
    ;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    ;

    _proto.deleteRule = function deleteRule(name) {
      var rule = this.rules.get(name);
      if (!rule) return false;
      this.rules.remove(rule);

      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */
    ;

    _proto.deploy = function deploy() {
      if (this.renderer) this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var _this$rules;

      (_this$rules = this.rules).update.apply(_this$rules, arguments);

      return this;
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };

    return StyleSheet;
  }();

  var PluginsRegistry =
  /*#__PURE__*/
  function () {
    function PluginsRegistry() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = void 0;
    }

    var _proto = PluginsRegistry.prototype;

    /**
     * Call `onCreateRule` hooks and return an object if returned by a hook.
     */
    _proto.onCreateRule = function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */
    ;

    _proto.onProcessRule = function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }

      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */
    ;

    _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        // $FlowFixMe
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */
    ;

    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */
    ;

    _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data, rule, sheet, options);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */
    ;

    _proto.onChangeValue = function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     */
    ;

    _proto.use = function use(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: 'external'
        };
      }

      var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

      if (plugins.indexOf(newPlugin) !== -1) {
        return;
      }

      plugins.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          } else {
            warning(false, "[JSS] Unknown hook \"" + name + "\".");
          }
        }

        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };

    return PluginsRegistry;
  }();

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry =
  /*#__PURE__*/
  function () {
    function SheetsRegistry() {
      this.registry = [];
    }

    var _proto = SheetsRegistry.prototype;

    /**
     * Register a Style Sheet.
     */
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */
    ;

    _proto.reset = function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */
    ;

    _proto.remove = function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */
    ;

    _proto.toString = function toString(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          attached = _ref.attached,
          options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

      var css = '';

      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];

        if (attached != null && sheet.attached !== attached) {
          continue;
        }

        if (css) css += '\n';
        css += sheet.toString(options);
      }

      return css;
    };

    _createClass(SheetsRegistry, [{
      key: "index",

      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */

  var sheets = new SheetsRegistry();

  /* eslint-disable */
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.

  var moduleId = globalThis[ns]++;

  var maxRules = 1e10;

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */
  var createGenerateId = function createGenerateId(options) {
    if (options === void 0) {
      options = {};
    }

    var ruleCounter = 0;
    return function (rule, sheet) {
      ruleCounter += 1;

      if (ruleCounter > maxRules) {
        warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".");
      }

      var jssId = '';
      var prefix = '';

      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix = sheet.options.classNamePrefix;
        }

        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }

      if (options.minify) {
        // Using "c" because a number can't be the first char in a class name.
        return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
      }

      return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
    };
  };

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize = function memoize(fn) {
    var value;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };
  /**
   * Get a style property value.
   */


  function getPropertyValue(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }

      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  }
  /**
   * Set a style property.
   */


  function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = toCssValue(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      } // Support CSSTOM.


      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        cssRule.style.setProperty(prop, cssValue);
      }
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }

    return true;
  }
  /**
   * Remove a style property.
   */


  function removeProperty(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
      warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".");
    }
  }
  /**
   * Set the selector.
   */


  function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText; // Return false if setter was not successful.
    // Currently works in chrome only.

    return cssRule.selectorText === selectorText;
  }
  /**
   * Gets the `head` element upon the first call and caches it.
   * We assume it can't be null.
   */


  var getHead = memoize(function () {
    return document.querySelector('head');
  });
  /**
   * Find attached sheet with an index higher than the passed one.
   */

  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find attached sheet with the highest index.
   */


  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find a comment with "jss" inside.
   */


  function findCommentNode(text) {
    var head = getHead();

    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];

      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }

    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry = sheets.registry;

    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      } // Otherwise insert after the last attached.


      sheet = findHighestSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    } // Try to find a comment placeholder if registry is empty.


    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);

      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      } // If user specifies an insertion point and it can't be found in the document -
      // bad specificity issues may appear.


      warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.");
    }

    return false;
  }
  /**
   * Insert style element into the DOM.
   */


  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    } // Works with iframes and any node types.


    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else warning(false, '[JSS] Insertion point is not in the DOM.');
      return;
    }

    getHead().appendChild(style);
  }
  /**
   * Read jss nonce setting from the page if the user has set it.
   */


  var getNonce = memoize(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var _insertRule = function insertRule(container, rule, index) {
    var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

    if (index === undefined || index > maxIndex) {
      // eslint-disable-next-line no-param-reassign
      index = maxIndex;
    }

    try {
      if ('insertRule' in container) {
        var c = container;
        c.insertRule(rule, index);
      } // Keyframes rule.
      else if ('appendRule' in container) {
          var _c = container;

          _c.appendRule(rule);
        }
    } catch (err) {
      warning(false, "[JSS] " + err.message);
      return false;
    }

    return container.cssRules[index];
  };

  var createStyle = function createStyle() {
    var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
    // insert rules after we insert the style tag.
    // It seems to kick-off the source order specificity algorithm.

    el.textContent = '\n';
    return el;
  };

  var DomRenderer =
  /*#__PURE__*/
  function () {
    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
    function DomRenderer(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.element = void 0;
      this.sheet = void 0;
      this.hasInsertedRules = false;
      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) sheets.add(sheet);
      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || createStyle();
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }
    /**
     * Insert style element into render tree.
     */


    var _proto = DomRenderer.prototype;

    _proto.attach = function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet.

      if (this.hasInsertedRules && !(this.sheet && !this.sheet.deployed)) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    }
    /**
     * Remove style element from render tree.
     */
    ;

    _proto.detach = function detach() {
      var parentNode = this.element.parentNode;
      if (parentNode) parentNode.removeChild(this.element);
    }
    /**
     * Inject CSS string into element.
     */
    ;

    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet) return;

      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }

      this.element.textContent = "\n" + sheet.toString() + "\n";
    }
    /**
     * Insert RuleList into an element.
     */
    ;

    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    }
    /**
     * Insert a rule into element.
     */
    ;

    _proto.insertRule = function insertRule(rule, index, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }

      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;

        if (rule.type === 'conditional' || rule.type === 'keyframes') {
          // We need to render the container without children first.
          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), index);

          if (latestNativeParent === false) {
            return false;
          }
        }

        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      }

      var ruleStr = rule.toString();
      if (!ruleStr) return false;

      var nativeRule = _insertRule(nativeParent, ruleStr, index);

      if (nativeRule === false) {
        return false;
      }

      this.hasInsertedRules = true;
      rule.renderable = nativeRule;
      return nativeRule;
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */
    ;

    _proto.indexOf = function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var index = 0; index < cssRules.length; index++) {
        if (cssRule === cssRules[index]) return index;
      }

      return -1;
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     *
     * Only used for some old browsers because they can't set a selector.
     */
    ;

    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      this.element.sheet.deleteRule(index);
      return this.insertRule(rule, index);
    }
    /**
     * Get all rules elements.
     */
    ;

    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };

    return DomRenderer;
  }();

  var instanceCounter = 0;

  var Jss =
  /*#__PURE__*/
  function () {
    function Jss(options) {
      this.id = instanceCounter++;
      this.version = "10.0.0-alpha.25";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId: createGenerateId,
        Renderer: isBrowser ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });

      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: 'internal'
        });
      }

      this.setup(options);
    }
    /**
     * Prepares various options, applies plugins.
     * Should not be used twice on the same instance, because there is no plugins
     * deduplication logic.
     */


    var _proto = Jss.prototype;

    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }

      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }

      if (options.id) {
        this.options.id = _extends({}, this.options.id, options.id);
      }

      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if ('Renderer' in options) {
        this.options.Renderer = options.Renderer;
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */
    ;

    _proto.createStyleSheet = function createStyleSheet(styles, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          index = _options.index;

      if (typeof index !== 'number') {
        index = sheets.index === 0 ? 0 : sheets.index + 1;
      }

      var sheet = new StyleSheet(styles, _extends({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */
    ;

    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      sheets.remove(sheet);
      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     */
    ;

    _proto.createRule = function createRule$$1(name, style, options) {
      if (style === void 0) {
        style = {};
      }

      if (options === void 0) {
        options = {};
      }

      // Enable rule without name for inline styles.
      if (typeof name === 'object') {
        return this.createRule(undefined, name, style);
      }

      var ruleOptions = _extends({}, options, {
        jss: this,
        Renderer: this.options.Renderer
      });

      if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

      var rule = createRule(name, style, ruleOptions);

      if (rule) this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */
    ;

    _proto.use = function use() {
      var _this = this;

      for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins$$1[_key] = arguments[_key];
      }

      plugins$$1.forEach(function (plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };

    return Jss;
  }();

  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);

        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  /**
   * SheetsManager is like a WeakMap which is designed to count StyleSheet
   * instances and attach/detach automatically.
   */
  var SheetsManager =
  /*#__PURE__*/
  function () {
    function SheetsManager() {
      this.length = 0;
      this.sheets = new WeakMap();
    }

    var _proto = SheetsManager.prototype;

    _proto.get = function get(key) {
      var entry = this.sheets.get(key);
      return entry && entry.sheet;
    };

    _proto.add = function add(key, sheet) {
      if (this.sheets.has(key)) return;
      this.length++;
      this.sheets.set(key, {
        sheet: sheet,
        refs: 0
      });
    };

    _proto.manage = function manage(key) {
      var entry = this.sheets.get(key);

      if (entry) {
        if (entry.refs === 0) {
          entry.sheet.attach();
        }

        entry.refs++;
        return entry.sheet;
      }

      warning(false, "[JSS] SheetsManager: can't find sheet to manage");
      return undefined;
    };

    _proto.unmanage = function unmanage(key) {
      var entry = this.sheets.get(key);

      if (entry) {
        if (entry.refs > 0) {
          entry.refs--;
          if (entry.refs === 0) entry.sheet.detach();
        }
      } else {
        warning(false, "SheetsManager: can't find sheet to unmanage");
      }
    };

    _createClass(SheetsManager, [{
      key: "size",
      get: function get() {
        return this.length;
      }
    }]);

    return SheetsManager;
  }();

  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */

  /**
   * Export a constant indicating if this browser has CSSTOM support.
   * https://developers.google.com/web/updates/2018/03/cssom
   */
  var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
  /**
   * Creates a new instance of Jss.
   */

  var create = function create(options) {
    return new Jss(options);
  };
  /**
   * A global Jss instance.
   */

  var index = create();

  exports.hasCSSTOMSupport = hasCSSTOMSupport;
  exports.create = create;
  exports.default = index;
  exports.getDynamicStyles = getDynamicStyles;
  exports.toCssValue = toCssValue;
  exports.createRule = createRule;
  exports.SheetsRegistry = SheetsRegistry;
  exports.SheetsManager = SheetsManager;
  exports.RuleList = RuleList;
  exports.sheets = sheets;
  exports.createGenerateId = createGenerateId;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jss.js.map
