const express = require('express')
const adminRouter = express.Router()

adminRouter.use(function timeLog(req, res, next) {
    console.log(' ### 관리자 서버 ### ');
    next();
});

module.exports = adminRouter;