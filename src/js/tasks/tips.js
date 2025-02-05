// Завершите функцию, которая вычисляет, сколько чаевых вам нужно оставить на основе общей суммы счета и обслуживания.

// Вам необходимо учесть следующие оценки:

// Ужасно: чаевые 0%
// Плохо: чаевые 5%
// Хорошо: чаевые 10%
// Отлично: чаевые 15%
// Отлично: чаевые 20%
// Оценка нечувствительна к регистру (поэтому "отлично" = "ОТЛИЧНО"). Если получена нераспознанная оценка, вам необходимо вернуть:

// "Оценка не распознана" в Javascript
// function calculateTip(amount, rating) {
//     let percent = {
//         tarrible: 0,
//         poor: amount * 5 / 100,
//         good: amount * 10 / 100,
//         great: amount * 15 / 100,
//         excellent: amount * 20 / 100
//     }
//     return Math.ceil(percent[rating.toLowerCase()] ?? 'Rating not recognised');
//   };
//непроходит тест при нуле и результате отлисном от представленных оценок

function calculateTip(amount, rating) {
    const tips = {
          'Excellent': 0.2,
          'Great': 0.15,
          'Good': 0.1,
          'Poor': 0.05,
          'Terrible': 0
      };
      rating = rating.charAt(0).toUpperCase() + rating.slice(1).toLowerCase();
      
      return tips.hasOwnProperty(rating) ? Math.ceil(amount * tips[rating]) : 'Rating not recognised';
  }

  //calculateTip(300, 'Good');
  console.log(calculateTip(300, 'Good'));

  export {calculateTip};
  