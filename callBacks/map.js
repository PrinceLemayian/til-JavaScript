// Example 1

/*
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element) {
  return element.toUpperCase();
}
*/

// Example 2

const dates = ["2024-1-10", "2025-2-0", "2026-4-12"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
