/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/events.js":
/*!*********************************!*\
  !*** ./src/assets/js/events.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize.js */ \"./src/assets/js/initialize.js\");\n/* harmony import */ var _serverResponse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverResponse.js */ \"./src/assets/js/serverResponse.js\");\n\n\n\nconst response = (document.onload = (0,_serverResponse_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\nconst slider = document.querySelector(\".slider\");\nconst sliderItems = slider.getElementsByClassName(\"slider__item\");\nconst previewRoom = document.querySelectorAll(\".preview__room\");\nconst previewLamp = document.querySelector(\".preview__lamp\");\n\nconst darkModeBtn = slider.querySelector(\".button__dark\");\nconst lightModeBtn = slider.querySelector(\".button__light\");\n\nvar index = 0;\n\nslider.addEventListener(\"click\", function (event) {\n    let target = event.target;\n\n    if (\n        target.classList.contains(\"slider__item\") ||\n        target.closest(\".slider__item\")\n    ) {\n        if (target.classList.contains(\"slider__item\")) {\n            index = Array.prototype.indexOf.call(sliderItems, target);\n\n            toggleClassActive(target);\n            response.then((data) => {\n                (0,_initialize_js__WEBPACK_IMPORTED_MODULE_0__.initialize)(data[index]);\n                if (data[index].isDarkMode) {\n                    darkModeBtn.style.cursor = \"pointer\";\n                    darkModeBtn.classList.add(\"button__dark-active\");\n                } else {\n                    darkModeBtn.style.cursor = \"default\";\n                    darkModeBtn.classList.remove(\"button__dark-active\");\n                }\n            });\n        } else {\n            target = target.closest(\".slider__item\");\n            index = Array.prototype.indexOf.call(sliderItems, target);\n\n            toggleClassActive(target);\n            response.then((data) => {\n                (0,_initialize_js__WEBPACK_IMPORTED_MODULE_0__.initialize)(data[index]);\n                if (data[index].isDarkMode) {\n                    darkModeBtn.style.cursor = \"pointer\";\n                    darkModeBtn.classList.add(\"button__dark-active\");\n                } else {\n                    darkModeBtn.style.cursor = \"default\";\n                    darkModeBtn.classList.remove(\"button__dark-active\");\n                }\n            });\n        }\n\n        previewRoom[0].classList.add(\"active\");\n        previewRoom[1].classList.remove(\"active\");\n        previewLamp.style.display = \"block\";\n    }\n\n    if (target.classList.contains(\"button__dark-active\")) {\n        previewRoom.forEach((image) => {\n            image.classList.toggle(\"active\");\n        });\n        previewLamp.style.display = \"none\";\n        darkModeBtn.disabled = true;\n        lightModeBtn.style.cursor = \"pointer\";\n\n        \n    }\n});\n\nlightModeBtn.onclick = function () {\n    previewRoom[0].classList.add(\"active\");\n    previewRoom[1].classList.remove(\"active\");\n    previewLamp.style.display = \"block\";\n\n    darkModeBtn.disabled = false;\n};\n\nfunction toggleClassActive(target) {\n    Array.prototype.forEach.call(sliderItems, function (item) {\n        if (item.classList.contains(\"slider__item-active\")) {\n            item.classList.remove(\"slider__item-active\");\n        }\n    });\n    target.classList.add(\"slider__item-active\");\n}\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/events.js?");

/***/ }),

/***/ "./src/assets/js/initialize.js":
/*!*************************************!*\
  !*** ./src/assets/js/initialize.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": function() { return /* binding */ initialize; },\n/* harmony export */   \"initializeSlider\": function() { return /* binding */ initializeSlider; }\n/* harmony export */ });\nfunction initialize(data) {\n    const lampFeatures = document.querySelector(\".feature__general\");\n    const lampImage = document.querySelector(\".feature__image\");\n    const previewLamp = document.querySelector(\".preview__lamp\");\n\n    const lampMaterial = lampFeatures.querySelector(\".feature__material span\");\n    const lampDimensions = lampFeatures.querySelector(\n        \".feature__dimensions span\"\n    );\n    const lampNetWeight = lampFeatures.querySelector(\n        \".feature__netWeight span\"\n    );\n    const lampElectrification = lampFeatures.querySelector(\n        \".feature__electrification span\"\n    );\n\n    lampImage.src = `${data.image}`;\n    lampMaterial.innerHTML = `${data.material}`;\n    lampDimensions.innerHTML = `H ${data.height} x W ${data.width} x D ${data.width}`;\n    lampNetWeight.innerHTML = `${data.weight}kg`;\n    lampElectrification.innerHTML = `${data.electrification}`;\n\n    previewLamp.src = `${data.image}`;\n}\n\nfunction initializeSlider(data) {\n    const slider = document.querySelector(\".slider__list\");\n\n    for (let lamp of data) {\n        let div = document.createElement(\"div\");\n        let img = document.createElement(\"img\");\n        img.alt = \"lamp-icon\";\n        img.src = `${lamp.image}`;\n        div.classList.add(\"slider__item\");\n        div.append(img);\n        slider.append(div);\n    }\n\n    slider.firstChild.classList.add(\"slider__item-active\");\n}\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/initialize.js?");

/***/ }),

/***/ "./src/assets/js/preloader.js":
/*!************************************!*\
  !*** ./src/assets/js/preloader.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {\n   const loader = `<div class=\"preloader lds-dual-ring\"></div>`;\n   const featureLamp = document.querySelector(\".feature__lamp\");\n   const sliderList = document.querySelector(\".slider\");\n   const previewLamp = document.querySelector(\".preview__container\");\n\n   featureLamp.insertAdjacentHTML(\"afterbegin\", loader);\n   sliderList.insertAdjacentHTML(\"afterbegin\", loader);\n   previewLamp.insertAdjacentHTML(\"afterbegin\", loader);\n\n   return function () {\n      const findPreloader = document.querySelectorAll(\".preloader\");\n      for (let i = 0; i < findPreloader.length; i++) {\n         findPreloader[i].remove();\n      }\n   };\n}\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/preloader.js?");

/***/ }),

/***/ "./src/assets/js/serverResponse.js":
/*!*****************************************!*\
  !*** ./src/assets/js/serverResponse.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize.js */ \"./src/assets/js/initialize.js\");\n/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader.js */ \"./src/assets/js/preloader.js\");\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {\n   const requestURL = \"https://private-dcbb75-lampshop.apiary-mock.com/lamps\";\n   const mock = [\n      {\n         id: 1,\n         name: \"Geometric Lamp\",\n         published_at: \"2021-02-05T08:40:51.620Z\",\n         material: \"copper\",\n         height: 33,\n         width: 15,\n         weight: 2.5,\n         electrification: \"LED 10W, G9, 220-240V, 50 Hz\",\n         image: \"https://i.postimg.cc/pXWqhdnX/Lamp-1-2.png\",\n         isDarkMode: false,\n      },\n      {\n         id: 2,\n         name: \"Black Geometric Lamp\",\n         published_at: \"2021-02-05T08:40:51.620Z\",\n         material: \"metal\",\n         height: 45,\n         width: 12,\n         weight: 2.4,\n         electrification: \"LED 10W, G9, 220-240V, 40 Hz\",\n         image: \"https://i.postimg.cc/BQJ1cYsJ/Lamp-2-2.png\",\n         isDarkMode: true,\n      },\n      {\n         id: 3,\n         name: \"Beige Geometric Lamp\",\n         published_at: \"2021-02-05T08:40:51.620Z\",\n         material: \"plastic\",\n         height: 40,\n         width: 13,\n         weight: 2.2,\n         electrification: \"LED 10W, G9, 220-240V, 30 Hz\",\n         image: \"https://i.postimg.cc/FHTr5p2g/Lamp-6-1.png\",\n         isDarkMode: false,\n      },\n      {\n         id: 4,\n         name: \"White Round Lamp\",\n         published_at: \"2021-02-05T08:40:51.620Z\",\n         material: \"plastic\",\n         height: 20,\n         width: 50,\n         weight: 3,\n         electrification: \"LED 10W, G9, 220-240V, 30 Hz\",\n         image: \"https://i.postimg.cc/G2CnB0W3/pngwing-com.png\",\n         isDarkMode: false,\n      },\n   ];\n   let loader = await (0,_preloader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n   let json = await fetch(requestURL)\n      .then((response) => {\n         if (!response.ok) {\n            throw new Error(`HTTP error: ${response.status}`);\n         }\n         loader();\n         return response.json();\n      })\n      .catch((err) => {\n         console.error(`Fetch problem: ${err.message}`);\n         loader();\n         return mock;\n      });\n\n   (0,_initialize_js__WEBPACK_IMPORTED_MODULE_0__.initialize)(json[0]);\n   (0,_initialize_js__WEBPACK_IMPORTED_MODULE_0__.initializeSlider)(json);\n\n   return json;\n}\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/serverResponse.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/events.js");
/******/ 	__webpack_require__("./src/assets/js/initialize.js");
/******/ 	__webpack_require__("./src/assets/js/preloader.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/serverResponse.js");
/******/ 	
/******/ })()
;