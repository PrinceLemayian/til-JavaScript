const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element) {
  return element.toUpperCase();
}
