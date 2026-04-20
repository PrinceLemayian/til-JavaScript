"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
  },
};

lufthansa.book(239, "Thorfinn Karlsefni");
lufthansa.book(542, "Harvey Specter");
