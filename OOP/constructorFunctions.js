"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Instance methods (not recommended)
  this.calcage = function () {
    console.log(2026 - this.birthYear);
  };
};

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(jonas, matilda, jack);

console.log(jonas instanceof Person);
