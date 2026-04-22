"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Thorfinn Karlsefni");
lufthansa.book(542, "Harvey Specter");
console.log(lufthansa);

const eurowings = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
};

const book = lufthansa.book;

// this does not work
// book(23, 'Clare Underwood');

// Call Method
book.call(eurowings, 23, "Clare Underwood");

book.call(lufthansa, 239, "Barry Allen");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 834, "John Wick");
console.log(swiss);

// Apply method
const flightData = [462, "Dr. No"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, "Clare Underwood");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Billy Baker");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Grace Cahill");
bookEW23("Natalie Kabra");
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));
