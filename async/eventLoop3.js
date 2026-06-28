"use strict";

console.log("Start"); // Runs immediately (synchronous code).

// Schedules a timer callback.
// It is placed in the Callback (Macrotask) Queue.
setTimeout(() => console.log("Timer"), 0);

// Promise resolves immediately.
// Its .then() callback is placed in the Microtask Queue.
Promise.resolve().then(() => {
  console.log("Promise 1");

  // While Promise 1 is running, it schedules another microtask.
  // This callback is added to the end of the Microtask Queue.
  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
});

console.log("End"); // Runs immediately (still synchronous).
