"use strict";

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE -> Immediately Invoked Function Expression

(function () {
  console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();
