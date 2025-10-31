function generatePassword(passLength) {
  let result = [];
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const arr = chars.split("");

  for (let i = 0; i < passLength; i++) {
    let arrs = chars[Math.floor(Math.random() * chars.length)];
    result.push(arrs);
  }

  return result.join("");
}

let password = generatePassword(6);
console.log(`Generated password: ${password}`);
