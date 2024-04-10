// سوال 10 کتاب الگوریتم
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
for (let num = 3; num < 1000; num++) {
  if (isPrime(num)) {
    console.log(num);
  }
}
