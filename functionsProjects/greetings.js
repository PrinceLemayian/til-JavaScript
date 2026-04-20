"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
const greeterYo = greet1("Yo");
greeterHey("Thorfinn");
greeterHey("Steven");
greeterYo("Frank");

greet("Hello")("Underwood");
