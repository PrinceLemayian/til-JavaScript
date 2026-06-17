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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2026 - this.birthYear} years old.`);
  }
}

const mercy = new StudentCl("Mercy Kibs", 2006, "Computer Science");
mercy.introduce();
mercy.calcAge();
