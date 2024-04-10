function sumOfDigit(num) {
  let numStr = num.toString();
  let sum = 0;
  for (let digit of numStr) {
    sum += parseInt(digit);
  }
  if (num % sum === 0) {
    console.log("the numbers is divide");
  } else {
    console.log("the numbers not divide");
  }
  return sum;
}

console.log(sumOfDigit(27));
