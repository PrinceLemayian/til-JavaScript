"use strict";

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
};

const newMenu = [...restaurant.mainMenu, "Githeri"];
console.log(newMenu);

// copy array

const mainMenuCopy = { ...restaurant.mainMenu };
console.log(mainMenuCopy);

// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables - arrays, strings, maps, sets but not objects

const str = "Lemayian";
const letters = [...str, " ", "P."];
console.log(letters);

const ingredients = [
  //  prompt("Let\'s make pasta! Ingredient 1?"),
  // prompt("Let\'s make pasta! Ingredient 2?"),
  // prompt("Let\'s make pasta! Ingredient 3?"),
];
console.log(ingredients);

// without spread
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// with spread
restaurant.orderPasta(...ingredients);

// objects

const newRestaurant = { foundedIn: 1976, ...restaurant, founder: "Sainz" };
console.log(newRestaurant);
