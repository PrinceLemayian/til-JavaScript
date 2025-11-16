const button = document.getElementById("button");
const input = document.getElementById("input");

input.addEventListener("input", () => {
  console.log(input.value);
});
button.addEventListener("click", () => alert("You clicked the button"));
