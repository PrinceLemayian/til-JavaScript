"use strict";

let count = 0;
const id = setInterval(() => {
  count++;
  console.log(`Tick #${count}`);
  if (count === 5) clearInterval(id);
}, 800);
