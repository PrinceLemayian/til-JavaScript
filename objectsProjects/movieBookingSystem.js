"use strict";

const cinema = {
  name: "Nairobi Cinema Hub",
  location: "Westlands, Nairobi",
  genres: ["Action, Comedy", "Drama", "Sci-Fi"],
  snackMenu: ["Popcorn", "Nachos", "Hot Dog", "Candy"],
  mainShows: ["Inception", "The Dark Knight", "Interstellar"],
  showTimes: {
    fri: { first: 14, last: 22 },
    sat: { first: 10, last: 23 },
    sun: { first: 12, last: 20 },
  },

  bookTicket: function (snackIndex, showIndex) {
    return [this.snackMenu[snackIndex], this.mainShows[showIndex]];
  },

  processBooking: function ({
    snackIndex = 0,
    showIndex = 0,
    time = "14:00",
    seats = 1,
    customerName,
  }) {
    console.log(
      `Booking confirmed for ${customerName}! ${seats} seat(s) for ${this.mainShows[showIndex]} at ${time}. Snack: ${this.snackMenu[snackIndex]}.`,
    );
  },
};

// Basic Destructuring

const { name, location: cinemaLocation, genres } = cinema;
console.log(name, cinemaLocation, genres);

// Renaming

const { name: cinemaName, showTimes: schedule } = cinema;
console.log(cinemaName, schedule);

// Default values

const { vipLounge = "Not Available", snackMenu: snacks = [] } = cinema;
console.log(vipLounge, snacks);

// Nested Destructuring

const {
  sat: { first: openingShow, last: closingShow },
} = cinema.showTimes;
console.log(`Saturday shows run from ${openingShow}:00 to ${closingShow}:00`);

// Destructured function parameter (Full booking)

cinema.processBooking({
  customerName: "Lemayian",
  time: "19:30",
  showIndex: 1,
  snackIndex: 0,
  seats: 2,
});

// Destructured function parameter (with defaults kicking in)

cinema.processBooking({
  customerName: "Prince",
  seats: 1,
});

// Mutating variables

let favoriteGenre = "Horror";
let favoriteSnack = "Soda";
({ favoriteGenre = genres[0], favoriteSnack = snacks[0] } = {
  favoriteGenre: genres[2],
  favoriteSnack: snacks[1],
});
console.log(favoriteGenre, favoriteSnack);
