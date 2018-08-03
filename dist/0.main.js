(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: login, addToDom, addImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDom", function() { return addToDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImg", function() { return addImg; });
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/users.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



const login = (username, password) => {
    const user = _users__WEBPACK_IMPORTED_MODULE_0__["default"][username];

    if (user && user.password === password) {
        return 'User logged in as: ' + user.name;
    }
    return 'Invalid username and/or password';
}

const addToDom = (type, text, className = 'red') => {
    const element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(`<${type}>`, { 
        text,
        class: className 
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(element);
};

const addImg = (src) => {
    const img = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<img>', { src });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(img);
}

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    BaconPancake: {
        password: 'kingkong',
        name: 'Pan Bac'
    },
    HydroThunder: {
        password: 'loser',
        name: 'Scree Sass'
    },
    TwelveYearOld: {
        password: 'battleroyale',
        name: 'Fort Nite'
    },
    ChickenParma: {
        password: 'deliciousaf',
        name: 'Tasty Sandwich'
    }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUEwQixLQUFLLEs7QUFDL0I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLHdFQUE0QixNQUFNO0FBQ2xDO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vycyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlcnNbdXNlcm5hbWVdO1xyXG5cclxuICAgIGlmICh1c2VyICYmIHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuICdVc2VyIGxvZ2dlZCBpbiBhczogJyArIHVzZXIubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiAnSW52YWxpZCB1c2VybmFtZSBhbmQvb3IgcGFzc3dvcmQnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9Eb20gPSAodHlwZSwgdGV4dCwgY2xhc3NOYW1lID0gJ3JlZCcpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSAkKGA8JHt0eXBlfT5gLCB7IFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNyb290JykuYXBwZW5kKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEltZyA9IChzcmMpID0+IHtcclxuICAgIGNvbnN0IGltZyA9ICQoJzxpbWc+JywgeyBzcmMgfSk7XHJcbiAgICAkKCcjcm9vdCcpLmFwcGVuZChpbWcpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgQmFjb25QYW5jYWtlOiB7XHJcbiAgICAgICAgcGFzc3dvcmQ6ICdraW5na29uZycsXHJcbiAgICAgICAgbmFtZTogJ1BhbiBCYWMnXHJcbiAgICB9LFxyXG4gICAgSHlkcm9UaHVuZGVyOiB7XHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsb3NlcicsXHJcbiAgICAgICAgbmFtZTogJ1NjcmVlIFNhc3MnXHJcbiAgICB9LFxyXG4gICAgVHdlbHZlWWVhck9sZDoge1xyXG4gICAgICAgIHBhc3N3b3JkOiAnYmF0dGxlcm95YWxlJyxcclxuICAgICAgICBuYW1lOiAnRm9ydCBOaXRlJ1xyXG4gICAgfSxcclxuICAgIENoaWNrZW5QYXJtYToge1xyXG4gICAgICAgIHBhc3N3b3JkOiAnZGVsaWNpb3VzYWYnLFxyXG4gICAgICAgIG5hbWU6ICdUYXN0eSBTYW5kd2ljaCdcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=