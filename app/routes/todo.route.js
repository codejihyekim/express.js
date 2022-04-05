const express = require('express')
const todoRouter = express.Router()

todoRouter.use(function timeLog(req, res, next) {
    console.log(' ### 스케줄 서버 ### ');
    next();
});

module.exports = todoRouter;