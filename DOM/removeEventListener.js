const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);

/* When the paragraph is hovered over,
the event listener for the button click event is removed,
and the background color will no longer change when the button is clicked
 */

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});
/* 
Real world examples of when to use the removeEventListener() method include:
 - removing event listeners when a modal is closed in a web application
 - when a user logs out of an application 
*/
