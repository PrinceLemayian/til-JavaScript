"use strict";

const movements = [200, 450, 400, 3000, 650, 130, 70, 1300];
const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.every((mov) => mov > 0));
console.log(movement.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movement.some(deposit));
console.log(movement.every(deposit));
console.log(movement.filter(deposit));
