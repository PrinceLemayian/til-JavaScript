const maskEmail = (email) => {
    let username = email.slice(0, email.indexOf("@"));
    return username
}

console.log(maskEmail("prlemayian@gmail.com") + );

// let email = "prlemayian@gmail.com";

// console.log(email.indexOf("@"));
// console.log(email.slice(0, email.indexOf("@")));
