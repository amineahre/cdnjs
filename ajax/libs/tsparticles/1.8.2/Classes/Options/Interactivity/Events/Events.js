"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ClickEvent = require("./ClickEvent");

var _DivEvent = require("./DivEvent");

var _HoverEvent = require("./HoverEvent");

var _Messages = require("../../../Utils/Messages");

var Events = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Events, [{
    key: "onclick",

    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.onclick", "interactivity.events.onClick");

      return this.onClick;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.onclick", "interactivity.events.onClick");

      this.onClick = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     */

  }, {
    key: "ondiv",
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.ondiv", "interactivity.events.onDiv");

      return this.onDiv;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.ondiv", "interactivity.events.onDiv");

      this.onDiv = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     */

  }, {
    key: "onhover",
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.onhover", "interactivity.events.onHover");

      return this.onHover;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.onhover", "interactivity.events.onHover");

      this.onHover = value;
    }
  }]);

  function Events() {
    (0, _classCallCheck2["default"])(this, Events);
    this.onClick = void 0;
    this.onDiv = void 0;
    this.onHover = void 0;
    this.resize = void 0;
    this.onClick = new _ClickEvent.ClickEvent();
    this.onDiv = new _DivEvent.DivEvent();
    this.onHover = new _HoverEvent.HoverEvent();
    this.resize = true;
  }

  return Events;
}();

exports.Events = Events;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvRXZlbnRzLnRzIl0sIm5hbWVzIjpbIkV2ZW50cyIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uRGl2Iiwib25Ib3ZlciIsInJlc2l6ZSIsIkNsaWNrRXZlbnQiLCJEaXZFdmVudCIsIkhvdmVyRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQTs7QUFDQTs7QUFFQTs7SUFFYUEsTTs7OztBQUNUOzs7O3dCQUlrQztBQUM5QkMseUJBQVNDLFVBQVQsQ0FBb0IsOEJBQXBCLEVBQW9ELDhCQUFwRDs7QUFFQSxhQUFPLEtBQUtDLE9BQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS21CQyxLLEVBQW9CO0FBQ25DSCx5QkFBU0MsVUFBVCxDQUFvQiw4QkFBcEIsRUFBb0QsOEJBQXBEOztBQUVBLFdBQUtDLE9BQUwsR0FBZUMsS0FBZjtBQUNIO0FBRUQ7Ozs7Ozs7d0JBSThCO0FBQzFCSCx5QkFBU0MsVUFBVCxDQUFvQiw0QkFBcEIsRUFBa0QsNEJBQWxEOztBQUVBLGFBQU8sS0FBS0csS0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLaUJELEssRUFBa0I7QUFDL0JILHlCQUFTQyxVQUFULENBQW9CLDRCQUFwQixFQUFrRCw0QkFBbEQ7O0FBRUEsV0FBS0csS0FBTCxHQUFhRCxLQUFiO0FBQ0g7QUFFRDs7Ozs7Ozt3QkFJa0M7QUFDOUJILHlCQUFTQyxVQUFULENBQW9CLDhCQUFwQixFQUFvRCw4QkFBcEQ7O0FBRUEsYUFBTyxLQUFLSSxPQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUttQkYsSyxFQUFvQjtBQUNuQ0gseUJBQVNDLFVBQVQsQ0FBb0IsOEJBQXBCLEVBQW9ELDhCQUFwRDs7QUFFQSxXQUFLSSxPQUFMLEdBQWVGLEtBQWY7QUFDSDs7O0FBT0Qsb0JBQWM7QUFBQTtBQUFBLFNBTFBELE9BS087QUFBQSxTQUpQRSxLQUlPO0FBQUEsU0FIUEMsT0FHTztBQUFBLFNBRlBDLE1BRU87QUFDVixTQUFLSixPQUFMLEdBQWUsSUFBSUssc0JBQUosRUFBZjtBQUNBLFNBQUtILEtBQUwsR0FBYSxJQUFJSSxrQkFBSixFQUFiO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLElBQUlJLHNCQUFKLEVBQWY7QUFDQSxTQUFLSCxNQUFMLEdBQWMsSUFBZDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRXZlbnRzfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvRXZlbnRzL0lFdmVudHNcIjtcbmltcG9ydCB7Q2xpY2tFdmVudH0gZnJvbSBcIi4vQ2xpY2tFdmVudFwiO1xuaW1wb3J0IHtJRGl2RXZlbnR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvSURpdkV2ZW50XCI7XG5pbXBvcnQge0lIb3ZlckV2ZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvRXZlbnRzL0lIb3ZlckV2ZW50XCI7XG5pbXBvcnQge0RpdkV2ZW50fSBmcm9tIFwiLi9EaXZFdmVudFwiO1xuaW1wb3J0IHtIb3ZlckV2ZW50fSBmcm9tIFwiLi9Ib3ZlckV2ZW50XCI7XG5pbXBvcnQge0lDbGlja0V2ZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvRXZlbnRzL0lDbGlja0V2ZW50XCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGNsYXNzIEV2ZW50cyBpbXBsZW1lbnRzIElFdmVudHMge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG9uQ2xpY2tcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG9uY2xpY2soKTogSUNsaWNrRXZlbnQge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGlja1wiLCBcImludGVyYWN0aXZpdHkuZXZlbnRzLm9uQ2xpY2tcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGljaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBvbkNsaWNrXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBvbmNsaWNrKHZhbHVlOiBJQ2xpY2tFdmVudCkge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGlja1wiLCBcImludGVyYWN0aXZpdHkuZXZlbnRzLm9uQ2xpY2tcIik7XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgb25EaXZcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG9uZGl2KCk6IElEaXZFdmVudCB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmRpdlwiLCBcImludGVyYWN0aXZpdHkuZXZlbnRzLm9uRGl2XCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9uRGl2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG9uRGl2XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBvbmRpdih2YWx1ZTogSURpdkV2ZW50KSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmRpdlwiLCBcImludGVyYWN0aXZpdHkuZXZlbnRzLm9uRGl2XCIpO1xuXG4gICAgICAgIHRoaXMub25EaXYgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBvbkhvdmVyXG4gICAgICovXG4gICAgcHVibGljIGdldCBvbmhvdmVyKCk6IElIb3ZlckV2ZW50IHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcImludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXJcIiwgXCJpbnRlcmFjdGl2aXR5LmV2ZW50cy5vbkhvdmVyXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9uSG92ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgb25Ib3ZlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgb25ob3Zlcih2YWx1ZTogSUhvdmVyRXZlbnQpIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcImludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXJcIiwgXCJpbnRlcmFjdGl2aXR5LmV2ZW50cy5vbkhvdmVyXCIpO1xuXG4gICAgICAgIHRoaXMub25Ib3ZlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrOiBJQ2xpY2tFdmVudDtcbiAgICBwdWJsaWMgb25EaXY6IElEaXZFdmVudDtcbiAgICBwdWJsaWMgb25Ib3ZlcjogSUhvdmVyRXZlbnQ7XG4gICAgcHVibGljIHJlc2l6ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBuZXcgQ2xpY2tFdmVudCgpO1xuICAgICAgICB0aGlzLm9uRGl2ID0gbmV3IERpdkV2ZW50KCk7XG4gICAgICAgIHRoaXMub25Ib3ZlciA9IG5ldyBIb3ZlckV2ZW50KCk7XG4gICAgICAgIHRoaXMucmVzaXplID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=