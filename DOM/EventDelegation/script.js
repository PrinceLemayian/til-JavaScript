const p = document.querySelector("p");
const span = document.querySelector("span");
p.addEventListener("click", (event) => {
  console.log("P listener: ");
  console.log(event.target);
});
span.addEventListener("click", (event) => {
  console.log("Span listener: ");
  console.log(event.target);
  event.stopPropagation();
});
