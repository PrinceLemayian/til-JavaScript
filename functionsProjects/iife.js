(function (name) {
  console.log("Hello, " + name);
})("Lemayian");

const result = (function () {
  const x = 10; // x is scoped here, not global
  const y = 20;
  return x + y;
})();

console.log(result); // 30
// console.log(x); // ❌ ReferenceError
