function steamrollArray(arr) {
  const flattened = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flatten(item);
      }
    } else {
      flattened.push(element);
    }
  }

  flatten(arr);
  return flattened;
}
