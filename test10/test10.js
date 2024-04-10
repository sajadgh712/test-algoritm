// سوال 11 کتاب الگوریتم
function printDivisorsMultiplesOf4(n) {
  let count = 0;
  let sum = 0;

  console.log(` mazrab${n} `);
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 4 === 0) {
      console.log(i);
      count++;
      sum += i;
    }
  }

  console.log(`tedad ${count}`);
  console.log(`jam ${sum}`);
}

const n = 50;
printDivisorsMultiplesOf4(parseInt(n, 10));
