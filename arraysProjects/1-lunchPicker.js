let lunches = [];

const addLunchToEnd = (array1, string1) => {
  array1.push(string1);
  console.log(string1 + " added to the end of the lunch menu.");
  return array1;
};

const addLunchToStart = (array2, string2) => {
  array2.unshift(string2);
  console.log(string2 + " added to the start of the lunch menu.");
  return array2;
};

const removeLastLunch = (array3) => {
  let removed = array3.pop();
  if (array3.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(removed + " removed from the end of the lunch menu.");
  }
  return array3;
};

const removeFirstLunch = (array6) => {
  let shifted = array6.shift();
  if (array6.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(shifted + " removed from the start of the lunch menu.");
  }
  return array6;
};

const getRandomLunch = (array4) => {
  let randomLunch = array4[Math.floor(Math.random() * array4.length)];
  if (array4.length === 0) {
    console.log("No lunches available.");
  } else {
    console.log("Randomly selected lunch: " + randomLunch);
  }
};

const showLunchMenu = (array5) => {
  if (array5.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + array5.join(", "));
  }
};
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));
