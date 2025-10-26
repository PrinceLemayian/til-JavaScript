function bouncer(arr) {
  let results = [];
  let nonBool = [];
  for (let element of arr) {
    results.push(Boolean(element));
  }
  for (let i = 0; i < arr.length; i++) {
    if (results[i]) {
      nonBool.push(arr[i]);
    }
  }
  return nonBool;
}

console.log(bouncer([7, "ate", "", false, 9]));
