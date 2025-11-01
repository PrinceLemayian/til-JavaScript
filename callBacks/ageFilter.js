const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);
