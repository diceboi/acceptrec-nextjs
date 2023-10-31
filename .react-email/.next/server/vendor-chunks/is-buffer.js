"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-buffer";
exports.ids = ["vendor-chunks/is-buffer"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */ // The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\n\nmodule.exports = function(obj) {\n    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);\n};\nfunction isBuffer(obj) {\n    return !!obj.constructor && typeof obj.constructor.isBuffer === \"function\" && obj.constructor.isBuffer(obj);\n}\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer(obj) {\n    return typeof obj.readFloatLE === \"function\" && typeof obj.slice === \"function\" && isBuffer(obj.slice(0, 0));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQsc0VBQXNFO0FBQ3RFLHVEQUF1RDs7QUFDdkRBLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxHQUFHO0lBQzVCLE9BQU9BLE9BQU8sUUFBU0MsQ0FBQUEsU0FBU0QsUUFBUUUsYUFBYUYsUUFBUSxDQUFDLENBQUNBLElBQUlHLFNBQVM7QUFDOUU7QUFFQSxTQUFTRixTQUFVRCxHQUFHO0lBQ3BCLE9BQU8sQ0FBQyxDQUFDQSxJQUFJSSxXQUFXLElBQUksT0FBT0osSUFBSUksV0FBVyxDQUFDSCxRQUFRLEtBQUssY0FBY0QsSUFBSUksV0FBVyxDQUFDSCxRQUFRLENBQUNEO0FBQ3pHO0FBRUEsa0RBQWtEO0FBQ2xELFNBQVNFLGFBQWNGLEdBQUc7SUFDeEIsT0FBTyxPQUFPQSxJQUFJSyxXQUFXLEtBQUssY0FBYyxPQUFPTCxJQUFJTSxLQUFLLEtBQUssY0FBY0wsU0FBU0QsSUFBSU0sS0FBSyxDQUFDLEdBQUc7QUFDM0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1lbWFpbC1jbGllbnQvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzPzE0ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm9iaiIsImlzQnVmZmVyIiwiaXNTbG93QnVmZmVyIiwiX2lzQnVmZmVyIiwiY29uc3RydWN0b3IiLCJyZWFkRmxvYXRMRSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-buffer/index.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/is-buffer/index.js":
/*!******************************************!*\
  !*** ../node_modules/is-buffer/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */ // The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\n\nmodule.exports = function(obj) {\n    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);\n};\nfunction isBuffer(obj) {\n    return !!obj.constructor && typeof obj.constructor.isBuffer === \"function\" && obj.constructor.isBuffer(obj);\n}\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer(obj) {\n    return typeof obj.readFloatLE === \"function\" && typeof obj.slice === \"function\" && isBuffer(obj.slice(0, 0));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVELHNFQUFzRTtBQUN0RSx1REFBdUQ7O0FBQ3ZEQSxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsR0FBRztJQUM1QixPQUFPQSxPQUFPLFFBQVNDLENBQUFBLFNBQVNELFFBQVFFLGFBQWFGLFFBQVEsQ0FBQyxDQUFDQSxJQUFJRyxTQUFTO0FBQzlFO0FBRUEsU0FBU0YsU0FBVUQsR0FBRztJQUNwQixPQUFPLENBQUMsQ0FBQ0EsSUFBSUksV0FBVyxJQUFJLE9BQU9KLElBQUlJLFdBQVcsQ0FBQ0gsUUFBUSxLQUFLLGNBQWNELElBQUlJLFdBQVcsQ0FBQ0gsUUFBUSxDQUFDRDtBQUN6RztBQUVBLGtEQUFrRDtBQUNsRCxTQUFTRSxhQUFjRixHQUFHO0lBQ3hCLE9BQU8sT0FBT0EsSUFBSUssV0FBVyxLQUFLLGNBQWMsT0FBT0wsSUFBSU0sS0FBSyxLQUFLLGNBQWNMLFNBQVNELElBQUlNLEtBQUssQ0FBQyxHQUFHO0FBQzNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanM/YjE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwib2JqIiwiaXNCdWZmZXIiLCJpc1Nsb3dCdWZmZXIiLCJfaXNCdWZmZXIiLCJjb25zdHJ1Y3RvciIsInJlYWRGbG9hdExFIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/is-buffer/index.js\n");

/***/ })

};
;