const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
console.log(evenNums);
console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}
