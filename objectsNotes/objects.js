// Example 1

/*

const person = {
  name: "Alice",
  age: "30",
  city: "Wonderland",
};

console.log(person["name"]);

*/

/*

const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const {job, city, ...remainingProperties} = person;

console.log(remainingProperties);

*/

//  Accessing properties from nested objects and arrays

/*

const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

console.log(person.contact.phone.work);

//Bracket Notation
console.log(person["contact"]["phone"]["work"]);

*/
// Accessing from a nested array

const person = {
  name: "Alice",
  age: 30,
  address: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" },
  ],
};

console.log(person.address[1].city);
