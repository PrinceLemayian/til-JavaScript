function getIndexToIns(arr, num) {
  const orderedArr = arr.sort((val1, val2) => val1 - val2);
  const indexFinder = (element) => element - num >= 0;
  const index = orderedArr.findIndex(indexFinder);
  if (index >= 0) {
    return index;
  } else {
    return arr.length;
  }
}

console.log(getIndexToIns([3, 10, 5], 11));
