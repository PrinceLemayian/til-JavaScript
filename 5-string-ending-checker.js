function confirmEnding(string1, string2) {
  let end = string1.slice(-string2.length);

  return end === string2;
}

console.log(confirmEnding("codecamp", "camprock"));
