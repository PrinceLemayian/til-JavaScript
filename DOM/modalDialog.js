const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
// If you needed to show a dialog while still allowing interaction with content outside of the dialog, you can use the show() method

/* openButton.addEventListener("click", () => {
  dialog.show();
}); */

// To close a modal, you can add a button to the modal inside the dialog element and use the close() method
