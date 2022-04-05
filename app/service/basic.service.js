exports.bmi = (payload) => {
    const {name, height, weight} = payload
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

  exports.calc = (num1, opcode, num2) => {
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
    