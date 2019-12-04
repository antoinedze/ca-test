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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jfactory-element/index.js":
/*!************************************************!*\
  !*** ./node_modules/jfactory-element/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nclass Element {\r\n\tconstructor(argument){\r\n\t\tif(!argument)return;\r\n\t\t\r\n\t\tlet context, htmlString, htmlElement, tagName, elementFromHtmlString, element;\r\n\t\thtmlString = htmlElement = tagName = argument;\r\n\t\t\r\n\t\tif(argument instanceof HTMLElement){\r\n\t\t\tcontext = htmlElement;\r\n\t\t} else {\r\n\t\t\telementFromHtmlString = /\\</.test(argument);\r\n\t\t\telement = document.createElement(elementFromHtmlString || !tagName ? 'div' : tagName);\r\n\t\t\tif(elementFromHtmlString){\r\n\t\t\t\telement.innerHTML = htmlString;\r\n\t\t\t\telement = element.firstElementChild.cloneNode(true);\r\n\t\t\t}\r\n\t\t\tcontext = element;\r\n\t\t}\r\n\t\tObject.defineProperties(this, {context: {writable: false, value: context}});\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tid(id){\r\n\t\tif(!this.context)return this;\r\n\t\tif(typeof(id) === 'undefined')\r\n\t\t\treturn this.context.id;\r\n\t\tif(id)\r\n\t\t\tthis.context.id = id;\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tclass(className){\r\n\t\tif(!this.context)return this;\r\n\t\tif(typeof(className) === 'undefined')\r\n\t\t\treturn this.context.className;\r\n\t\tif(className)\r\n\t\t\tthis.context.className = className;\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\taddClass(className = ''){\r\n\t\tif(!this.context)return this;\r\n\t\tif(!className)return this;\r\n\t\tthis.context.classList.add(className);\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tremoveClass(className = ''){\r\n\t\tif(!this.context)return this;\r\n\t\tif(!className)return this;\r\n\t\tthis.context.classList.remove(className);\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tvalue(value){\r\n\t\tif(!this.context)return this;\r\n\t\tif(typeof(value) === 'undefined')\r\n\t\t\treturn this.context.value;\r\n\t\tif(value)\r\n\t\t\tthis.context.value = value;\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\taddAttributes(attributes = {}){\r\n\t\tif(!this.context)return this;\r\n\t\tif(typeof(attributes) !== 'object' || Array.isArray(attributes))return this;\r\n\t\tObject.keys(attributes).map(attrName => {\r\n\t\t\tlet attrValue = attributes[attrName];\r\n\t\t\tif(attrValue)\r\n\t\t\t\tthis.context.setAttribute(attrName, attrValue);\r\n\t\t});\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tremoveAttribute(attribute = ''){\r\n\t\tif(!this.context)return this;\r\n\t\tif(!attribute)return this;\r\n\t\tthis.context.removeAttribute(attribute);\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\taddEvents(events = {}){\r\n\t\tif(!this.context)return this;\r\n\t\tObject.keys(events).map(eventName => {\r\n\t\t\tthis.context.addEventListener(eventName, (...args) => {\r\n\t\t\t\tlet callback = events[eventName];\r\n\t\t\t\tif(typeof(callback) === 'function')\r\n\t\t\t\t\tcallback.apply(this, args);\r\n\t\t\t});\r\n\t\t});\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\twrap(htmlString = ''){\r\n\t\tif(!this.context)return this;\r\n\t\tif(!htmlString)return this;\r\n\t\tthis.$wrapper = new this.constructor(htmlString);\r\n\t\tthis.$wrapper.deepElementChild($child => !$child.$wrapper).append(this.context);\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\thtml(htmlString){\r\n\t\tif(!this.context)return this;\r\n\t\tif(typeof(htmlString) === 'undefined')\r\n\t\t\treturn this.context.innerHTML;\r\n\t\tthis.context.innerHTML = htmlString;\r\n\t\treturn this;\r\n\t}\r\n\r\n\tsiblings(){\r\n\t\tif(!this.context)return this;\r\n\t\treturn Array.from(this.context.parentElement.children).filter(el => el !== this.context);\r\n\t}\r\n\t\r\n\tdeepElementChild(childIsValid){\r\n\t\tif(!this.context)return this;\r\n\t\tlet $child = new this.constructor(this.context.firstElementChild);\r\n\t\twhile($child.context && (typeof(childIsValid) === 'function' ? childIsValid($child) : true))\r\n\t\t\treturn $child.deepElementChild(childIsValid);\r\n\t\treturn this.context;\r\n\t}\r\n}\r\n\r\nmodule.exports = argument => new Element(argument);\n\n//# sourceURL=webpack:///./node_modules/jfactory-element/index.js?");

/***/ }),

/***/ "./node_modules/jfactory-expandable/config.js":
/*!****************************************************!*\
  !*** ./node_modules/jfactory-expandable/config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = self => ({});\n\n//# sourceURL=webpack:///./node_modules/jfactory-expandable/config.js?");

/***/ }),

/***/ "./node_modules/jfactory-expandable/defaults.js":
/*!******************************************************!*\
  !*** ./node_modules/jfactory-expandable/defaults.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n\tcontainer: document.body,\r\n\telement: ({...data}) => {},\r\n\tclassList: [],\r\n\tdataFiller: null,\r\n\tonChange: () => {},\r\n\tcontrolAdd: {\r\n\t\ttext: 'Добавить',\r\n\t\tclassName: '',\r\n\t\tclick: null,\r\n\t\tattributes: null,\r\n\t\trenderBefore: null,\r\n\t\trenderAfter: null,\r\n\t\tactionBefore: () => {},\r\n\t\tactionAfter: () => {},\r\n\t\tpreventDefault: false\r\n\t},\r\n\tcontrolRemove: {\r\n\t\ttext: 'Удалить',\r\n\t\tclassName: '',\r\n\t\tclick: null,\r\n\t\tattributes: null,\r\n\t\trenderBefore: null,\r\n\t\trenderAfter: null,\r\n\t\tconfirm: () => true,\r\n\t\tactionBefore: () => {},\r\n\t\tactionAfter: () => {},\r\n\t\tpreventDefault: false\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-expandable/defaults.js?");

/***/ }),

/***/ "./node_modules/jfactory-expandable/elements.js":
/*!******************************************************!*\
  !*** ./node_modules/jfactory-expandable/elements.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(){\r\n\tlet self = this;\r\n\treturn {\r\n\t\twrapper: {\r\n\t\t\tclassList: ['expandable-container'].concat(this.options.classList),\r\n\t\t\tparent: this.options.container,\r\n\t\t\trenderMethod: 'append'\r\n\t\t},\r\n\t\trows: {\r\n\t\t\tclassList: ['expandable__rows'],\r\n\t\t\tparent: 'wrapper',\r\n\t\t\trenderMethod: 'append'\r\n\t\t},\r\n\t\tcontrolAdd: {\r\n\t\t\tclassList: ['expandable__control-add', this.options.controlAdd.className],\r\n\t\t\tcontent: this.options.controlAdd.text,\r\n\t\t\ttagName: 'button',\r\n\t\t\tparent: 'wrapper',\r\n\t\t\trenderMethod: 'append',\r\n\t\t\tattributes: this.options.controlAdd.attributes,\r\n\t\t\trenderBefore: (...args) => {\r\n\t\t\t\tif(typeof(this.options.controlAdd.renderBefore) === 'function')\r\n\t\t\t\t\tthis.options.controlAdd.renderBefore.apply(this, args);\r\n\t\t\t},\r\n\t\t\trenderAfter: (...args) => {\r\n\t\t\t\tif(typeof(this.options.controlAdd.renderAfter) === 'function')\r\n\t\t\t\t\tthis.options.controlAdd.renderAfter.apply(this, args);\r\n\t\t\t},\r\n\t\t\tevents: {\r\n\t\t\t\tclick: e => {\r\n\t\t\t\t\te.preventDefault();\r\n\t\t\t\t\tlet controlAddSettings = this.options.controlAdd, $row;\r\n\t\t\t\t\tcontrolAddSettings.actionBefore.call(this);\r\n\t\t\t\t\tif(!controlAddSettings.preventDefault)\r\n\t\t\t\t\t\t$row = this.add();\r\n\t\t\t\t\tcontrolAddSettings.actionAfter.call(this, $row);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcontrolRemove: () => ({\r\n\t\t\tclassList: ['expandable__control-remove', this.options.controlRemove.className],\r\n\t\t\tcontent: this.options.controlRemove.text,\r\n\t\t\tattributes: this.options.controlRemove.attributes,\r\n\t\t\trenderBefore: (...args) => {\r\n\t\t\t\tif(typeof(this.options.controlRemove.renderBefore) === 'function')\r\n\t\t\t\t\tthis.options.controlRemove.renderBefore.apply(this, args);\r\n\t\t\t},\r\n\t\t\trenderAfter: (...args) => {\r\n\t\t\t\tif(typeof(this.options.controlRemove.renderAfter) === 'function')\r\n\t\t\t\t\tthis.options.controlRemove.renderAfter.apply(this, args);\r\n\t\t\t},\r\n\t\t\ttagName: 'button',\r\n\t\t\tevents: {\r\n\t\t\t\tclick(e){\r\n\t\t\t\t\te.preventDefault();\r\n\t\t\t\t\tlet controlRemoveSettings = self.options.controlRemove,\r\n\t\t\t\t\t\t$element = this.target;\r\n\t\t\t\t\tif(controlRemoveSettings.confirm.call(self, $element)){\r\n\t\t\t\t\t\tcontrolRemoveSettings.actionBefore.call(self, $element);\r\n\t\t\t\t\t\tif(!controlRemoveSettings.preventDefault)\r\n\t\t\t\t\t\t\tself.remove($element);\r\n\t\t\t\t\t\tcontrolRemoveSettings.actionAfter.call(self, $element);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}),\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-expandable/elements.js?");

/***/ }),

/***/ "./node_modules/jfactory-expandable/index.js":
/*!***************************************************!*\
  !*** ./node_modules/jfactory-expandable/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const JFactory = __webpack_require__(/*! jfactory */ \"./node_modules/jfactory/index.js\");\r\n\r\nconst config = __webpack_require__(/*! ./config.js */ \"./node_modules/jfactory-expandable/config.js\");\r\nconst defaults = __webpack_require__(/*! ./defaults.js */ \"./node_modules/jfactory-expandable/defaults.js\");\r\nconst elements = __webpack_require__(/*! ./elements.js */ \"./node_modules/jfactory-expandable/elements.js\");\r\n\r\nmodule.exports = class Expandable extends JFactory.Module {\r\n\tconstructor(options){\r\n\t\tsuper({config, defaults, elements, options});\r\n\t\t\r\n\t\tthis.init();\r\n\t}\r\n\t\r\n\tinit(){\r\n\t\tlet values = this.options.dataFiller || this.defaults.dataFiller;\r\n\t\tif(values)\r\n\t\t\tthis.fill(values);\r\n\t}\r\n\t\r\n\tfill(values){\r\n\t\t//this.createElement('rows');\r\n\t\tvalues.map(data => {\r\n\t\t\tif(data)\r\n\t\t\t\tthis.add(data);\r\n\t\t});\r\n\t\t\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tadd(data){\r\n\t\tlet element = this.options.element.call(this, data),\r\n\t\t\t$element = this.createElement(element, {\r\n\t\t\t\tparent: 'rows',\r\n\t\t\t\twrapper: this.getTemplate('row'),\r\n\t\t\t\trenderMethod: 'append',\r\n\t\t\t}),\r\n\t\t\t$controlRemove = this.createElement('controlRemove', {\r\n\t\t\t\tparent: $element.$wrapper.context,\r\n\t\t\t\trenderMethod: 'append',\r\n\t\t\t});\r\n\t\t$controlRemove.target = $element;\r\n\t\treturn $element;\r\n\t}\r\n\t\r\n\tremove($element){\r\n\t\t$element.$wrapper.context.remove();\r\n\t\treturn $element;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-expandable/index.js?");

/***/ }),

/***/ "./node_modules/jfactory-form/config.js":
/*!**********************************************!*\
  !*** ./node_modules/jfactory-form/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n\tinputMasks: {\r\n\t\tphone: $input => new InputMask($input, {\r\n\t        mask: '__(___)___-__-__',\r\n\t\t\tstartValue: '\\\\+',\r\n\t        check: new RegExp('\\\\+*\\\\d','g'),\r\n\t    }),\r\n\t\tdate: $input => new InputMask($input, {\r\n\t        mask: '__.__.____',\r\n\t        check: new RegExp('\\\\d','g'),\r\n\t    }),\r\n\t\ttime: $input => new InputMask($input, {\r\n\t        mask: '__:__',\r\n\t        check: new RegExp('\\\\d','g'),\r\n\t    })\r\n\t},\r\n\teditMode: false,\r\n\tfields: {\r\n\t\tlist(key, input){\r\n\t\t\tlet options = this.getDynamicProperty(input.options, this),\r\n\t\t\t\tgetOptions = options instanceof Promise ? options : new Promise(s => s(options));\r\n\t\t\treturn getOptions.then(options => {\r\n\t\t\t\toptions[0].selected = true;\r\n\t\t\t\tlet {name, value, placeholder, pattern, required, disabled, readonly} = input;\r\n\t\t\t\tthis.createElement('select', {\r\n\t\t\t\t\tattributes: {name, placeholder, pattern, required, disabled, readonly},\r\n\t\t\t\t\tvalue: value,\r\n\t\t\t\t\tcontent: options\r\n\t\t\t\t\t\t.map((option, index, options) => {\r\n\t\t\t\t\t\t\tlet selected = {};\r\n\t\t\t\t\t\t\tif(value === option.value){\r\n\t\t\t\t\t\t\t\tselected = {selected: true};\r\n\t\t\t\t\t\t\t\tdelete options[0].selected;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn {...option, ...selected};\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t\t.map(option => self.getTemplate('select-option')(option)).join('')\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t},\r\n\t\ttextarea(key, input){\r\n\t\t\treturn this.createElement('textarea', {\r\n\t\t\t\tdata: input\r\n\t\t\t});\r\n\t\t},\r\n\t\thidden(key, input){\r\n\t\t\treturn this.createElement('hiddenInput', {\r\n\t\t\t\tattributes: {\r\n\t\t\t\t\t...{\r\n\t\t\t\t\t\ttype: input.type,\r\n\t\t\t\t\t\tvalue: input.value || '',\r\n\t\t\t\t\t\tname: ''\r\n\t\t\t\t\t},\r\n\t\t\t\t\t...input.key ? {\r\n\t\t\t\t\t\t'data-key': input.key\r\n\t\t\t\t\t} : {}\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t},\r\n\t\tflag(key, input){\r\n\t\t\t//var {classList} = self.elements.input;\r\n\t\t\treturn self.create('input', {\r\n\t\t\t\tdata: {\r\n\t\t\t\t\t...input, \r\n\t\t\t\t\t...{\r\n\t\t\t\t\t\ttype: 'checkbox',\r\n\t\t\t\t\t\tchecked: !!input.value\r\n\t\t\t\t\t},\r\n\t\t\t\t\t...input.label ? {\r\n\t\t\t\t\t\tlabel: self.templates.label({...input, ...{after: self.settings.labelAfter}})\r\n\t\t\t\t\t} : {}\r\n\t\t\t\t},\r\n\t\t\t\t//classList: {...classList, ...input.className ? {spec: [classList.main, input.className].join('-')} : {}},\r\n\t\t\t});\r\n\t\t},\r\n\t\timage(key, input){\r\n\t\t\t//var {classList} = self.elements.input;\r\n\t\t\treturn this.createElement('image', {\r\n\t\t\t\tdata: {\r\n\t\t\t\t\t...input,\r\n\t\t\t\t\t...{src: input.value}\r\n\t\t\t\t},\r\n\t\t\t\t/*classList: {\r\n\t\t\t\t\t...classList, \r\n\t\t\t\t\t...input.className ? {spec: [classList.main, input.className].join('-')} : {}\r\n\t\t\t\t},*/\r\n\t\t\t});\r\n\t\t},\r\n\t\tdefault(key, input){\r\n\t\t\t//var {classList} = self.elements.input;\r\n\t\t\tlet self = this;\r\n\t\t\treturn this.createElement('textInput', {\r\n\t\t\t\t...{\r\n\t\t\t\t\t/*data: {\r\n\t\t\t\t\t\t...input, \r\n\t\t\t\t\t\t...input.label ? {\r\n\t\t\t\t\t\t\tlabel: self.templates.label({...input, ...{after: self.settings.labelAfter}})\r\n\t\t\t\t\t\t} : {}\r\n\t\t\t\t\t},*/\r\n\t\t\t\t\t//classList: {...classList, ...input.className ? {spec: [classList.main, input.className].join('-')} : {}},\r\n\t\t\t\t},\r\n\t\t\t\t...input.mask && typeof(self.config.inputMasks[input.mask]) === 'function' ? {\r\n\t\t\t\t\trenderAfter($input){\r\n\t\t\t\t\t\t$input.mask = self.config.inputMasks[input.mask]($input);\r\n\t\t\t\t\t    $input.placeholder = $input.mask.realMask;\r\n\t\t\t\t\t}\r\n\t\t\t\t} : {}\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/config.js?");

/***/ }),

/***/ "./node_modules/jfactory-form/defaults.js":
/*!************************************************!*\
  !*** ./node_modules/jfactory-form/defaults.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n\tcontainer: document.body,\r\n\tinputs: [],\r\n\ttitle: 'Заполните форму',\r\n\tsubmitText: 'Отправить',\r\n\tsuccessTitle: 'Спасибо!',\r\n\teditModeEditTitle: 'Редактировать',\r\n\teditModeEditSubmitText: 'Сохранить',\r\n\teditModeEditSuccessTitle: 'Изменения сохранены!',\r\n\teditModeDeleteSubmitText: 'Удалить',\r\n\teditModeDeleteSuccessTitle: 'Удалено!',\r\n\thideSubmitButtons: false,\r\n\tonBeforeChange: () => new Promise(s => s()),\r\n\tonInit: null,\r\n\tonChange: () => {},\r\n\trowClassName: ''\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/defaults.js?");

/***/ }),

/***/ "./node_modules/jfactory-form/elements.js":
/*!************************************************!*\
  !*** ./node_modules/jfactory-form/elements.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(){\r\n\tlet self = this;\r\n\treturn {\r\n\t\tcontainer: {\r\n\t\t\t//classList: ['condition-form'].concat(this.options.classList),\r\n\t\t\ttagName: 'form',\r\n\t\t\tparent: this.options.container,\r\n\t\t\tdata: {title: this.options.title},\r\n\t\t\trenderMethod: 'append',\r\n\t\t\tevents: {\r\n\t\t\t\tsubmit: e => {\r\n\t\t\t\t\te.preventDefault();\r\n\t\t\t\t\tif(typeof(this.options.onSubmit) === 'function')\r\n\t\t\t\t\t\tthis.options.onSubmit.call(this, e);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\t\tinputsWrapper: {\r\n\t\t\t//classList: ['condition-form__rows'],\r\n\t\t\tparent: 'container',\r\n\t\t\trenderMethod: 'append'\r\n\t\t},\r\n\t\tsubmitButton: {\r\n\t\t\tparent: 'container',\r\n\t\t\ttagName: 'button',\r\n\t\t\trenderMethod: 'append',\r\n\t\t\t//classList: ['condition-form__submit-wrapper'],\r\n\t\t\tcontent: this.getTemplate('submit-button'),\r\n\t\t\tdata: {text: this.options.submitText},\r\n\t\t\tevents: {\r\n\t\t\t\tclick(e){\r\n\t\t\t\t\te.preventDefault();\r\n\t\t\t\t\tlet event = new Event('submit'), $inputs = $('[name]', self.$container), formIsValid;\r\n\t\t\t\t\tevent.source = e.target;\r\n\t\t\t\t\tif(this.dataset.action === 'delete')\r\n\t\t\t\t\t\treturn self.$container.dispatchEvent(event);\r\n\r\n\t\t\t\t\tformIsValid = !$inputs.filter($input => {\r\n\t\t\t\t\t\t$input.setCustomValidity($input.validity.patternMismatch ? $input.dataset.patternCustomValidity || '' : '');\r\n\t\t\t\t\t\treturn !$input.validity.valid;\r\n\t\t\t\t\t}).length;\r\n\t\t\t\t\tif(formIsValid){\r\n\t\t\t\t\t\t$inputs.map($input => $input.setCustomValidity(''));\r\n\t\t\t\t\t\tself.$container.dispatchEvent(event);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tself.$container.reportValidity();\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t},\r\n\t\t\t}\r\n\t\t},\r\n\t\ttextInput: () => ({\r\n\t\t\ttagName: 'input',\r\n\t\t\tparent: 'inputsWrapper',\r\n\t\t\trenderMethod: 'append',\r\n\t\t\t//classList: {own: 'condition-form__control', main: 'condition-form__input-wrapper'},\t\t\t\r\n\t\t\t//name=\"${name}\" type=\"${type}\" value=\"${value}\" placeholder=\"${placeholder}\" data-key=\"${key}\" pattern=\"${pattern}\" ${required} ${checked} ${disabled} ${readonly}\r\n\t\t\tevents: {\r\n\t\t\t\tchange: e => this.onInputChange.call(this, e),\r\n\t\t\t}\r\n\t\t}),\r\n\t\tfileInput: () => ({\r\n\t\t\tclassList: {main: 'condition-form__image-wrapper'},\r\n\t\t\tcontent: this.getTemplate('image'),\r\n\t\t\trenderMethod: 'append',\r\n\t\t\tevents: {\r\n\t\t\t\tclick: e => {\r\n\t\t\t\t\tdebugger;\r\n\t\t\t\t},\r\n\t\t\t}\r\n\t\t}),\r\n\t\tfileUploadButton: () => ({\r\n\t\t\ttagName: 'button',\r\n\t\t\trenderMethod: 'append',\r\n\t\t\tevents: {\r\n\t\t\t\tclick: e => {\r\n\t\t\t\t\tdebugger;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}),\r\n\t\thiddenInput: () => ({\r\n\t\t\ttagName: 'input',\r\n\t\t\tparent: 'inputsWrapper',\r\n\t\t\trenderMethod: 'append',\r\n\t\t}),\r\n\t\tselectInput: () => ({\r\n\t\t\ttagName: 'select',\r\n\t\t\tparent: 'inputsWrapper',\r\n\t\t\trenderMethod: 'append',\r\n\t\t\tclassList: ['condition-form__control', 'condition-form__select-wrapper'],\r\n\t\t\tevents: {\r\n\t\t\t\tchange: e => this.onInputChange.call(this, e),\r\n\t\t\t},\r\n\t\t\tcontent: this.getTemplate('select')\r\n\t\t}),\r\n\t\ttextareaInput: () => ({\r\n\t\t\ttagName: 'textarea',\r\n\t\t\tparent: 'inputsWrapper',\r\n\t\t\trenderMethod: 'append',\r\n\t\t\t//classList: {own: 'condition-form__control', main: 'condition-form__input-wrapper'},\r\n\t\t\t//content: this.getTemplate('textarea'),\r\n\t\t\tevents: {\r\n\t\t\t\tchange: e => this.onInputChange.call(this, e),\r\n\t\t\t}\r\n\t\t}),\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/elements.js?");

/***/ }),

/***/ "./node_modules/jfactory-form/index.js":
/*!*********************************************!*\
  !*** ./node_modules/jfactory-form/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const JFactory = __webpack_require__(/*! jfactory */ \"./node_modules/jfactory/index.js\");\r\nconst QueryString = __webpack_require__(/*! jfactory-query-string */ \"./node_modules/jfactory-query-string/index.js\");\r\n\r\nconst config = __webpack_require__(/*! ./config.js */ \"./node_modules/jfactory-form/config.js\");\r\nconst defaults = __webpack_require__(/*! ./defaults.js */ \"./node_modules/jfactory-form/defaults.js\");\r\nconst elements = __webpack_require__(/*! ./elements.js */ \"./node_modules/jfactory-form/elements.js\");\r\nconst events = ['init', 'change'];\r\nconst templates = __webpack_require__(\"./node_modules/jfactory-form/templates sync recursive \\\\.ejs$\");\r\n\r\nmodule.exports = class JFactoryForm extends JFactory.Module {\r\n\tconstructor(options){\r\n\t\tsuper({config, defaults, elements, events, options, templates});\r\n\t\t\r\n\t\tthis.init();\r\n\t}\r\n\r\n\tinit(){\r\n\t\tlet self = this;\r\n\r\n\t\tif(!this.options.inputs)return;\r\n\r\n\t\tthis.renderInputs()\r\n\t\t.then(() => {\r\n\t\t\t\r\n\t\t});\r\n\t\t\r\n\t\tif(!this.options.hideSubmitButtons)\r\n\t\t\tthis.createElement('submitButton', {\r\n\t\t\t\tparent: this.$wrapper,\r\n\t\t\t\trenderMethod: 'append',\r\n\t\t\t});\r\n\t}\r\n\r\n\tfill(data){\r\n\t\t\r\n\t}\r\n\r\n\trenderInputs(){\r\n\t\tlet self = this;\r\n\t\t\r\n\t\tlet {inputs} = this.options;\r\n\t\t\r\n\t\treturn Object.keys(inputs).reduce((promise, inputKey) => {\r\n\t\t\treturn promise.then(() => this.renderInput(inputKey));\r\n\t\t}, new Promise(s => s()))\r\n\t\t//.then(() => typeof(callback) === 'function' ? callback() : void(0));\r\n\t}\r\n\r\n\trenderInput(inputKey){\r\n\t\tlet self = this;\r\n\r\n\t\tlet input = this.options.inputs[inputKey],\r\n\t\t\tinputType = this.config.fields[input.type] ? input.type : 'default',\r\n\t\t\t$input;\r\n\r\n\t\t$input = this.getDynamicProperty(this.config.fields[inputType], this, [inputKey, {\r\n\t\t\t...input,\r\n\t\t\t...{\r\n\t\t\t\tvalue: typeof(input.value) !== 'undefined' ? this.getDynamicProperty(input.fillDecorator, this, input.value) : ''\r\n\t\t\t}\r\n\t\t}]);\r\n\r\n\t\tif(input.patternValidity)\r\n\t\t\t$input.context.dataset.patternCustomValidity = input.patternValidity;\r\n\r\n\t\treturn $input;\r\n\t}\r\n\r\n\tserialize(attr){\r\n\t\tlet self = this;\r\n\r\n\t\tlet $includedForms = $('form', this.$wrapper),\r\n\t\t\t$inputs = $(attr ? '['+attr+']' : '[name]', this.$wrapper).filter($input => !$includedForms.filter($form => $form.contains($input)).length);\r\n\t\t\r\n\t\tlet data = QueryString.parse($inputs.map(($el,i) => {\r\n\t\t\tlet key = attr ? $el.getAttribute(attr) : $el.name,\r\n\t\t\t\tvalue = encodeURIComponent($el.value || ($el.type === 'checkbox' || $el.type === 'radio' ? +$el.checked : ''));\r\n\t\t\treturn key ? [key, value].join('=') : null;\r\n\t\t}).filter(v => v).join('&'));\r\n\r\n\t\tObject.keys(data).map(key => {\r\n\t\t\tlet value = data[key],\r\n\t\t\t\trow = this.settings.rows[key];\r\n\t\t\tvalue = row.multiple ? Object.values(value) : value;\r\n\t\t\tif(row.multiple && Array.isArray(value)){\r\n\t\t\t\tdata[key] = typeof(row.serializeDecorator) === 'function' ? row.serializeDecorator.call(this, value, key, data) : value;\r\n\t\t\t} else if(value && !Array.isArray(value) && typeof(value) === 'object'){\r\n\t\t\t\tdata[key] = Object.keys(value).reduce((obj, key) => {\r\n\t\t\t\t\tlet input = {...row.inputs.find(input => input.key === key)}, handler;\r\n\t\t\t\t\tif(Object.keys(input).length)\r\n\t\t\t\t\t\tobj[key] = typeof(input.serializeDecorator) === 'function' ? input.serializeDecorator.call(this, value[key], key, data) : value[key];\r\n\t\t\t\t\treturn obj;\r\n\t\t\t\t}, {});\r\n\t\t\t} else {\r\n\t\t\t\tlet handler = row.inputs[0].serializeDecorator;\r\n\t\t\t\tdata[key] = value && typeof(handler) === 'function' ? handler.call(this, value, key, data) : value;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\treturn data;\r\n\t}\r\n\r\n\tsetConfig(config){\r\n\t\tthis.config = {...this.config, ...config};\r\n\t\t//set config dependecies\r\n\t\tthis.html($('.condition-form__title', this.$wrapper)[0], this.config.editMode ? this.settings.editModeEditTitle : this.settings.title);\r\n\t\tif(!this.settings.hideSubmitButtons){\r\n\t\t\tthis.render(this.$submitButton, this.elements.submitButton);\r\n\t\t\tif(this.config.editMode){\r\n\t\t\t\tthis.create({\r\n\t\t\t\t\t...this.elements.submitButton, \r\n\t\t\t\t\t...{\r\n\t\t\t\t\t\ttext: this.settings.editModeDeleteSubmitText,\r\n\t\t\t\t\t\tattributes: {...this.elements.submitButton.attributes, ...{'data-action': 'delete'}}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tthis.create({\r\n\t\t\t\t\t...this.elements.submitButton, \r\n\t\t\t\t\t...{\r\n\t\t\t\t\t\ttext: this.settings.editModeEditSubmitText,\r\n\t\t\t\t\t\tattributes: {...this.elements.submitButton.attributes, ...{'data-action': 'update'}}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\tthis.render(this.$submitButton, this.elements.submitButton);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/index.js?");

/***/ }),

/***/ "./node_modules/jfactory-form/templates sync recursive \\.ejs$":
/*!**********************************************************!*\
  !*** ./node_modules/jfactory-form/templates sync \.ejs$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./select-option.ejs\": \"./node_modules/jfactory-form/templates/select-option.ejs\",\n\t\"./submit-button.ejs\": \"./node_modules/jfactory-form/templates/submit-button.ejs\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/jfactory-form/templates sync recursive \\\\.ejs$\";\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/templates_sync_\\.ejs$?");

/***/ }),

/***/ "./node_modules/jfactory-form/templates/select-option.ejs":
/*!****************************************************************!*\
  !*** ./node_modules/jfactory-form/templates/select-option.ejs ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow) {\n    rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n        var lines = str.split(\"\\n\");\n        var start = Math.max(lineno - 3, 0);\n        var end = Math.min(lines.length, lineno + 3);\n        var filename = esc(flnm);\n        var context = lines.slice(start, end).map(function(line, i) {\n            var curr = i + start + 1;\n            return (curr == lineno ? \" >> \" : \"    \") + curr + \"| \" + line;\n        }).join(\"\\n\");\n        err.path = filename;\n        err.message = (filename || \"ejs\") + \":\" + lineno + \"\\n\" + context + \"\\n\\n\" + err.message;\n        throw err;\n    };\n    escapeFn = escapeFn || function(markup) {\n        return markup == undefined ? \"\" : String(markup).replace(_MATCH_HTML, encode_char);\n    };\n    var _ENCODE_HTML_RULES = {\n        \"&\": \"&amp;\",\n        \"<\": \"&lt;\",\n        \">\": \"&gt;\",\n        '\"': \"&#34;\",\n        \"'\": \"&#39;\"\n    }, _MATCH_HTML = /[&<>'\"]/g;\n    function encode_char(c) {\n        return _ENCODE_HTML_RULES[c] || c;\n    }\n    var __line = 1, __lines = '<option value=\"<%=value%>\"><%=name%></option>', __filename = \"node_modules\\\\jfactory-form\\\\templates\\\\select-option.ejs\";\n    try {\n        var __output = \"\";\n        function __append(s) {\n            if (s !== undefined && s !== null) __output += s;\n        }\n        with (locals || {}) {\n            __append('<option value=\"');\n            __append(escapeFn(value));\n            __append('\">');\n            __append(escapeFn(name));\n            __append(\"</option>\");\n        }\n        return __output;\n    } catch (e) {\n        rethrow(e, __lines, __filename, __line, escapeFn);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/templates/select-option.ejs?");

/***/ }),

/***/ "./node_modules/jfactory-form/templates/submit-button.ejs":
/*!****************************************************************!*\
  !*** ./node_modules/jfactory-form/templates/submit-button.ejs ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow) {\n    rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n        var lines = str.split(\"\\n\");\n        var start = Math.max(lineno - 3, 0);\n        var end = Math.min(lines.length, lineno + 3);\n        var filename = esc(flnm);\n        var context = lines.slice(start, end).map(function(line, i) {\n            var curr = i + start + 1;\n            return (curr == lineno ? \" >> \" : \"    \") + curr + \"| \" + line;\n        }).join(\"\\n\");\n        err.path = filename;\n        err.message = (filename || \"ejs\") + \":\" + lineno + \"\\n\" + context + \"\\n\\n\" + err.message;\n        throw err;\n    };\n    escapeFn = escapeFn || function(markup) {\n        return markup == undefined ? \"\" : String(markup).replace(_MATCH_HTML, encode_char);\n    };\n    var _ENCODE_HTML_RULES = {\n        \"&\": \"&amp;\",\n        \"<\": \"&lt;\",\n        \">\": \"&gt;\",\n        '\"': \"&#34;\",\n        \"'\": \"&#39;\"\n    }, _MATCH_HTML = /[&<>'\"]/g;\n    function encode_char(c) {\n        return _ENCODE_HTML_RULES[c] || c;\n    }\n    var __line = 1, __lines = \"<button></button>\", __filename = \"node_modules\\\\jfactory-form\\\\templates\\\\submit-button.ejs\";\n    try {\n        var __output = \"\";\n        function __append(s) {\n            if (s !== undefined && s !== null) __output += s;\n        }\n        with (locals || {}) {\n            __append(\"<button></button>\");\n        }\n        return __output;\n    } catch (e) {\n        rethrow(e, __lines, __filename, __line, escapeFn);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-form/templates/submit-button.ejs?");

/***/ }),

/***/ "./node_modules/jfactory-module/index.js":
/*!***********************************************!*\
  !*** ./node_modules/jfactory-module/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst String = __webpack_require__(/*! jfactory-string */ \"./node_modules/jfactory-string/index.js\");\r\nconst Object = __webpack_require__(/*! jfactory-object */ \"./node_modules/jfactory-object/index.js\");\r\nconst $ = __webpack_require__(/*! jfactory-element */ \"./node_modules/jfactory-element/index.js\");\r\n\r\nmodule.exports = class {\r\n\tconstructor({config, defaults, elements, events, options, templates}){\r\n\t\tthis.config = this.getDynamicProperty(config, this) || {};\r\n\t\tthis.defaults = this.getDynamicProperty(defaults, this) || {};\r\n\t\tthis.options = Object.deepAssign(this.defaults, options);\r\n\t\tthis.templates = templates.keys().reduce((obj, key) => {\r\n\t\t\tobj[key] = templates(key);\r\n\t\t\treturn obj;\r\n\t\t}, {});\r\n\t\tthis.events = events.reduce((obj, eventName) => {\r\n\t\t\tlet str = new String(eventName);\r\n\t\t\tobj[`on${str.camelize()}`] = new Event(eventName);\r\n\t\t\treturn obj;\r\n\t\t}, {});\r\n\t\tthis.elements = this.getDynamicProperty(elements, this) || {};\r\n\t\t\r\n\t\tObject.keys(this.elements).map(key => {\r\n\t\t\tlet element = this.elements[key], $element;\r\n\t\t\tif(typeof(element) === 'function')return;\r\n\t\t\t$element = this.createElement(key);\r\n\t\t\tObject.assign(this, $element ? {[`$${key}`]: $element} : {});\r\n\t\t});\r\n\t\t\r\n\t\tthis.$container[this.constructor.name] = this;\r\n\t\t\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\tgetDynamicProperty(property, context, data){\r\n\t\treturn typeof(property) === 'function' ? property.apply(context, Array.isArray(data) ? data : [data]) : property;\r\n\t}\r\n\t\r\n\tgetTemplate(template, objData = {}){\r\n\t\tif(!template)return;\r\n\t\tlet key = ['.', template + '.ejs'].join('/');\r\n\t\treturn this.templates[key](objData);\r\n\t}\r\n\t\r\n\tmapTemplate(template, arrData = []){\r\n\t\treturn arrData.map(data => this.getTemplate(template, data)).join('');\r\n\t}\r\n\r\n\tcreateElement(key, elementData){\r\n\t\tlet elementKey, element, parent, context, $element;\r\n\t\t\r\n\t\telementKey = typeof(key) === 'string' ? key : void(0);\r\n\t\t\r\n\t\telement = Object.deepAssign({\r\n\t\t\ttagName: 'div',\r\n\t\t\tid: '',\r\n\t\t\tclassList: [],\r\n\t\t\tvalue: '',\r\n\t\t\tattributes: {},\r\n\t\t\tparent: '',\r\n\t\t\twrapper: '',\r\n\t\t\tcontent: null,\r\n\t\t\tevents: {},\r\n\t\t\trenderBefore: null,\r\n\t\t\trenderAfter: null,\r\n\t\t\trenderMethod: 'append'\r\n\t\t}, this.getDynamicProperty(this.elements[elementKey], this) || {}, elementData);\r\n\t\t\r\n\t\tparent = typeof(element.parent) === 'string' ? this[`$${element.parent}`].context : element.parent;\r\n\t\t\r\n\t\tcontext = key instanceof Node ? key : element.tagName;\r\n\t\t\t\r\n\t\tif(!(parent instanceof Node))return; \r\n\t\t\r\n\t\t$element = $(context)\r\n\t\t.id(element.id)\r\n\t\t.class(element.classList.join(' '))\r\n\t\t.value(element.value)\r\n\t\t.addAttributes(element.attributes)\r\n\t\t.addEvents(element.events)\r\n\t\t\r\n\t\tif(element.content !== null)\r\n\t\t\t$element.html(element.content);\r\n\t\tif(element.wrapper)\r\n\t\t\t$element.wrap(element.wrapper);\r\n\t\t\r\n\t\tif(typeof(element.renderBefore) === 'function')\r\n\t\t\telement.renderBefore.call(this, $element, element);\r\n\t\tparent[element.renderMethod]($element.$wrapper ? $element.$wrapper.context : $element.context, element.renderReference || '');\r\n\t\tif(typeof(element.renderAfter) === 'function')\r\n\t\t\telement.renderAfter.call(this, $element, element);\r\n\r\n\t\treturn $element;\r\n\t}\r\n\t\r\n\ton(event, callback, options = {}){\r\n\t\tthis.$wrapper.addEventListener(event, callback, options);\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\toff(event, callback, options = {}){\r\n\t\tthis.$wrapper.removeEventListener(event, callback, options);\r\n\t\treturn this;\r\n\t}\r\n\t\r\n\ttrigger(event, data = {}){\r\n\t\tthis.$wrapper.dispatchEvent({...this.events[event], ...data});\r\n\t\treturn this;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-module/index.js?");

/***/ }),

/***/ "./node_modules/jfactory-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/jfactory-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = class extends Object {\r\n\tstatic deepAssign(...args){\r\n\t\treturn args.filter(v => v).reduce((assigned, obj, index, array) => {\r\n\t\t\tif(index === array.length-1){\r\n\t\t\t\tthis.keys(obj).map(key => {\r\n\t\t\t\t\tassigned[key] = typeof(assigned[key]) !== 'undefined' && assigned[key] !== null ? assigned[key] : obj[key];\r\n\t\t\t\t});\r\n\t\t\t\treturn assigned;\r\n\t\t\t}\r\n\t\t\tobj = this.keys(assigned).length ? assigned : obj;\r\n\t\t\tthis.keys(obj).map(key => {\r\n\t\t\t\tlet value = obj[key], \r\n\t\t\t\t\tnextObj = array[index+1],\r\n\t\t\t\t\tnextValue = nextObj && typeof(nextObj[key]) !== 'undefined' && nextObj[key] !== null ? nextObj[key] : value;\r\n\t\t\t\tif(typeof(value) === 'object' && value !== null && !(value instanceof Node) && this.keys(value).length && !Array.isArray(value)){\r\n\t\t\t\t\tassigned[key] = {...value, ...this.deepAssign(value, nextValue)};\r\n\t\t\t\t} else {\r\n\t\t\t\t\tassigned[key] = nextValue;\r\n\t            }\r\n\t\t\t});\r\n\t\t\treturn assigned;\r\n\t\t}, {})\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-object/index.js?");

/***/ }),

/***/ "./node_modules/jfactory-query-string/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/jfactory-query-string/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = class {\r\n\tstatic parse(q){\r\n\t\tvar ret = {};\r\n\t\tvar m = q.split('&').map(function(qpart){\r\n\t\t\tvar props = decodeURIComponent(qpart).split('=').map(function(p,i){return i==0 ? p.split(/(\\[|\\])/g).filter(function(i){return i && i!='[' && i!=']'}) : p});\r\n\t\t\treturn props[0].concat(props[1]);\r\n\t\t});\r\n\t\tvar lim = 0;\r\n\t\tm.map(function(i){lim = i.length > lim ? i.length : lim});\r\n\t\tfor(var i=0;i<lim;i++){\r\n\t\t\tm.map(function(mi){\r\n\t\t\t\tif(mi[i]){\r\n\t\t\t\t\tif(i==0){\r\n\t\t\t\t\t\teval('ret.'+mi[i]+'={}');\r\n\t\t\t\t\t} else if(i<lim){\r\n\t\t\t\t\t\tvar incrEval = [];\r\n\t\t\t\t\t\tfor(var r=0;r<i;r++){\r\n\t\t\t\t\t\t\tincrEval.push(\"+mi[i-\"+(i-r)+\"]+\");\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif(i==lim-1 || i==mi.length-1){\r\n\t\t\t\t\t\t\teval(eval('\"ret[\\'\"'+incrEval.join('\"\\'][\\'\"')+'\"\\']=mi[i]\"'));\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\teval(eval('\"ret[\\'\"'+incrEval.join('\"\\'][\\'\"')+'\"\\'][\\'\"+mi[i]+\"\\']={}\"'));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\t\tconst deleteEmptyValues = (obj) => {\r\n\t\t\tObject.keys(obj).map(key => {\r\n\t\t\t\tif(typeof(obj[key]) === 'object')\r\n\t\t\t\t\tObject.keys(obj[key]).length ? deleteEmptyValues(obj[key]) : obj[key] = '';\r\n\t\t\t\tif(obj[key] === \"NaN\")\r\n\t\t\t\t\tobj[key] = '';\r\n\t\t\t});\r\n\t\t}\r\n\t\tdeleteEmptyValues(ret);\r\n\r\n\t\treturn ret;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-query-string/index.js?");

/***/ }),

/***/ "./node_modules/jfactory-string/index.js":
/*!***********************************************!*\
  !*** ./node_modules/jfactory-string/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = class extends String {\r\n\tcamelize(){\r\n\t\tlet value = this.valueOf();\r\n\t\treturn value.charAt(0).toUpperCase() + value.substring(1, value.length);\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory-string/index.js?");

/***/ }),

/***/ "./node_modules/jfactory/index.js":
/*!****************************************!*\
  !*** ./node_modules/jfactory/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = {\r\n\tModule: __webpack_require__(/*! jfactory-module */ \"./node_modules/jfactory-module/index.js\"),\r\n\tApp: {}\r\n}\n\n//# sourceURL=webpack:///./node_modules/jfactory/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Form = __webpack_require__(/*! jfactory-form */ \"./node_modules/jfactory-form/index.js\");\r\nconst Expandable = __webpack_require__(/*! jfactory-expandable */ \"./node_modules/jfactory-expandable/index.js\");\r\n\r\n//const React = require('react');\r\n//const ReactDOM = require('react-dom');\r\n\r\n\r\n/*var Input = {\r\n\trender(){\r\n\t\treturn React.createElement('input', {value: this.props.value});\r\n\t}\r\n}\r\nReactDOM.render(React.createElement(Input, {value: 'Значение'}), document.body);*/\r\ndebugger;\r\n\r\nlet form = new Form({\r\n\tclassList: ['shedule__create-record-form', 'circle-preloader'],\r\n\ttitle: 'Создать запись',\r\n\tlabelAfter: ':',\r\n\tsubmitText: 'Создать',\r\n\tsuccessTitle: 'Запись создана!',\r\n\teditModeEditTitle: 'Изменить запись',\r\n\teditModeEditSubmitText: 'Сохранить',\r\n\teditModeEditSuccessTitle: 'Запись успешно изменена!',\r\n\teditModeDeleteSubmitText: 'Удалить',\r\n\teditModeDeleteSuccessTitle: 'Запись удалена!',\r\n\tbeforeInit(){\r\n\t\t\r\n\t},\r\n\tinputs: {\r\n\t\tid: {\r\n\t\t\ttype: 'hidden',\r\n\t\t\tserializeDecorator: value => +value,\r\n\t\t\thidden: true\r\n\t\t},\r\n\t\tclient_id: {\r\n\t\t\ttype: 'hidden',\r\n\t\t\tkey: 'client[id]',\r\n\t\t\tserializeDecorator: value => +value,\r\n\t\t\twrapper(){\r\n\t\t\t\treturn this.options.custom.$inputsWrapper\r\n\t\t\t}\r\n\t\t},\r\n\t\tclient_name: {\r\n\t\t\tname: 'Имя клиента',\r\n\t\t\tkey: 'client[name]',\r\n\t\t\ttype: 'text',\r\n\t\t\trequired: true,\r\n\t\t\tclassName: 'disabled',\r\n\t\t\twrapper(){\r\n\t\t\t\treturn this.options.custom.$inputsWrapper\r\n\t\t\t}\r\n\t\t},\r\n\t\tclient_phone: {\r\n\t\t\tname: 'Телефон',\r\n\t\t\tkey: 'client[phone]',\r\n\t\t\ttype: 'tel',\r\n\t\t\tpattern: '^\\\\+\\\\s*\\\\d(\\\\d|\\\\s)*$',\r\n\t\t\tpatternValidity: 'Номер должен начинаться с \"+\", содержать только цифры, без скобок и тире',\r\n\t\t\trequired: true,\r\n\t\t\tclassName: 'disabled',\r\n\t\t\twrapper(){\r\n\t\t\t\treturn this.options.custom.$inputsWrapper\r\n\t\t\t}\r\n\t\t},\r\n\t\tclient_email: {\r\n\t\t\tname: 'Email',\r\n\t\t\tkey: 'client[email]',\r\n\t\t\ttype: 'email',\r\n\t\t\tclassName: 'disabled',\r\n\t\t\twrapper(){\r\n\t\t\t\treturn this.options.custom.$inputsWrapper\r\n\t\t\t}\r\n\t\t},\r\n\t\tstaff_id: {\r\n\t\t\tname: 'Специалист',\r\n\t\t\ttype: 'select',\r\n\t\t\toptions: [{value: 1, name: 'Вася'}, {value: 2, name: 'Петя'}],\r\n\t\t\tvalue: 2,\r\n\t\t\tserializeDecorator: value => +value,\r\n\t\t\tonChange(e){\r\n\t\t\t\tthis.renderInput('services');\r\n\t\t\t}\r\n\t\t},\r\n\t\tservices: {\r\n\t\t\tname: 'Услуги',\r\n\t\t\ttype: 'custom',\r\n\t\t\tcontent(){\r\n\t\t\t\tlet expandable = new Expandable({\r\n\t\t\t\t\telement(data, index){\r\n\t\t\t\t\t\tlet form = new Form({\r\n\t\t\t\t\t\t\tinputs: {\r\n\t\t\t\t\t\t\t\tid: {\r\n\t\t\t\t\t\t\t\t\tname: 'Наименование',\r\n\t\t\t\t\t\t\t\t\ttype: 'select',\r\n\t\t\t\t\t\t\t\t\tkey: `services[${index}][id]`,\r\n\t\t\t\t\t\t\t\t\toptions(){\r\n\t\t\t\t\t\t\t\t\t\treturn new Promise(resolve => {\r\n\t\t\t\t\t\t\t\t\t\t\tresolve([\r\n\t\t\t\t\t\t\t\t\t\t\t\t{value: 'one', name: 'Один'},\r\n\t\t\t\t\t\t\t\t\t\t\t\t{value: 'two', name: 'Два'}\r\n\t\t\t\t\t\t\t\t\t\t\t]);\r\n\t\t\t\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\tclassName: 'service-name',\r\n\t\t\t\t\t\t\t\t\trequired: true,\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\tquantity: {\r\n\t\t\t\t\t\t\t\t\tname: 'Количество',\r\n\t\t\t\t\t\t\t\t\ttype: 'number',\r\n\t\t\t\t\t\t\t\t\tkey: `services[${index}][quantity]`,\r\n\t\t\t\t\t\t\t\t\tvalue: 1,\r\n\t\t\t\t\t\t\t\t\tclassName: 'service-quantity',\r\n\t\t\t\t\t\t\t\t\trequired: true,\r\n\t\t\t\t\t\t\t\t\tdisabled: true\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\treturn form.$wrapper.context;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\treturn expandable.$wrapper.context;\r\n\t\t\t},\r\n\t\t\t//serializeDecorator: data => data.map(service => ({id: +service.id, quantity: +service.quantity}))\r\n\t\t},\r\n\t\t/*date: {\r\n\t\t\tlabel: 'Дата',\r\n\t\t\tinputs: [{\r\n\t\t\t\ttype: 'text',\r\n\t\t\t\t//mask: 'date',\r\n\t\t\t\tfillDecorator: value => new Date(value).toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}),\r\n\t\t\t\tserializeDecorator: value => {\r\n\t\t\t\t\tlet dateArr = value.split('.');\r\n\t\t\t\t\treturn new Date([dateArr[1], dateArr[0], dateArr[2]].join('.')).toDateString();\r\n\t\t\t\t},\r\n\t\t\t\tvalue: new Date().toDateString(),\r\n\t\t\t\tonChange(e){\r\n\t\t\t\t\tthis.renderRow('time');\r\n\t\t\t\t}\r\n\t\t\t}]\r\n\t\t},\r\n\t\ttime: {\r\n\t\t\tlabel: 'Время',\r\n\t\t\tinputs: [{\r\n\t\t\t\ttype: 'select',\r\n\t\t\t\toptions(){\r\n\t\t\t\t\tlet data = this.serialize(),\r\n\t\t\t\t\t\tdate = new Date(data.date),\r\n\t\t\t\t\t\t{dayStart, dayLength, timeStep} = self.settings,\r\n\t\t\t\t\t\ttimeFrom = date.setHours(dayStart.hours, dayStart.minutes, 0, 0),\r\n\t\t\t\t\t\ttimeTo = timeFrom + dayLength,\r\n\t\t\t\t\t\toptions = [];\r\n\r\n\t\t\t\t\tfor(let time = timeFrom; time <= timeTo; time+=timeStep){\r\n\t\t\t\t\t    let date = new Date(time);\r\n\t\t\t\t\t    options.push({value: time, name: date.toLocaleString({}, {hour: '2-digit', minute: '2-digit'})});\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn options;\r\n\t\t\t\t},\r\n\t\t\t\tserializeDecorator: value => +value\r\n\t\t\t}]\r\n\t\t},\r\n\t\tlength: {\r\n\t\t\tlabel: 'Длительность сеанса',\r\n\t\t\tinputs: [{\r\n\t\t\t\ttype: 'select',\r\n\t\t\t\toptions: () => {\r\n\t\t\t\t\tlet {dayLength, timeStep} = this.settings,\r\n\t\t\t\t\t\toptions = [];\r\n\t\t\t\t\tfor(let time = timeStep; time <= dayLength; time+=timeStep){\r\n\t\t\t\t\t    let date = new Date(time),\r\n\t\t\t\t\t    \thours = date.getUTCHours(),\r\n\t\t\t\t\t    \tminutes = date.getUTCMinutes();\r\n\t\t\t\t\t    options.push({value: time, name: [hours ? hours : '0', minutes ? minutes : '00'].filter(v => v).join(':')});\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn options;\r\n\t\t\t\t},\r\n\t\t\t\tserializeDecorator: value => +value,\r\n\t\t\t\tvalue: 3600000\r\n\t\t\t}]\r\n\t\t},\r\n\t\tattendance: {\r\n\t\t\tlabel: 'Статус',\r\n\t\t\tinputs: [{\r\n\t\t\t\ttype: 'select',\r\n\t\t\t\toptions: [\r\n\t\t\t\t\t{value: '0', name: 'Ожидание клиента'},\r\n\t\t\t\t\t{value: '1', name: 'Клиент пришел'},\r\n\t\t\t\t\t{value: '-1', name: 'Клиент не пришел'},\r\n\t\t\t\t\t{value: '2', name: 'Клиент подтвердил'},\r\n\t\t\t\t]\r\n\t\t\t}]\r\n\t\t},\r\n\t\tcomment: {\r\n\t\t\tlabel: 'Комментарий',\r\n\t\t\tinputs: [{\r\n\t\t\t\ttype: 'textarea',\r\n\t\t\t\tplaceholder: 'Пожелания клиента'\r\n\t\t\t}]\r\n\t\t},*/\r\n\t}\r\n});\r\n//debugger;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });