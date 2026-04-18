"use strict";

console.log("\n--- Maps: Fundamentals ---");

// Create an empty map, populate with .set()
const cityMap = new Map();
cityMap.set("name", "Nairobi");
cityMap.set(1, "Capital City");
cityMap.set(true, "Is a major tech hub");
cityMap.set(false, "Is not a small town");

// .set() returns the map — enables chaining
cityMap
  .set("country", "Kenya")
  .set("population", 4_700_000)
  .set("timezone", "EAT (UTC+3)");

// .get() — key type must match exactly
console.log(cityMap.get("name")); // "Nairobi"
console.log(cityMap.get(true)); // "Is a major tech hub"
console.log(cityMap.get("true")); // undefined — wrong type!
console.log(cityMap.get(1)); // "Capital City"

// Boolean key trick — use expression as key
const hour = 14;
const techHubHours = new Map([
  [true, "Tech events happening!"],
  [false, "No events right now"],
]);
console.log(techHubHours.get(hour >= 9 && hour < 20)); // dynamic boolean lookup

// .has(), .delete(), .size
console.log(cityMap.has("country")); // true
cityMap.delete("timezone");
console.log(cityMap.size); // 5

// Object/array keys — MUST use same reference
const coordKey = [1.2921, 36.8219]; // Nairobi coordinates
cityMap.set(coordKey, "Nairobi coordinates");
console.log(cityMap.get(coordKey)); // "Nairobi coordinates" ✅
console.log(cityMap.get([1.2921, 36.8219])); // undefined ❌ — different object in memory

console.log("\n--- Maps: Iteration & Conversion ---");

// Constructor syntax — preferred for static data
const quiz = new Map([
  ["question", "What country is Nairobi in?"],
  [1, "Tanzania"],
  [2, "Kenya"],
  [3, "Uganda"],
  ["correct", 2],
  [true, "Correct! 🎉"],
  [false, "Try again!"],
]);

// Iterate — yields [key, value] pairs, destructure directly
console.log("Quiz options:");
for (const [key, value] of quiz) {
  if (typeof key === "number") console.log(`  ${key}: ${value}`);
}

// Boolean key pattern for feedback
const userAnswer = 2; // simulating user input
const isCorrect = quiz.get("correct") === userAnswer;
console.log(quiz.get(isCorrect)); // "Correct! 🎉"

// Convert map → array
console.log([...quiz]); // array of [key, value] pairs
console.log([...quiz.keys()]); // all keys
console.log([...quiz.values()]); // all values

// Filter map entries using array methods (spread first)
const numberEntries = [...quiz].filter(([key]) => typeof key === "number");
console.log(numberEntries);
// [[1, 'Tanzania'], [2, 'Kenya'], [3, 'Uganda']]
