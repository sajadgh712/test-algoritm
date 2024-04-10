//  سوال 19 کتاب الگوریتم
const analyzeDigits = (number) => {
  const digits = number.toString();
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i], 10);
    if (digit === 0) {
      zeroCount++;
    } else if (digit % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log(`Even: ${evenCount} Odd: ${oddCount} Zero: ${zeroCount}`);
};
analyzeDigits(650213450);
