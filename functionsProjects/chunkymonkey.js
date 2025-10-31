const chunkArrayInGroups = (array, number) => {
  const result = [];
  for (let i = 0; i < array.length; i += number) {
    result.push(array.slice(i, i + number));
  }
  return result;
};

console.log(
  chunkArrayInGroups(
    [
      "Banana",
      "Apple",
      "Mango",
      "Orange",
      "Pears",
      "Grapes",
      "Pineapple",
      "Watermelon",
      "Lemons",
    ],
    3
  )
);
