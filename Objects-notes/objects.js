// Example 1

/*

const person = {
  name: "Alice",
  age: "30",
  city: "Wonderland",
};

console.log(person["name"]);

*/

const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const {job, city, ...remainingProperties} = person;

console.log(remainingProperties);