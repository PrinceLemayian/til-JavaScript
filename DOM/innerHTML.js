const container = document.getElementById("container");

container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";

// Creating a new node using the createELement() method
const img = document.createElement("img");
img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
img.alt = "A slice of lasagna on a plate.";
container.appendChild(img);
