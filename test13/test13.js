// سوال 14 کتاب الگوریتم
function calculateBalance(name, initialBalance, transactions) {
  let balance = initialBalance;

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    if (transaction.type === 1) {
      // واریز
      balance += transaction.amount;
    } else if (transaction.type === 2) {
      // برداشت];
      balance -= transaction.amount;
    }
  }

  console.log(` name: ${name}`);
  console.log(`finalBalance: ${balance}`);
}

const transactions = [
  { type: 1, amount: 100 }, // واریز
  { type: 2, amount: 400 }, // برداشت
  { type: 1, amount: 350 },
  { type: 1, amount: 50 },
];

calculateBalance("sajad", 1000, transactions);
