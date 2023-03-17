module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server-fetch-client-receive */ \"./src/server-fetch-client-receive.js\");\n/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users */ \"./src/components/Users.jsx\");\n/* harmony import */ var _Photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Photos */ \"./src/components/Photos.jsx\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Posts */ \"./src/components/Posts.jsx\");\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comments */ \"./src/components/Comments.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"SRCR\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"Click me \", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Non-Suspense\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Posts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    postId: count + 1\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Suspense based\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"SrcrSuspense\"], {\n    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    commentId: count + 1\n  }, \"Based on count + 1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"SrcrSuspense\"], {\n    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    commentId: count * 5\n  }, \"Based on count * 5\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"SrcrSuspense\"], {\n    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    userId: count + 1\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"SrcrSuspense\"], {\n    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Photos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    photosId: count + 1\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Hello from below\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.jsx?");

/***/ }),

/***/ "./src/components/Comments.jsx":
/*!*************************************!*\
  !*** ./src/components/Comments.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server-fetch-client-receive */ \"./src/server-fetch-client-receive.js\");\n\n\n\nvar request = function request(endpoint, id) {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      return resolve(fetch(\"https://jsonplaceholder.typicode.com/\".concat(endpoint, \"/\").concat(id)).then(function (res) {\n        return res.json();\n      }));\n    }, 10 * 1000);\n  });\n};\n\nvar Comments = function Comments(_ref) {\n  var commentId = _ref.commentId,\n      children = _ref.children;\n  var data = Object(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"useSuspensfulSRCR\"])(function () {\n    return request(\"comments\", commentId);\n  }, \"comments-\".concat(commentId));\n  var comments = data.read();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Hello from Comments\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"This request has a 10 second delay\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), commentId, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), JSON.stringify(comments), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\n\n//# sourceURL=webpack:///./src/components/Comments.jsx?");

/***/ }),

/***/ "./src/components/Photos.jsx":
/*!***********************************!*\
  !*** ./src/components/Photos.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server-fetch-client-receive */ \"./src/server-fetch-client-receive.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar request =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(photosId, postsId) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.all([fetch(\"https://jsonplaceholder.typicode.com/photos/\".concat(photosId)).then(function (res) {\n              return res.json();\n            }), fetch(\"https://jsonplaceholder.typicode.com/posts/\".concat(postsId)).then(function (res) {\n              return res.json();\n            })]).then(function (values) {\n              return values;\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function request(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Photos(_ref2) {\n  var photosId = _ref2.photosId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  var photosData = Object(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"useSuspensfulSRCR\"])(function () {\n    return request(photosId, count);\n  }, \"photos-\".concat(photosId, \"-posts-\").concat(count));\n\n  var _ref3 = photosData.read() || [],\n      _ref4 = _slicedToArray(_ref3, 2),\n      photos = _ref4[0],\n      posts = _ref4[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Hello from Photos\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"Click me \", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"photos \", photosId), JSON.stringify(photos), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"posts\"), JSON.stringify(posts), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Photos);\n\n//# sourceURL=webpack:///./src/components/Photos.jsx?");

/***/ }),

/***/ "./src/components/Posts.jsx":
/*!**********************************!*\
  !*** ./src/components/Posts.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server-fetch-client-receive */ \"./src/server-fetch-client-receive.js\");\n\n\n\nvar request = function request(endpoint, id) {\n  return fetch(\"https://jsonplaceholder.typicode.com/\".concat(endpoint, \"/\").concat(id)).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Posts = function Posts(_ref) {\n  var postId = _ref.postId;\n\n  var _useSRCR = Object(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"useSRCR\"])(function () {\n    return request(\"posts\", postId);\n  }, \"posts-\".concat(postId)),\n      data = _useSRCR.data,\n      loading = _useSRCR.loading;\n\n  if (loading) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\");\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Hello from Posts using non-Suspense hook\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), postId, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), JSON.stringify(data), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\n//# sourceURL=webpack:///./src/components/Posts.jsx?");

/***/ }),

/***/ "./src/components/Users.jsx":
/*!**********************************!*\
  !*** ./src/components/Users.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server-fetch-client-receive */ \"./src/server-fetch-client-receive.js\");\n\n\n\nvar request = function request(endpoint, id) {\n  return fetch(\"https://jsonplaceholder.typicode.com/\".concat(endpoint, \"/\").concat(id)).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction Users(_ref) {\n  var userId = _ref.userId,\n      children = _ref.children;\n  var userData = Object(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_1__[\"useSuspensfulSRCR\"])(function () {\n    return request(\"users\", userId);\n  }, \"users-\".concat(userId));\n  var user = userData.read();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Hello from Users\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), JSON.stringify(user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: \"2rem\"\n    }\n  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\n\n//# sourceURL=webpack:///./src/components/Users.jsx?");

/***/ }),

/***/ "./src/server-fetch-client-receive.js":
/*!********************************************!*\
  !*** ./src/server-fetch-client-receive.js ***!
  \********************************************/
/*! exports provided: setIsServerCheck, SrcrSuspense, useSuspensfulSRCR, useSRCR, fixSRCRComments, resolvedDataToHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsServerCheck\", function() { return setIsServerCheck; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SrcrSuspense\", function() { return SrcrSuspense; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSuspensfulSRCR\", function() { return useSuspensfulSRCR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSRCR\", function() { return useSRCR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fixSRCRComments\", function() { return fixSRCRComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvedDataToHTML\", function() { return resolvedDataToHTML; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar isNode = function isNode() {\n  return Object.prototype.toString.call(typeof process !== \"undefined\" ? process : 0) === \"[object process]\";\n};\n\nvar serverCheck;\nvar setIsServerCheck = function setIsServerCheck(customServerCheck) {\n  serverCheck = customServerCheck;\n};\nvar isServer = serverCheck ? serverCheck() : isNode() || !(typeof window != \"undefined\" && window.document);\nvar dataAttrName = \"data-srcr\";\nvar cache = new Map();\nvar suspenderSet = new Set();\nglobalThis.__srcrLoaded = true;\nvar SrcrSuspense =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SrcrSuspense, _Component);\n\n  function SrcrSuspense(props) {\n    var _this;\n\n    _classCallCheck(this, SrcrSuspense);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SrcrSuspense).call(this, props));\n    _this.state = {\n      inSuspense: isServer\n    };\n    suspenderSet.add(_assertThisInitialized(_this));\n    _this.suspenderIdx = suspenderSet.size - 1;\n    return _this;\n  }\n\n  _createClass(SrcrSuspense, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(err) {\n      var _this2 = this;\n\n      if (!err.key) throw err;\n      var key = err.key;\n\n      var _cache$get = cache.get(key),\n          toResolve = _cache$get.toResolve,\n          resolvedResponse = _cache$get.resolvedResponse;\n\n      if (resolvedResponse) {\n        this.setState({\n          inSuspense: false\n        });\n        return this.props.children;\n      }\n\n      this.setState({\n        inSuspense: true\n      });\n      var suspender = toResolve;\n      this._suspender = suspender;\n\n      var update = function update(res) {\n        if (_this2._suspender !== suspender) return;\n        cache.set(key, _objectSpread({}, cache.get(key), {\n          resolvedResponse: res,\n          toResolve: null\n        }));\n\n        _this2.setState({\n          inSuspense: false\n        });\n      };\n\n      suspender.then(update, update);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var inSuspense = this.state.inSuspense;\n\n      if (isServer) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {\n          start: true,\n          text: this.suspenderIdx\n        }), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {\n          text: this.suspenderIdx\n        }));\n      }\n\n      if (inSuspense) {\n        return this.props.fallback;\n      }\n\n      return this.props.children;\n    }\n  }]);\n\n  return SrcrSuspense;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Comment = function Comment(_ref) {\n  var start = _ref.start,\n      text = _ref.text;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-srcr-comment\": true\n  }, \"<!-- srcr_\".concat(start ? \"s\" : \"e\", \"_\").concat(text, \" -->\"));\n};\n\nvar useSuspensfulSRCR = function useSuspensfulSRCR(requestPromise, key) {\n  if (!cache.get(key)) {\n    var suspenseBoundary = Array.from(suspenderSet)[suspenderSet.size - 1];\n    cache.set(key, _objectSpread({}, cache.get(key), {\n      suspenseBoundary: suspenseBoundary,\n      suspenseBoundaryIdx: suspenseBoundary.suspenderIdx,\n      toResolve: null,\n      resolvedResponse: null\n    }));\n  }\n\n  return {\n    read: function read() {\n      var resolvedDataOnClient = globalThis[\"srcr-comp-json_\".concat(key)];\n\n      if (resolvedDataOnClient) {\n        return resolvedDataOnClient;\n      }\n\n      var _cache$get2 = cache.get(key),\n          resolvedResponse = _cache$get2.resolvedResponse,\n          toResolve = _cache$get2.toResolve;\n\n      if (resolvedResponse) {\n        return resolvedResponse;\n      }\n\n      if (toResolve) {\n        if (!isServer) throw {\n          key: key\n        };\n        return;\n      }\n\n      var suspenseBoundary = Array.from(suspenderSet)[suspenderSet.size - 1];\n      cache.set(key, _objectSpread({}, cache.get(key), {\n        suspenseBoundary: suspenseBoundary,\n        suspenseBoundaryIdx: suspenseBoundary.suspenderIdx,\n        toResolve: requestPromise()\n      }));\n      if (!isServer) throw {\n        key: key\n      };\n    }\n  };\n};\n\nvar resolveDataOrPromise =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(key, requestPromise) {\n    var data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            data = globalThis[\"srcr-comp-json_\".concat(key)];\n\n            if (!data) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\", data);\n\n          case 3:\n            _context.next = 5;\n            return requestPromise();\n\n          case 5:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function resolveDataOrPromise(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar useSRCR = function useSRCR(requestPromise, key) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  if (!cache.get(key)) {\n    cache.set(key, {\n      requestPromise: requestPromise\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isServer) return;\n\n    function fetchData() {\n      return _fetchData.apply(this, arguments);\n    }\n\n    function _fetchData() {\n      _fetchData = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var json;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return resolveDataOrPromise(key, requestPromise);\n\n              case 2:\n                json = _context2.sent;\n                setData(json);\n                setLoading(false);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n      return _fetchData.apply(this, arguments);\n    }\n\n    fetchData();\n  }, [key]);\n  return {\n    data: data,\n    loading: loading\n  };\n};\nvar fixSRCRComments = function fixSRCRComments(htmlString) {\n  return htmlString.replace(/(<div data-srcr-comment=\"true\">&lt;!--) ([\\w\\d_]+) (--&gt;<\\/div>)/g, \"<!-- $2 -->\");\n};\n\nvar copyElsIntoPlace = function copyElsIntoPlace(key, idx, dataAttrName) {\n  // data already loaded which means React has already hydrated\n  if (globalThis[\"srcr-comp-json_\".concat(key)] || globalThis.__srcrLoaded) return;\n  var rootEls = document.querySelectorAll(\"[data-reactroot]:not([data-srcr-post])\");\n  rootEls.forEach(function (rootEl) {\n    var start = rootEl.innerHTML.match(\"(<!--) (srcr_s_\".concat(idx, \") (-->)\"));\n    var end = rootEl.innerHTML.match(\"(<!--) (srcr_e_\".concat(idx, \") (-->)\"));\n    var postEl = document.querySelector(\"[\".concat(dataAttrName, \"-post=\\\"\").concat(key, \"\\\"]\"));\n    if (!start || !end || !postEl) return; // WIP - still figuring out how we can stitch in the HTML of the nested components\n\n    var nestedStart = postEl.innerHTML.match(\"<!-- srcr_s_([\\\\d]) -->\");\n    var nestedEnd = postEl.innerHTML.match(\"<!-- srcr_e_([\\\\d]) -->\");\n\n    if (nestedStart && nestedEnd) {\n      console.log(nestedStart);\n      var id = nestedStart[1];\n      var nestedEl = document.querySelector(\"[data-srcr-suspender=\\\"\".concat(id, \"\\\"]\"));\n      postEl.innerHTML = postEl.innerHTML.substring(0, nestedStart.index) + nestedEl.innerHTML + postEl.innerHTML.substring(nestedEnd.index);\n    }\n\n    rootEl.innerHTML = rootEl.innerHTML.substring(0, start.index) + postEl.innerHTML + rootEl.innerHTML.substring(end.index);\n  });\n};\n\nvar resolvedDataToHTML =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee4(resWriter) {\n    var entries;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            entries = Array.from(cache.entries());\n            return _context4.abrupt(\"return\", Promise.allSettled(entries.map(\n            /*#__PURE__*/\n            function () {\n              var _ref5 = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee3(_ref4) {\n                var _ref6, key, _ref6$, requestPromise, toResolve, suspenseBoundary, suspenseBoundaryIdx, html, json, _json, post;\n\n                return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                  while (1) {\n                    switch (_context3.prev = _context3.next) {\n                      case 0:\n                        _ref6 = _slicedToArray(_ref4, 2), key = _ref6[0], _ref6$ = _ref6[1], requestPromise = _ref6$.requestPromise, toResolve = _ref6$.toResolve, suspenseBoundary = _ref6$.suspenseBoundary, suspenseBoundaryIdx = _ref6$.suspenseBoundaryIdx;\n                        html = \"<div hidden style='display:none'>\";\n\n                        if (!requestPromise) {\n                          _context3.next = 9;\n                          break;\n                        }\n\n                        _context3.next = 5;\n                        return requestPromise();\n\n                      case 5:\n                        json = _context3.sent;\n                        html += \"<script>globalThis[\\\"srcr-comp-json_\".concat(key, \"\\\"] = \").concat(JSON.stringify(json).replace(/</g, \"\\\\u003C\"), \"</script>\");\n                        _context3.next = 17;\n                        break;\n\n                      case 9:\n                        _context3.next = 11;\n                        return toResolve;\n\n                      case 11:\n                        _json = _context3.sent;\n                        cache.set(key, _objectSpread({}, cache.get(key), {\n                          toResolve: null,\n                          resolvedResponse: _json\n                        }));\n                        post = suspenseBoundary.props.children;\n\n                        if (post) {\n                          html += fixSRCRComments(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n                            \"data-srcr-post\": key,\n                            \"data-srcr-suspender\": suspenseBoundaryIdx\n                          }, post)));\n                        }\n\n                        html += \"<script>(\".concat(copyElsIntoPlace, \")(\\\"\").concat(key, \"\\\", \\\"\").concat(suspenseBoundaryIdx, \"\\\", \\\"\").concat(dataAttrName, \"\\\");</script>\"); // add data to global after the component HTML stitching to ensure it doesn't move HTML after React has hydrated\n\n                        html += \"<script data-idx=\".concat(suspenseBoundaryIdx, \">globalThis[\\\"srcr-comp-json_\").concat(key, \"\\\"] = \").concat(JSON.stringify(_json).replace(/</g, \"\\\\u003C\"), \"</script>\");\n\n                      case 17:\n                        html += \"</div>\";\n                        resWriter(html);\n                        cache.delete(key);\n                        suspenderSet.clear();\n                        return _context3.abrupt(\"return\", html);\n\n                      case 22:\n                      case \"end\":\n                        return _context3.stop();\n                    }\n                  }\n                }, _callee3);\n              }));\n\n              return function (_x4) {\n                return _ref5.apply(this, arguments);\n              };\n            }())).finally(function () {\n              cache.clear();\n            }));\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function resolvedDataToHTML(_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server-fetch-client-receive.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.jsx\");\n/* harmony import */ var _server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-fetch-client-receive */ \"./src/server-fetch-client-receive.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar server = express__WEBPACK_IMPORTED_MODULE_1___default()();\nserver.use(\"/assets\", express__WEBPACK_IMPORTED_MODULE_1___default.a.static(Object(path__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(__dirname, \"assets\")));\nserver.get(\"/\",\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var appString, title, writer;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            res.setHeader(\"Content-Type\", \"text/html; charset=utf-8\");\n            res.setHeader(\"Transfer-Encoding\", \"chunked\");\n            appString = Object(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_6__[\"fixSRCRComments\"])(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n            title = \"Hello World from the server\";\n            res.write(\"<!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>\".concat(title, \"</title>\\n    </head>\\n    <body>\\n    <div id=\\\"root\\\">\").concat(appString, \"</div>\\n\"));\n            res.write(\"<script async src=\\\"/assets/bundle.js\\\"></script>\");\n\n            writer = function writer(chunk) {\n              // console.log(\"chunk\", chunk);\n              res.write(chunk);\n            };\n\n            _context.next = 9;\n            return Object(_server_fetch_client_receive__WEBPACK_IMPORTED_MODULE_6__[\"resolvedDataToHTML\"])(writer);\n\n          case 9:\n            res.end();\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nserver.listen(8080);\nconsole.log(\"listening on 8080\");\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/server.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });