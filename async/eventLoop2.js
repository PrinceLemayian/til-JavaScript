"use strict";

console.log("Start"); // Runs immediately (synchronous code).

// Schedule a timer callback.
// It is placed in the Callback (Macrotask) Queue.
setTimeout(() => console.log("Timer 1"), 0);

// Another timer callback.
// Also goes into the Callback Queue.
setTimeout(() => console.log("Timer 2"), 0);

// Promise resolves immediately.
// Its .then() callback is placed in the Microtask Queue.
Promise.resolve().then(() => console.log("Promise 1"));

// Another resolved Promise.
// Its callback is also placed in the Microtask Queue.
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End"); // Runs immediately (still synchronous).
