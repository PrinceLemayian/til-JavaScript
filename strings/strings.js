"use strict";

const airline = "LAP Air Lemayian";
const plane = "A320";

console.log(plane[1]);
console.log(airline.length);
console.log("B737"[0]);
console.log("B737".length);

// methods
console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("a"));
console.log(airline.indexOf("Lemayian"));
console.log(airline.slice(4));
console.log(airline.slice(4, 8));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(4, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😬");
  } else {
    console.log("You got lucky 😎 ");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Lemayian"));
