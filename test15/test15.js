// سوال 16 کتاب الگوریتم
const calculatePayment = (markets) => {
  markets.forEach((market) => {
    if (market.monthlySale <= 500000) {
      //   شماره فروشگاه
      console.log("MarketCode:" + market.marketCode);
      //   میزان فروش
      console.log("Sale:" + market.monthlySale);
      // پرداختی
      console.log("Payment:" + market.monthlySale * 0.3);
    } else if (market.monthlySale >= 500000 && market.monthlySale <= 700000) {
      console.log("");
      //   شماره فروشگاه
      console.log("MarketCode:" + market.marketCode);
      //   میزان فروش
      // پرداختی l
      console.log("Payment:" + market.monthlySale * 0.5);
    }
  });
  const maxSale = Math.max(...markets.map((sale) => sale.monthlySale));
  console.log("Max Sale:" + maxSale);
};

const markets = [
  { marketCode: 1, monthlySale: 500000 },
  { marketCode: 2, monthlySale: 600000 },
  { marketCode: 3, monthlySale: 300000 },
];
calculatePayment(markets);
