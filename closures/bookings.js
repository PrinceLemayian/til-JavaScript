"use strict";

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger(s)`);
  };
};

const booker = secureBooking();

booker(); // 1 passenger(s)
booker(); // 2 passenger(s)
booker(); // 3 passenger(s)

console.dir(booker);
