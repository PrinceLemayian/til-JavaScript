'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 2384793740237
}

const checkIn - function(flightNum, passenger) {
    flightNum = 'LH898';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 2384793740237) {
        alert('Checked in');
    } else {
        alert('Wrong Passport!');
    }
}


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000)
};

newPassport(jonas);
checkIn(flight, jonas);

