function frankenSplice(arr1, arr2, index) {
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (i == index) {
      result.push(...arr1);
    }
    result.push(arr2[i]);
  }
  if (index == arr2.length) {
    result.push(...arr1);
  }
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
