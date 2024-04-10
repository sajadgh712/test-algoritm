// سوال 8 کتاب الگوریتم
const base3 = (number) => {
  let result = "";
  while (number > 0) {
    result += number % 3;
    number = Math.floor(number / 3);
  }
  return result || "0";
};

let decimalNum = 324;
console.log(`Decimal ${decimalNum} in base 3 is: ${base3(decimalNum)}`);
