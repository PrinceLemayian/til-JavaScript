const btn = document.getElementById("btn");
const input = document.getElementById("input");

input.addEventListener("input", () => {
  console.log(input.value);
});
btn.addEventListener("click", () => alert("You clicked the button"));
