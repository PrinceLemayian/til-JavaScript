const isLeapYear = (number) => {
  if (number % 400 === 0) {
    return number + " is a leap year.";
  } else if (number % 100 === 0) {
    return number + " is not a leap year.";
  } else if (number % 4 === 0) {
    return number + " is a leap year.";
  }
};

let year = 1900;
let result = isLeapYear(year);
console.log(result);
