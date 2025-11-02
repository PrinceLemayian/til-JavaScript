// A callback is a function that is passed as an argument to another function.

hello(wait);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function wait() {
  console.log("Wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}
