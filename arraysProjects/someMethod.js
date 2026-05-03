"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
console.log(movements.include(-130));

// Condition
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
