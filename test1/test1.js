//سوال 1 کتاب الگوریتم
const numbers = [6, 3, 2, 1];
let r = 0;
for (let item of numbers) {
  if (numbers[2] + numbers[3] < numbers[0]) {
    console.log((r = numbers[0] * numbers[3]));
  } else {
    console.log((r = numbers[1] * numbers[3]));
  }
}
