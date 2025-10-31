const convertCtoF = (temperature) => {
  let fahrenheit = Number(temperature * (9 / 5) + 32);
  return fahrenheit;
};

console.log(convertCtoF(32));
