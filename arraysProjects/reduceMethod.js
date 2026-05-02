"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, curr, i) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance);

let accBalance = 0;
for (const mov of movements) accBalance += mov;
console.log(accBalance);

const balances = movements.reduce((acc, curr) => acc + curr, 0);

console.log(balances);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0],
);
console.log(max);
