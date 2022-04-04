/** 
var express = require('express');

var router = express.Router();

GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
module.exports = function(app){
  app.use((req, res, next) => {
    res.header(

    )
  });
  // next();
  app.get("", (req, res) => {})
  app.post("/api/board/write", (req, res) => {})
  app.update("", () => {})
  app.delete("", () => {})
};
