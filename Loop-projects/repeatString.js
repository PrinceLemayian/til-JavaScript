const repeatStringNumTimes = (string, num) => {
  let finalStr = "";
  if (num <= 0) {
    return finalStr;
  } else {
    for (let i = 0; i < num; i++) {
      finalStr += string;
    }
    return finalStr;
  }
};

console.log(repeatStringNumTimes("*", 3));
