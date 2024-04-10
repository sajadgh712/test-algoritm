// سوال 12 کتاب الگوریتم
function findSecretNumber(num) {
  let low = 1;
  let high = 1000;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let result = guessNumber(mid);
    if (result === 0) {
      console.log("The number is :" + mid);
      return mid; // عدد مورد نظر پیدا شده است
    } else if (result === -1) {
      high = mid - 1; // جستجو در نیمه پایینی
    } else {
      low = mid + 1; // جستجو در نیمه بالایی
    }
  }
  return -1; // در صورتی که عدد پیدا نشود
}

function guessNumber(n) {}

findSecretNumber(22);
