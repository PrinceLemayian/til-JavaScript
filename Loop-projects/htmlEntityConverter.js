function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (htmlEntities[char]) {
      result += htmlEntities[char];
    } else {
      result += char;
    }
  }

  return result;
}
