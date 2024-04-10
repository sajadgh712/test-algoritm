// سوال 20 کتاب الگوریتم
function printSpecialFourDigitNumbers() {
  for (let number = 1000; number <= 9999; number++) {
    let digits = number.toString();

    let ones = parseInt(digits[3], 10);
    let hundreds = parseInt(digits[1], 10);
    let tens = parseInt(digits[2], 10);
    let thousands = parseInt(digits[0], 10);

    if (
      ones % 2 === 0 &&
      hundreds % 2 === 0 &&
      tens % 2 !== 0 &&
      thousands % 2 !== 0
    ) {
      console.log(number);
    }
  }
}

printSpecialFourDigitNumbers();
