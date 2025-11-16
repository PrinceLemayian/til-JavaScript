// To remove a node from the DOM, you can use the removeChild() method.
const sectionEl = document.getElementById("example-section");

// We are using the :last-of-type pseudo-class to select the last paragraph element inside the section element.
const lastParagraph = document.querySelector("#example-section p:last-of-type");

// Now that we have the parent and child nodes, we can remove the last paragraph element from the section element using the removeChild() method:
sectionEl.removeChild(lastParagraph);
