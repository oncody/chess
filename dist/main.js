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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/eslint-loader/dist/cjs.js):\\nTypeError: Cannot read config file: /mnt/c/dev/chess/.eslintrc.js\\nError: Cannot set property 'flowtype-errors/show-errors' of undefined\\n    at Object.<anonymous> (/mnt/c/dev/chess/.eslintrc.js:16:51)\\n    at Module._compile (/mnt/c/dev/chess/node_modules/v8-compile-cache/v8-compile-cache.js:194:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)\\n    at Module.load (internal/modules/cjs/loader.js:993:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:892:14)\\n    at Module.require (internal/modules/cjs/loader.js:1033:19)\\n    at module.exports (/mnt/c/dev/chess/node_modules/import-fresh/index.js:31:59)\\n    at loadJSConfigFile (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/config-array-factory.js:230:16)\\n    at loadConfigFile (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/config-array-factory.js:314:20)\\n    at ConfigArrayFactory._loadConfigData (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/config-array-factory.js:606:42)\\n    at ConfigArrayFactory.loadFile (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/config-array-factory.js:472:40)\\n    at createCLIConfigArray (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:172:35)\\n    at new CascadingConfigArrayFactory (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:233:29)\\n    at new CLIEngine (/mnt/c/dev/chess/node_modules/eslint/lib/cli-engine/cli-engine.js:553:36)\\n    at createEngine (/mnt/c/dev/chess/node_modules/eslint-loader/dist/createEngine.js:22:21)\\n    at new Linter (/mnt/c/dev/chess/node_modules/eslint-loader/dist/Linter.js:30:35)\\n    at Object.loader (/mnt/c/dev/chess/node_modules/eslint-loader/dist/index.js:18:18)\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });