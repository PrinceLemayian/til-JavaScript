function getGrade (score) {
  let grade = "";
  if (score === 100) {
    grade = "A+";
  } else if (score >= 90 && score <=99){
    grade = "A";
  } else if (score >= 80 && score <=89){
    grade = "B";
  } else if (score >= 70 && score <=79){
    grade = "C";
  } else if (score >= 60 && score <=69){
    grade = "D";
  } else if (score >= 0 && score <=59) {
    grade = "F";
  };
  return grade;
}

function getAverage (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length
}

function hasPassingGrade (score) {
  if (getGrade(score) !== "F") {
    return true;
  } else {
    return false;
  }
}


function studentMsg (scoresArr, score) {
  let classAverage = getAverage(scoresArr);
  let personalGrade = getGrade(score);
  if (hasPassingGrade(score)) {
    return `Class average: ${classAverage}. Your grade: ${personalGrade}. You passed the course.`;
  } else if (hasPassingGrade(score) === false) {
    return `Class average: ${classAverage}. Your grade: ${personalGrade}. You failed the course.`;
  }
}

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))


