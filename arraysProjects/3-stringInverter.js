const reverseString = (string) => {
  let split = string.split("").reverse("").join("");
  return split;
};

console.log(reverseString("Lemayian"));
