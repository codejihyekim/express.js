require('dotenv').config();
var cors = require('cors')
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
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
app.post("/api/board/write", (req, res) => {
  const {passengerId, name, teamId, subject} = req.body
  console.log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
  console.log(`passengerId 값: ${passengerId}`)
  console.log(`name 값: ${name}`)
  console.log(`teamId 값: ${teamId}`)
  console.log(`subject 값: ${subject}`)
  res.json(req.body)
})
app.post("/api/basic/bmi", (req, res) => {
  const {name, height, weight} = req.body
  console.log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
  console.log(`name: ${name}`)
  console.log(`height: ${height}`)
  console.log(`weight: ${weight}`)
  const json = computeBMI(name, height, weight)
  console.log(`계산된 JSON 값: ${JSON.stringify(json)}`)
  res.json(json)
})

function computeBMI(name, height, weight){
  let _height = Number(height);
  let _weight = Number(weight);
  let bmi = _weight*10000/Math.pow(_height,2);
  let output = Math.round(bmi*100)/100;
  const result = {name, height, weight}
  if (output < 18.5)
    result.bmi = "저체중";
  if (output >= 18.5 && output < 25)
    result.bmi = "정상";
  if (output >= 25 && output <30)
    result.bmi = "과체중";
  if (output >= 30)
    result.bmi = "경도비만";
  return result
}

app.post("/api/basic/calc", (req, res) => {
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
  console.log(`num1: ${num1}`)
  console.log(`opcode: ${opcode}`)
  console.log(`num2: ${num2}`)
  const json = computeCalc(num1, opcode, num2)
  console.log(`계산된 JSON 값: ${JSON.stringify(json)}`)
  res.json(json)
})

function computeCalc(num1, opcode, num2) {
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  const result = {num1, opcode, num2}
  switch(opcode){
    case "+":
      result.res = _num1 + _num2 
      break;
    case "-":
      result.res = _num1 - _num2
      break;
    case "*":
      result.res = _num1 * _num2
      break;
    case "/":
      result.res = _num1 / _num2
      break;
    case "%":
      result.res = _num1 % _num2
      break;
    }
    return result
  }
  