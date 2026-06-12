"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2002, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Parent constructor function
function Animal(name) {
  this.name = name;
}

// Parent method
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

// Child constructor function
function Dog(name, breed) {
  // Inherit properties from Animal
  Animal.call(this, name);

  this.breed = breed;
}

// Inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);

// Reset constructor property
Dog.prototype.constructor = Dog;

// Child-specific method
Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};

// Create an instance
const dog1 = new Dog("Buddy", "Golden Retriever");

dog1.speak(); // Buddy makes a sound.
dog1.bark(); // Buddy barks!

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
