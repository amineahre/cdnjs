/**!
* tippy.js v5.0.0-beta.1
* (c) 2017-2019 atomiks
* MIT License
*/
import { E as isBrowser } from './tippy.chunk.esm.js';
import { t as tippy } from './tippy.chunk.esm2.js';
import 'popper.js';

var css = ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100% - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;line-height:1.4;background-color:#333;overflow:hidden;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top] .tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom] .tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left] .tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right] .tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-arrow]{overflow:visible}.tippy-tooltip[data-animatefill]{background-color:transparent!important}.tippy-tooltip[data-interactive]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow{border-color:transparent;border-style:solid;position:absolute}.tippy-arrow[data-state=hidden]{opacity:0}.tippy-content{padding:.3125rem .5625rem}";

/**
 * Injects a string of CSS styles to a style node in <head>
 */
function injectCSS(css) {
  var style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-tippy-stylesheet', '');
  var head = document.head;
  var firstStyleOrLinkTag = head.querySelector('style,link');

  if (firstStyleOrLinkTag) {
    head.insertBefore(style, firstStyleOrLinkTag);
  } else {
    head.appendChild(style);
  }
}

if (isBrowser) {
  injectCSS(css);
}

export default tippy;
//# sourceMappingURL=tippy.bundle.esm.js.map
