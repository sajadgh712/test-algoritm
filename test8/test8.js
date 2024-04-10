// سوال 9 کتاب الگوریتم
for (let i = 10; i < 100; i++) {
  const num = i.toString();
  const reversedNum = num.split("").reverse().join("");
  if (num === reversedNum) {
    console.log(i);
  }
}
