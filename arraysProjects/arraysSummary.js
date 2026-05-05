"use strict";

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 58 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 45 },
  { name: "Eve", score: 72 },
];

// 1. forEach → display all students
console.log("All Students:");
students.forEach((student) => {
  console.log(`${student.name}: ${student.score}`);
});

// 2. map → create array of student names
const studentNames = students.map((student) => student.name);
console.log("\nStudent Names:", studentNames);

// 3. filter → get students who passed (>= 60)
const passedStudents = students.filter((student) => student.score >= 60);
console.log("\nPassed Students:", passedStudents);

// 4. reduce → calculate average score
const averageScore =
  students.reduce((total, student) => {
    return total + student.score;
  }, 0) / students.length;

console.log("\nAverage Score:", averageScore);

// 5. find → find first student who failed
const failedStudent = students.find((student) => student.score < 60);
console.log("\nFirst Failed Student:", failedStudent);

// 6. sort → sort students by score (highest to lowest)
const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log("\nSorted Students (High → Low):", sortedStudents);

// 7. some → check if any student scored above 90
const hasTopper = students.some((student) => student.score > 90);
console.log("\nAny Topper (>90)?", hasTopper);

// 8. every → check if all students passed
const allPassed = students.every((student) => student.score >= 60);
console.log("\nDid Everyone Pass?", allPassed);
