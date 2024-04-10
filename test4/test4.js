// سوال 5 کتاب الگوریتم
let salary = 1100000;
for (let n = 0; n < 1; n++) {
  if (salary < 50000) {
    console.log("moaf shodi");
  } else if (salary >= 50000 && salary < 100000) {
    console.log((salary * 10) / 100);
  } else if (salary > 100000) {
    console.log((salary * 15) / 100);
  }
}
