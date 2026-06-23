"use strict";

const img = document.querySelector("img"); // Line 1 — synchronous
img.src = "photo.jpg"; // Line 2 — ASYNCHRONOUS (loading happens in background)

img.addEventListener("load", () => {
  // Line 3 — registers callback for when load finishes
  img.classList.add("fadeIn");
});

console.log("Image loading..."); // Line 4 — runs IMMEDIATELY, no waiting
