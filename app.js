require('dotenv').config();
const cors = require('cors')
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
const APP = './app/routes'
require(`${APP}/board.route`)({url:'/api/board', app})
require(`${APP}/basic.route`)({url:'/api/basic', app})
require(`${APP}/users.route`)({url:'/api/user', app})
//require(`${APP}/game.route`)({url:'/api/game', app})
//require(`${APP}/todo.route`)({url:'/api/todo', app})
//require(`${APP}/admin.route`)({url:'/api/admin', app})
var corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions), (req,res) => {
  res.json({"now": new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions), (req,res) => {
  res.json({"now": new Date().toLocaleString()})
})


