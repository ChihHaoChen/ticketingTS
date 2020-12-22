module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/outside.svg":
/*!****************************!*\
  !*** ./assets/outside.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nfunction Outside (props) {\n    return React.createElement(\"svg\",props,[React.createElement(\"defs\",{\"key\":0},React.createElement(\"style\",null,\".e100f63c-a118-4b7b-946d-2dc94d4ea7fa{}\")),React.createElement(\"path\",{\"className\":\"e100f63c-a118-4b7b-946d-2dc94d4ea7fa\",\"d\":\"M8,.83A7.17,7.17,0,1,0,15.17,8,7.17,7.17,0,0,0,8,.83Zm2.63,9.8H5.37A1.55,1.55,0,0,1,5,7.57v0A2.18,2.18,0,0,1,6.9,5.39l.3,0A2.15,2.15,0,0,1,8.75,6l.33,0a1.86,1.86,0,0,1,1.84,1.57,1.55,1.55,0,0,1-.29,3.07Z\",\"fill\":\"currentColor\",\"key\":1})]);\n}\n\nOutside.defaultProps = {\"id\":\"a0474e82-0068-492f-b64c-54284357bc81\",\"data-name\":\"圖層 1\",\"viewBox\":\"0 0 16 16\"};\n\nmodule.exports = Outside;\n\nOutside.default = Outside;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvb3V0c2lkZS5zdmc/OWE0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLG1CQUFPLENBQUMsb0JBQU87O0FBRTNCO0FBQ0Esd0VBQXdFLFFBQVEsMEVBQTBFLGdDQUFnQyxtU0FBbVM7QUFDN2Q7O0FBRUEsd0JBQXdCOztBQUV4Qjs7QUFFQSIsImZpbGUiOiIuL2Fzc2V0cy9vdXRzaWRlLnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIE91dHNpZGUgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIix7XCJrZXlcIjowfSxSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIixudWxsLFwiLmUxMDBmNjNjLWExMTgtNGI3Yi05NDZkLTJkYzk0ZDRlYTdmYXt9XCIpKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImNsYXNzTmFtZVwiOlwiZTEwMGY2M2MtYTExOC00YjdiLTk0NmQtMmRjOTRkNGVhN2ZhXCIsXCJkXCI6XCJNOCwuODNBNy4xNyw3LjE3LDAsMSwwLDE1LjE3LDgsNy4xNyw3LjE3LDAsMCwwLDgsLjgzWm0yLjYzLDkuOEg1LjM3QTEuNTUsMS41NSwwLDAsMSw1LDcuNTd2MEEyLjE4LDIuMTgsMCwwLDEsNi45LDUuMzlsLjMsMEEyLjE1LDIuMTUsMCwwLDEsOC43NSw2bC4zMywwYTEuODYsMS44NiwwLDAsMSwxLjg0LDEuNTcsMS41NSwxLjU1LDAsMCwxLS4yOSwzLjA3WlwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCIsXCJrZXlcIjoxfSldKTtcbn1cblxuT3V0c2lkZS5kZWZhdWx0UHJvcHMgPSB7XCJpZFwiOlwiYTA0NzRlODItMDA2OC00OTJmLWI2NGMtNTQyODQzNTdiYzgxXCIsXCJkYXRhLW5hbWVcIjpcIuWcluWxpCAxXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3V0c2lkZTtcblxuT3V0c2lkZS5kZWZhdWx0ID0gT3V0c2lkZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/outside.svg\n");

/***/ }),

/***/ "./components/custom-button/custom-button.component.jsx":
/*!**************************************************************!*\
  !*** ./components/custom-button/custom-button.component.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-button.module.scss */ \"./components/custom-button/custom-button.module.scss\");\n/* harmony import */ var _custom_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_custom_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mygo/Workspace/microService/ticketingTS/client/components/custom-button/custom-button.component.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n // import SNSIcon from '../sns-icon/sns-icon.component';\n\n\nconst IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n`;\nconst isSNSSignIn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"]`\n  min-width: 50px;\n  width: 30vw;\n  padding: 0 10px 0 10px;\n  background-color: white;\n  color: black;\n  border: 1px solid grey;\n  margin-left: 10px;\n  margin-right: 10px;\n\n  &:nth-child(1) {\n    margin-left: 0px;\n  }\n\n  &:nth-child(n) {\n    margin-right: 0px;\n  }\n\n  &:hover {\n    border: 1px solid #e88b8b;\n  }\n`;\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`\n  min-width: 80px;\n  width: 100vw;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 16px;\n  background-color: #e88b8b;\n  color: white;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n\n  &:hover {\n    background-color: #e54848;\n    color: white;\n    border: 1px solid #e54848;\n  }\n`;\n\nconst CustomButton = (_ref) => {\n  let {\n    children,\n    isSNSSignIn,\n    iconType,\n    showpop\n  } = _ref,\n      otherProps = _objectWithoutProperties(_ref, [\"children\", \"isSNSSignIn\", \"iconType\", \"showpop\"]);\n\n  return __jsx(StyledButton, _extends({}, otherProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }), __jsx(IconContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanN4P2UxZDMiXSwibmFtZXMiOlsiSWNvbkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImlzU05TU2lnbkluIiwiY3NzIiwiU3R5bGVkQnV0dG9uIiwiYnV0dG9uIiwiQ3VzdG9tQnV0dG9uIiwiY2hpbGRyZW4iLCJpY29uVHlwZSIsInNob3dwb3AiLCJvdGhlclByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFPQSxNQUFNQyxXQUFXLEdBQUdDLHFEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXJCQTtBQXVCQSxNQUFNQyxZQUFZLEdBQUdKLHdEQUFNLENBQUNLLE1BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F6QkE7O0FBMkJBLE1BQU1DLFlBQVksR0FBRztBQUFBLE1BQUM7QUFBRUMsWUFBRjtBQUFZTCxlQUFaO0FBQXlCTSxZQUF6QjtBQUFtQ0M7QUFBbkMsR0FBRDtBQUFBLE1BQWdEQyxVQUFoRDs7QUFBQSxTQUNqQixNQUFDLFlBQUQsZUFBa0JBLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxRQURILENBREYsQ0FEaUI7QUFBQSxDQUFyQjs7QUFTZUQsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gaW1wb3J0IFNOU0ljb24gZnJvbSAnLi4vc25zLWljb24vc25zLWljb24uY29tcG9uZW50JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2N1c3RvbS1idXR0b24ubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG5gXG5cbmNvbnN0IGlzU05TU2lnbkluID0gY3NzYFxuICBtaW4td2lkdGg6IDUwcHg7XG4gIHdpZHRoOiAzMHZ3O1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICY6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgJjpudGgtY2hpbGQobikge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4OGI4YjtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBtaW4td2lkdGg6IDgwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwIDM1cHggMCAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODhiOGI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTQ4NDg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTQ4NDg7XG4gIH1cbmBcblxuY29uc3QgQ3VzdG9tQnV0dG9uID0gKHsgY2hpbGRyZW4sIGlzU05TU2lnbkluLCBpY29uVHlwZSwgc2hvd3BvcCwgLi4ub3RoZXJQcm9wcyB9KSA9PiAoXG4gICAgPFN0eWxlZEJ1dHRvbiB7Li4ub3RoZXJQcm9wc30+XG4gICAgICA8SWNvbkNvbnRhaW5lcj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgIDwvU3R5bGVkQnV0dG9uPlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21CdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/custom-button/custom-button.component.jsx\n");

/***/ }),

/***/ "./components/custom-button/custom-button.module.scss":
/*!************************************************************!*\
  !*** ./components/custom-button/custom-button.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"custom-button\": \"custom-button_custom-button__2FIMO\",\n\t\"sns-sign-in\": \"custom-button_sns-sign-in__15rG2\",\n\t\"icon-container\": \"custom-button_icon-container__4bb1C\",\n\t\"not-sns-sign-in\": \"custom-button_not-sns-sign-in__VRc26\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5tb2R1bGUuc2Nzcz84ZTRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjdXN0b20tYnV0dG9uXCI6IFwiY3VzdG9tLWJ1dHRvbl9jdXN0b20tYnV0dG9uX18yRklNT1wiLFxuXHRcInNucy1zaWduLWluXCI6IFwiY3VzdG9tLWJ1dHRvbl9zbnMtc2lnbi1pbl9fMTVyRzJcIixcblx0XCJpY29uLWNvbnRhaW5lclwiOiBcImN1c3RvbS1idXR0b25faWNvbi1jb250YWluZXJfXzRiYjFDXCIsXG5cdFwibm90LXNucy1zaWduLWluXCI6IFwiY3VzdG9tLWJ1dHRvbl9ub3Qtc25zLXNpZ24taW5fX1ZSYzI2XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/custom-button/custom-button.module.scss\n");

/***/ }),

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mygo/Workspace/microService/ticketingTS/client/hooks/use-request.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  url,\n  method,\n  body,\n  onSuccess\n}) => {\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const doRequest = async () => {\n    try {\n      setErrors(null);\n      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a[method](url, body);\n\n      if (onSuccess) {\n        onSuccess(response.data);\n      }\n\n      return response.data;\n    } catch (err) {\n      setErrors(__jsx(\"div\", {\n        className: \"alert alert-danger\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }, __jsx(\"h4\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }\n      }, \"Ooops....\"), __jsx(\"ul\", {\n        className: \"my-0\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }\n      }, err.response.data.errors.map(err => __jsx(\"li\", {\n        key: err.message,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 15\n        }\n      }, err.message)))));\n    }\n  };\n\n  return {\n    doRequest,\n    errors\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hOThjIl0sIm5hbWVzIjpbInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VTdGF0ZSIsImRvUmVxdWVzdCIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiZXJyIiwibWFwIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZ0VBQUM7QUFBRUEsS0FBRjtBQUFPQyxRQUFQO0FBQWVDLE1BQWY7QUFBcUJDO0FBQXJCLENBQUQsS0FBc0M7QUFDbkQsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLElBQUQsQ0FBcEM7O0FBRUEsUUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDNUIsUUFBSTtBQUNGRixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsWUFBTUcsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNSLE1BQUQsQ0FBTCxDQUFjRCxHQUFkLEVBQW1CRSxJQUFuQixDQUF2Qjs7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDYkEsaUJBQVMsQ0FBQ0ssUUFBUSxDQUFDRSxJQUFWLENBQVQ7QUFDRDs7QUFFRCxhQUFPRixRQUFRLENBQUNFLElBQWhCO0FBQ0QsS0FURCxDQVNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaTixlQUFTLENBQ1A7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHTSxHQUFHLENBQUNILFFBQUosQ0FBYUUsSUFBYixDQUFrQk4sTUFBbEIsQ0FBeUJRLEdBQXpCLENBQTZCRCxHQUFHLElBQy9CO0FBQUksV0FBRyxFQUFFQSxHQUFHLENBQUNFLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1QkYsR0FBRyxDQUFDRSxPQUEzQixDQURELENBREgsQ0FGRixDQURPLENBQVQ7QUFVRDtBQUNGLEdBdEJEOztBQXdCQSxTQUFPO0FBQUVOLGFBQUY7QUFBYUg7QUFBYixHQUFQO0FBQ0QsQ0E1QkQiLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsLCBtZXRob2QsIGJvZHksIG9uU3VjY2VzcyB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldEVycm9ycyhudWxsKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIGJvZHkpO1xuXG4gICAgICBpZiAob25TdWNjZXNzKSB7XG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcnMoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15LTBcIj5cbiAgICAgICAgICAgIHtlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMubWFwKGVyciA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Vyci5tZXNzYWdlfT57ZXJyLm1lc3NhZ2V9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/i18n */ \"./utils/i18n.js\");\n/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_outside_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/outside.svg */ \"./assets/outside.svg\");\n/* harmony import */ var _assets_outside_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_outside_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_custom_button_custom_button_component_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/custom-button/custom-button.component.jsx */ \"./components/custom-button/custom-button.component.jsx\");\nvar _jsxFileName = \"/Users/mygo/Workspace/microService/ticketingTS/client/pages/auth/signup.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n`;\nconst ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n  width: 500px;\n  height: 200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n`; // const LangButton = ({t}) => (\n//   <div>\n//     <CustomButton children={t('pushButton')} />\n//   </div>\n// );\n\nconst SignUp = () => {\n  const {\n    t\n  } = useTranslation();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    doRequest,\n    errors\n  } = Object(_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    url: '/api/users/signup',\n    method: 'post',\n    body: {\n      email,\n      password\n    },\n    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/')\n  });\n\n  const onSubmit = async event => {\n    event.preventDefault();\n    await doRequest();\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, \"Sign Up\"), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Email Address\"), __jsx(\"input\", {\n    value: email,\n    onChange: e => setEmail(e.target.value),\n    className: \"form-control\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    value: password,\n    onChange: e => setPassword(e.target.value),\n    type: \"password\",\n    className: \"form-control\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  })), errors, __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, \"Sign Up\"), __jsx(IconContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(_assets_outside_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"green\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  })), __jsx(_components_custom_button_custom_button_component_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: t('pushButton'),\n    onClick: () => _utils_i18n__WEBPACK_IMPORTED_MODULE_4__[\"i18n\"].changeLanguage(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__[\"i18n\"].language === 'zh' ? 'en' : 'zh'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }));\n};\n\nSignUp.getInitialProps = async () => ({\n  namespacesRequired: ['common']\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__[\"withTranslation\"])('common')(SignUp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3NpZ251cC5qcz85YWM5Il0sIm5hbWVzIjpbIkljb25Db250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCdXR0b25Db250YWluZXIiLCJTaWduVXAiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBLE1BQU1BLGFBQWEsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBO0FBU0EsTUFBTUMsZUFBZSxHQUFHRix3REFBTSxDQUFDQyxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEEsQyxDQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUUsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTTtBQUFFQztBQUFGLE1BQVFDLGNBQWMsRUFBNUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBRUcsYUFBRjtBQUFhQztBQUFiLE1BQXdCQyxrRUFBVSxDQUFDO0FBQ3ZDQyxPQUFHLEVBQUUsbUJBRGtDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFFBQUksRUFBRTtBQUNKVixXQURJO0FBRUpHO0FBRkksS0FIaUM7QUFPdkNRLGFBQVMsRUFBRSxNQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQVBzQixHQUFELENBQXhDOztBQVVBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFOLElBQWU7QUFDOUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFVBQU1YLFNBQVMsRUFBZjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFNLFlBQVEsRUFBRVMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUNFLFNBQUssRUFBRWQsS0FEVDtBQUVFLFlBQVEsRUFBRWlCLENBQUMsSUFBSWhCLFFBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRnpCO0FBR0UsYUFBUyxFQUFDLGNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFDRSxTQUFLLEVBQUVoQixRQURUO0FBRUUsWUFBUSxFQUFFYyxDQUFDLElBQUliLFdBQVcsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FGNUI7QUFHRSxRQUFJLEVBQUMsVUFIUDtBQUlFLGFBQVMsRUFBQyxjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVZGLEVBbUJHYixNQW5CSCxFQW9CRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixFQXFCRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBUyxTQUFLLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FyQkYsRUF5QkksTUFBQyw2RkFBRDtBQUNFLFlBQVEsRUFBRVYsQ0FBQyxDQUFDLFlBQUQsQ0FEYjtBQUVFLFdBQU8sRUFBRSxNQUFNd0IsZ0RBQUksQ0FBQ0MsY0FBTCxDQUFvQkQsZ0RBQUksQ0FBQ0UsUUFBTCxLQUFrQixJQUFsQixHQUF5QixJQUF6QixHQUFnQyxJQUFwRCxDQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJKLENBREY7QUFpQ0QsQ0F0REQ7O0FBeURBM0IsTUFBTSxDQUFDNEIsZUFBUCxHQUF5QixhQUFhO0FBQ3BDQyxvQkFBa0IsRUFBRSxDQUFDLFFBQUQ7QUFEZ0IsQ0FBYixDQUF6Qjs7QUFNZUMsa0lBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEI5QixNQUExQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGkxOG4sIExpbmssIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4nO1xuXG5pbXBvcnQgT3V0c2lkZSBmcm9tICcuLi8uLi9hc3NldHMvb3V0c2lkZS5zdmcnO1xuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanN4JztcblxuXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuLy8gY29uc3QgTGFuZ0J1dHRvbiA9ICh7dH0pID0+IChcbi8vICAgPGRpdj5cbi8vICAgICA8Q3VzdG9tQnV0dG9uIGNoaWxkcmVuPXt0KCdwdXNoQnV0dG9uJyl9IC8+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuXG5cbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IGRvUmVxdWVzdCwgZXJyb3JzIH0gPSB1c2VSZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBpL3VzZXJzL3NpZ251cCcsXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keToge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZFxuICAgIH0sXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnLycpXG4gIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhd2FpdCBkb1JlcXVlc3QoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICA8aDE+U2lnbiBVcDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yc31cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgIDxPdXRzaWRlIGNvbG9yPSdncmVlbicvPlxuICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgXG4gICAgICAgIDxDdXN0b21CdXR0b24gXG4gICAgICAgICAgY2hpbGRyZW49e3QoJ3B1c2hCdXR0b24nKX0gXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlID09PSAnemgnID8gJ2VuJyA6ICd6aCcpfVxuICAgICAgICAvPlxuICAgICAgXG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuXG5TaWduVXAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddLFxufSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoU2lnblVwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "./utils/i18n.js":
/*!***********************!*\
  !*** ./utils/i18n.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst NextI18NextInstance = new NextI18Next({\n  defaultLanguage: 'zh',\n  otherLanguages: ['en', 'ja'],\n  localeSubpaths,\n  localePath: path.resolve('./../public/static/locales')\n});\nconst {\n  appWithTranslation,\n  withTranslation\n} = NextI18NextInstance;\nmodule.exports = {\n  nextI18next: NextI18NextInstance,\n  appWithTranslation,\n  withTranslation\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pMThuLmpzP2UwOWMiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJOZXh0STE4TmV4dEluc3RhbmNlIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIndpdGhUcmFuc2xhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJuZXh0STE4bmV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFxQkYsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLENBQXVCQyxPQUF2QixHQUFpQ0UsbUJBQTVEOztBQUNBLE1BQU1DLElBQUksR0FBR0osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQSxNQUFNSyxtQkFBbUIsR0FBRyxJQUFJTixXQUFKLENBQWdCO0FBQzNDTyxpQkFBZSxFQUFFLElBRDBCO0FBRTNDQyxnQkFBYyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGMkI7QUFHM0NMLGdCQUgyQztBQUkzQ00sWUFBVSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSw0QkFBYjtBQUorQixDQUFoQixDQUE1QjtBQU9BLE1BQU07QUFDTEMsb0JBREs7QUFFTEM7QUFGSyxJQUdGTixtQkFISjtBQUtBTyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJDLGFBQVcsRUFBRVQsbUJBREc7QUFFaEJLLG9CQUZnQjtBQUdoQkM7QUFIZ0IsQ0FBakIiLCJmaWxlIjoiLi91dGlscy9pMThuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0O1xuY29uc3QgeyBsb2NhbGVTdWJwYXRocyB9ID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZztcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xuXHRkZWZhdWx0TGFuZ3VhZ2U6ICd6aCcsXG5cdG90aGVyTGFuZ3VhZ2VzOiBbJ2VuJywgJ2phJ10sXG5cdGxvY2FsZVN1YnBhdGhzLFxuXHRsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vLi4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcbn0pO1xuXG5jb25zdCB7XG5cdGFwcFdpdGhUcmFuc2xhdGlvbixcblx0d2l0aFRyYW5zbGF0aW9uLFxufSA9IE5leHRJMThOZXh0SW5zdGFuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRuZXh0STE4bmV4dDogTmV4dEkxOE5leHRJbnN0YW5jZSxcblx0YXBwV2l0aFRyYW5zbGF0aW9uLFxuXHR3aXRoVHJhbnNsYXRpb24sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/i18n.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });