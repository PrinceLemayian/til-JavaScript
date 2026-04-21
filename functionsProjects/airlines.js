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

book.call(eurowings, 23, "Clare Underwood");
console.log(eurowings);

book.call(lufthansa, 239, "Barry Allen");
console.log(lufthansa);
