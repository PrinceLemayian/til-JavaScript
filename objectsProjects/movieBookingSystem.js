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
