exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 11:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "User_content__wjp3p"
};


/***/ }),

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getUser),
/* harmony export */   "h": () => (/* binding */ validateUser)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient("mongodb+srv://fcdb_sa:fcdb_sa@fcdb-cluster.6xlhjgz.mongodb.net/?retryWrites=true&w=majority");
async function validateUser(request) {
    let response = {
        //request: request,
        id: null,
        username: null,
        email: null,
        phone: null
    };
    try {
        await client.connect();
        let result = await client.db("fcdb").collection("users").findOne(request);
        if (result) {
            response.id = result.id;
            response.username = result.username;
            response.email = result.email;
            response.phone = result.phoneNumber;
        }
    } finally{
        client.close();
    }
    return response;
}
async function getUser(id) {
    let response = {
        //request: request,
        id: null,
        username: null,
        email: null,
        phone: null
    };
    try {
        await client.connect();
        let result = await client.db("fcdb").collection("users").findOne({
            id: id
        });
        response.username = JSON.stringify(result);
        if (result) {
            response.id = result.id;
            response.username = result.username;
            response.email = result.email;
            response.phone = result.phoneNumber;
        }
    } finally{
        client.close();
    }
    return response;
}


/***/ })

};
;