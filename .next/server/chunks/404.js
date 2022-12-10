exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 917:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "General_main__ZixhZ",
	"content": "General_content__SyPkF",
	"footer": "General_footer__hJmnN",
	"home": "General_home__T6Qgt",
	"transform": "General_transform__9Y_qE",
	"login": "General_login__7fYjo",
	"signUp": "General_signUp__KpHbo"
};


/***/ }),

/***/ 235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_General_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
/* harmony import */ var _styles_General_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_General_module_css__WEBPACK_IMPORTED_MODULE_1__);


function LoginMenu(props) {
    const handleLogin = (_)=>{
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        if (username?.checkValidity() && password?.checkValidity()) {
            props.requestLogin(username?.value, password?.value);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_General_module_css__WEBPACK_IMPORTED_MODULE_1___default().content) + " " + (_styles_General_module_css__WEBPACK_IMPORTED_MODULE_1___default().login),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "FitCheck."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "username",
                type: "text",
                placeholder: "username.",
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "password",
                type: "password",
                placeholder: "password.",
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                id: "loginBtn",
                onClick: handleLogin,
                children: "Login."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                id: "signUpBtn",
                children: "SignUp. "
            })
        ]
    });
}


/***/ })

};
;