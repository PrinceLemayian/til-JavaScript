function sumAll(arr) {
  let sum = 0;
  let maximum = Math.max(...arr);
  let minimum = Math.min(...arr);
  let numArr = [];

  for (let x = Math.max(...arr); x > Math.min(...arr) - 1; x--) {
    numArr.push(x);
  }

  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }

  return sum;
}

console.log(sumAll([5, 10]));
