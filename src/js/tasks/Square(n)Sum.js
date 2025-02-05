// выполнить функцию square sum таким образом, 
// чтобы она возводила в квадрат каждое переданное ей число, 
// а затем суммировала результаты вместе.
//For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

function squareSum(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] ** 2;
    }
    
    return sum;
  }

  console.log(squareSum([1, 2, 3]));
  export {squareSum};
  