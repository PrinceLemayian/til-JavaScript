function addTogether() {
  const args = Array.from(arguments);

  function isNumber(num) {
    return typeof num === "number";
  }

  if (args.length === 2) {
    const [a, b] = args;
    if (isNumber(a) && isNumber(b)) {
      return a + b;
    } else {
      return undefined;
    }
  }

  if (args.length === 1) {
    const [a] = args;
    if (!isNumber(a)) {
      return undefined;
    }

    return function (b) {
      if (isNumber(b)) {
        return a + b;
      } else {
        return undefined;
      }
    };
  }
}
