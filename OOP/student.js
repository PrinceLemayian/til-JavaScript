"use strict";

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

class Student extends Person {
  // Public field
  university = "Dedan Kimathi University";
  // Private fields
  #studyHours = 0;
  #course;
  // Static public field
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);

    this.startYear = startYear;

    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }

  #makeCoffee() {
    return `Here is a coffee for you`;
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student("Michael", 2001, 2020, "Medicine");
