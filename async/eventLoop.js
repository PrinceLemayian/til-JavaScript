"use strict";

console.log("Test start"); // Runs immediately (synchronous code)

// Schedules a callback to run after at least 0 ms
// The callback is placed in the Callback (Microtask) Queue
setTimeout(() => console.log("0 sec timer"), 0);

// Promise resolves immediately
// Its .then() callback is placed in the microtask queue
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Another immediately resolved promise
// Also placed in the microtask queue
Promise.resolve("Resolved promise 2").then((res) => {
  // Long running synchronous work
  // While this loop runs, the event loop can't do anything else
  for (let i = 0; i < 10000000; i++) {}

  console.log(res);
});

console.log("Test end"); // Runs immediately (still synchronous)
