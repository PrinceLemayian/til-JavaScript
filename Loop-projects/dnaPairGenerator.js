function pairElement(str) {
  const strCaps = str.toUpperCase();
  let strArr = strCaps.split("");
  let pair = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "A") {
      pair.push([strArr[i], "T"]);
    }
    if (strArr[i] === "C") {
      pair.push([strArr[i], "G"]);
    }
    if (strArr[i] === "G") {
      pair.push([strArr[i], "C"]);
    }
    if (strArr[i] === "T") {
      pair.push([strArr[i], "A"]);
    }
  }
  return pair;
}

console.log(pairElement("TTGAG"));
