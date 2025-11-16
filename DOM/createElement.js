const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

// The new list item created is empty, to add content, we use the textContent property
listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
