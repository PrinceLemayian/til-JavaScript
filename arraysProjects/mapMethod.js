"use strict";

const eurToUsd = 1.1;

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

*/

const movementsUsd = movements.map((mov) => mov * eurToUsd);

const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);

console.log(movementsUsdFor);
console.log(movements);
console.log(movementsUsd);
