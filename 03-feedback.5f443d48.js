!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,m=function(){return d.Date.now()};function y(t,e,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function y(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function S(t){return c=t,f=setTimeout(T,e),s?y(t):u}function j(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-c>=a}function T(){var t=m();if(j(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-l);return d?p(n,a-(t-c)):n}(t))}function h(t){return f=void 0,v&&r?y(t):(r=o=void 0,u)}function w(){var t=m(),n=j(t);if(r=arguments,o=this,l=t,n){if(void 0===f)return S(l);if(d)return f=setTimeout(T,e),y(l)}return void 0===f&&(f=setTimeout(T,e)),u}return e=O(e)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(O(n.maxWait)||0,e):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(m())},w}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(t,e,{leading:r,maxWait:e,trailing:o})},refs.form.addEventListener("submit",(function(t){evt.preventDefault();var e=localStorage.getItem(j,JSON.stringify(S)),n=localStorage.getItem(j,JSON.parse(e));console.log(n),evt.currentTarget.reset(),localStorage.removeItem(j),console.log(S)})),refs.input.addEventListener("input",(function(t){S[t.target.name]=t.target.value,localStorage.setItem(j,JSON.stringify(S))})),refs.textarea.addEventListener("input",t(e)((function(t){S[t.target.name]=t.target.value,localStorage.setItem(j,JSON.stringify(S))}),500));var S={},j="feedback-form-state";populateForm()}();
//# sourceMappingURL=03-feedback.5f443d48.js.map
