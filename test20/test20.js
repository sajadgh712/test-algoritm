// سوال 22 کتاب الگوریتم
function printSpecialThreeDigitNumbers() {
  for (let number = 100; number <= 999; number++) {
    let digits = number.toString();
    let ones = parseInt(digits[2], 10);
    let hundreds = parseInt(digits[0], 10);
    let tens = parseInt(digits[1], 10);
    if (ones === hundreds && tens % 2 === 0) {
      console.log(number);
    }
  }
}

printSpecialThreeDigitNumbers();
