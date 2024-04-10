// سوال  24 کتاب الگوریتم
function countWaysToSplit50Rials() {
  let count = 0; // شمارش تعداد طرق ممکن

  // حلقه برای سکه‌های 20 ریالی
  for (let twentyRials = 1; twentyRials * 20 <= 50; twentyRials++) {
    // حلقه برای سکه‌های 10 ریالی
    for (let tenRials = 1; twentyRials * 20 + tenRials * 10 <= 50; tenRials++) {
      // حلقه برای سکه‌های 5 ریالی
      for (
        let fiveRials = 1;
        twentyRials * 20 + tenRials * 10 + fiveRials * 5 <= 50;
        fiveRials++
      ) {
        if (twentyRials * 20 + tenRials * 10 + fiveRials * 5 === 50) {
          // افزایش شمارش اگر ترکیبی به مجموع 50 ریال رسید
          count++;
          console.log(
            `20 Rial : ${twentyRials}, 10 Rial: ${tenRials}, 5 Rial: ${fiveRials}`
          );
        }
      }
    }
  }

  console.log(` Total count: ${count}`);
}

countWaysToSplit50Rials();
