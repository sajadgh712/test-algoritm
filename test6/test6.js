// سوال 7 کتاب الگوریتم
const writeNumberDB3 = (m, n) => {
  for (let i = m; i <= n; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};
writeNumberDB3(10, 100);
