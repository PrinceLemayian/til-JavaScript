let timeoutID = setTimeout(() => {
  console.log("This will run if not cancelled");
}, 5000);

document.querySelector("#cancelButton").addEventListener("click", () => {
  clearTimeout(timeoutID);
  console.log("Timeout cancelled!");
});
