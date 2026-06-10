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

  get age() {
    return 2026 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log("Hey there 👋🏾");
    console.log(this);
  }
}

const mercy = new PersonCl("Mercy Kibz", 1996);
console.log(mercy);
mercy.calcAge();
console.log(mercy.age);

console.log(mercy.__proto__ === PersonCl.prototype);
mercy.greet();

const thorfinn = new PersonCl("Thorfinn Karlsefni", 1987);

PersonCl.hey();
