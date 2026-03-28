const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
// Avoid the loose equality operator as much as possible

if (age == 18) console.log('You just became an adult :D (loose)')

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite)
console.log(typeof favourite)

if (favourite === 2) {
    console.log("cool! 2 IS An amazing number!")
} else if(favourite === 7) {
    console.log("7 is a cool number")
} else {
    console.log('Number is not 2 or 7')
}

// \ !== -> strict operator
// \ != -> loose operator

if (favourite !== 2) console.log('Why not 23?');