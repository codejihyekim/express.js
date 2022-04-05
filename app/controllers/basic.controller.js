const { bmi, calc } = require('../service/basic.service')


exports.getBmi = (req, res) => {
    const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
    console.log(`name: ${name}`)
    console.log(`height: ${height}`)
    console.log(`weight: ${weight}`)
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON 값: ${JSON.stringify(json)}`)
    res.status(200).json(json)
  }

exports.getCalc = (req, res) => {
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
  console.log(`num1: ${num1}`)
  console.log(`opcode: ${opcode}`)
  console.log(`num2: ${num2}`)
  const json = calc(num1, opcode, num2)
  console.log(`계산된 JSON 값: ${JSON.stringify(json)}`)
  res.status(200).json(json)
}
  