"use strict";

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const mercy = new PersonCl("Mercy", 1996);
console.log(mercy);
mercy.calcAge();

console.log(mercy.__proto__ === PersonCl.prototype);
mercy.greet();
