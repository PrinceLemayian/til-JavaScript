// Example 1

let students = ["Trump", "Biden", "Obama", "Bush"];

let [first, second, third, fourth] = students;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Example 2

let boys = ["Latifi", "Stroll", "Mazepin", "Tsunoda"];

let [moja, pili, tatu, nne, tano = "Hadjar"] = boys;

// Example 3

let units = [
  "CompSci",
  "Physics",
  "Discrete",
  "Mathematics",
  "Economics",
  "Gender",
  "Philosophy",
];

let [eins, zwei, drei, vier, ...rest] = units;

console.log(rest);
