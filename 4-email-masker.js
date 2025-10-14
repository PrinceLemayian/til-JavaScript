const maskEmail = (email) => {
  let atIndex = email.indexOf("@", 0);
  let userName = email.slice(0, atIndex);
  let domain = email.slice(atIndex + 1);
  let maskUser = userName.replace(
    userName.slice(1, -1),
    "*".repeat(userName.length - 2)
  );
  return maskUser + "@" + domain;
};

let email = "riamet.lemayian25@students.dkut.ac.ke";
console.log(maskEmail(email));
