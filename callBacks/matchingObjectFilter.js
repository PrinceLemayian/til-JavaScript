function whatIsInAName(array, source) {
  const sourceKeys = Object.keys(source);
  const result = [];

  for (let obj of array) {
    let match = true;
    for (let key of sourceKeys) {
      if (obj[key] !== source[key]) {
        match = false;
        break;
      }
    }
    if (match) {
      result.push(obj);
    }
  }

  return result;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
