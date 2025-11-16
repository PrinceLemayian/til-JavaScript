// Setting an attribute using setAttribute

const exampleSection = document.getElementById("example-section");
exampleSection.setAttribute("class", "my-class");

console.log(`${exampleSection.outerHTML}`);

// If you have an existing attribute on an HTML element, you can update its value using the setAttribute() method

const ulEl = document.querySelector(".sweet");
ulEl.setAttribute("class", "baking-ingredients");

console.log(`${ulEl.outerHTML}`);

/* 

Real-world examples of using .setAttribute()

If you were building a dynamic image gallery, you might need to update the src attribute of an image element when a user clicks on a thumbnail.

Another example would be if you're dealing with form validation and need to add certain attributes like required or minlength to an input element.

*/
