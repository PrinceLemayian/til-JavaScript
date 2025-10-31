/* First way to do it

import { add, subtract, PI } from "./math.js";

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(PI);

*/

// How to import everything a module exports

import * as Math from "./math.js";

console.log(Math.add(5, 3)); // All exports are imported as properties of an object called Math
console.log(Math.subtract(10, 4));
console.log(Math.PI);
