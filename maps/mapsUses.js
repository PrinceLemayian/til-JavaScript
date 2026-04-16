"use strict";

// Maps Real Life Use Cases

// 1. DOM Element as a Key
// Tracking UI state per element. Useful for tooltips, event tracking, or storing metadata about specific elements without polluting the DOM

const tooltipMap = new Map();
const btn = document.querySelector("#submit");
tooltipMap.set(btn, { text: "Click to submit", visible: false });

// 2. Boolean key for status messages
// Instead of a conditional, use a boolean expression as a dynamic key:

const currentHour = 11;
const statusMap = new Map([
  [true, "Market is open"],
  [false, "Market is closed"],
]);
const isOpen = currentHour >= 9 && currentHour < 17;
statusMap.get(isOpen); // returns the right message automatically

// 3. Frequency counting / histograms
// Counting how many times each value appears in a dataset — a classic use for Maps

const votes = ["yes", "no", "yes", "yes", "no"];
const tally = new Map();
for (const vote of votes) {
  tally.set(vote, (tally.get(vote) ?? 0) + 1);
}
// Map { 'yes' => 3, 'no' => 2 }

// 4. Caching / memoization by object reference
// Storing computed results keyed by the input object itself — works because Maps support object keys

const cache = new Map();
function expensiveOp(obj) {
  if (cache.has(obj)) return cache.get(obj);
  // const result = /* heavy computation */;
  cache.set(obj, result);
  return result;
}

// 5. Config/lookup tables with non-string keys
// Mapping HTTP status codes (numbers) to messages without coercing everything to strings:

const httpMessages = new Map([
  [200, "OK"],
  [404, "Not Found"],
  [500, "Internal Server Error"],
]);
httpMessages.get(404); // "Not Found"
