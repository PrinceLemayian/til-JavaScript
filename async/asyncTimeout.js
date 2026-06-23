"use strict";

console.log("First");
setTimeout(() => {
  // timer starts in the back
  console.log("Timer done!"); // runs after 5 seconds
}, 5000);
console.log("Third"); // runs immediately
