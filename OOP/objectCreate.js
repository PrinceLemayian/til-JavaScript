"use strict";

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const mercy = Object.create(PersonProto);
console.log(mercy);
mercy.name = "Mercy";
mercy.birthYear = 2006;
mercy.calcAge();

console.log(mercy.__proto__ === PersonProto);
frank.init("Sarah", 1979);
frank.calcAge();
