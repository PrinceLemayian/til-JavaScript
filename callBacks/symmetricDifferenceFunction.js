function diffArray(arr1, arr2) {
  let superArr = arr1.concat(arr2);
  const result = superArr.filter(
    (element) => !arr1.includes(element) || !arr2.includes(element)
  );
  return result;
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"])
);
