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

// More string methods

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("thorfinn".toUpperCase());

// Fix capitalization in Name:

const capitalizeName = function (passengerName) {
  const passengerLower = passengerName.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

console.log(capitalizeName("LEmaYiAn"));

// Comparing Email
// const email = "hello@lemayian.dev";
// const loginEmail = " Hello@Lemayian.Dev \n ";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

const compareEmails = function (email1, email2) {
  const normalizedEmail = email2.toLowerCase().trim();
  return email1 === normalizedEmail;
};

console.log(compareEmails("hello@lemayian.dev", "   HeLLo@LemAYiAn.DeV  "));

// Replacing

const priceZA = "397,23£";
const priceUS = priceZA.replace("£", "$").replace(",", ".");

console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23, Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

// Using regular expressions
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane1 = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
