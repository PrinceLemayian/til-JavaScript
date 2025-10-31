function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15
