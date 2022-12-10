"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getUser": () => (/* binding */ getUser),
  "validateUser": () => (/* binding */ validateUser)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/fcdb.ts

const client = new external_mongodb_namespaceObject.MongoClient("mongodb+srv://fcdb_sa:fcdb_sa@fcdb-cluster.6xlhjgz.mongodb.net/?retryWrites=true&w=majority");
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

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(861));
module.exports = __webpack_exports__;

})();