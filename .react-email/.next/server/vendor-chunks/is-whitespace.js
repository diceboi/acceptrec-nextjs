"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-whitespace";
exports.ids = ["vendor-chunks/is-whitespace"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-whitespace/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-whitespace/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*!\n * is-whitespace <https://github.com/jonschlinkert/is-whitespace>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */ \nvar cache;\nmodule.exports = function isWhitespace(str) {\n    return typeof str === \"string\" && regex().test(str);\n};\nfunction regex() {\n    // ensure that runtime compilation only happens once\n    return cache || (cache = new RegExp('^[\\\\s\t\\n\\v\\f\\r \\xa0 ᠎             　\\u2028\\u2029\\uFEFF\"]+$'));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtd2hpdGVzcGFjZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVEO0FBRUEsSUFBSUE7QUFFSkMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLGFBQWFDLEdBQUc7SUFDeEMsT0FBTyxPQUFRQSxRQUFRLFlBQWFDLFFBQVFDLElBQUksQ0FBQ0Y7QUFDbkQ7QUFFQSxTQUFTQztJQUNQLG9EQUFvRDtJQUNwRCxPQUFPTCxTQUFVQSxDQUFBQSxRQUFRLElBQUlPLE9BQU8sNERBQXlKO0FBQy9MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UvaW5kZXguanM/OWEyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGlzLXdoaXRlc3BhY2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXdoaXRlc3BhY2U+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgJiYgcmVnZXgoKS50ZXN0KHN0cik7XG59O1xuXG5mdW5jdGlvbiByZWdleCgpIHtcbiAgLy8gZW5zdXJlIHRoYXQgcnVudGltZSBjb21waWxhdGlvbiBvbmx5IGhhcHBlbnMgb25jZVxuICByZXR1cm4gY2FjaGUgfHwgKGNhY2hlID0gbmV3IFJlZ0V4cCgnXltcXFxcc1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRlwiXSskJykpO1xufVxuIl0sIm5hbWVzIjpbImNhY2hlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzV2hpdGVzcGFjZSIsInN0ciIsInJlZ2V4IiwidGVzdCIsIlJlZ0V4cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-whitespace/index.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/is-whitespace/index.js":
/*!**********************************************!*\
  !*** ../node_modules/is-whitespace/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/*!\n * is-whitespace <https://github.com/jonschlinkert/is-whitespace>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */ \nvar cache;\nmodule.exports = function isWhitespace(str) {\n    return typeof str === \"string\" && regex().test(str);\n};\nfunction regex() {\n    // ensure that runtime compilation only happens once\n    return cache || (cache = new RegExp('^[\\\\s\t\\n\\v\\f\\r \\xa0 ᠎             　\\u2028\\u2029\\uFEFF\"]+$'));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0MsR0FFRDtBQUVBLElBQUlBO0FBRUpDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxhQUFhQyxHQUFHO0lBQ3hDLE9BQU8sT0FBUUEsUUFBUSxZQUFhQyxRQUFRQyxJQUFJLENBQUNGO0FBQ25EO0FBRUEsU0FBU0M7SUFDUCxvREFBb0Q7SUFDcEQsT0FBT0wsU0FBVUEsQ0FBQUEsUUFBUSxJQUFJTyxPQUFPLDREQUF5SjtBQUMvTCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uLi9ub2RlX21vZHVsZXMvaXMtd2hpdGVzcGFjZS9pbmRleC5qcz83MjdmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogaXMtd2hpdGVzcGFjZSA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtd2hpdGVzcGFjZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cikge1xuICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSAmJiByZWdleCgpLnRlc3Qoc3RyKTtcbn07XG5cbmZ1bmN0aW9uIHJlZ2V4KCkge1xuICAvLyBlbnN1cmUgdGhhdCBydW50aW1lIGNvbXBpbGF0aW9uIG9ubHkgaGFwcGVucyBvbmNlXG4gIHJldHVybiBjYWNoZSB8fCAoY2FjaGUgPSBuZXcgUmVnRXhwKCdeW1xcXFxzXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGXCJdKyQnKSk7XG59XG4iXSwibmFtZXMiOlsiY2FjaGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNXaGl0ZXNwYWNlIiwic3RyIiwicmVnZXgiLCJ0ZXN0IiwiUmVnRXhwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/is-whitespace/index.js\n");

/***/ })

};
;