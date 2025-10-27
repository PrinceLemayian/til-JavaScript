function uniteUnique(...arr) {
  let combinedArray = [].concat(...arr);
  let uniqueArray = [];

  combinedArray.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
}
