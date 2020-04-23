require("dotenv").config();
const mongoose = require("mongoose");
const Sneakers = require("../models/Sneaker");

const sneakers = [{
    name: "Low Heels",
    ref: "ABC123",
    sizes: ["37", "38", "39", "40"],
    description: "Just the right pair of heels, perfect for work.",
    price: 45,
    category: "women",
  },
  {
    name: "High Heels",
    ref: "ACC123",
    sizes: ["37", "38", "39", "40"],
    description: "Just the right pair of heels, perfect for work.",
    price: 41,
    category: "women",
  },
  {
    name: "Men's Converse",
    ref: "DEC345",
    sizes: ["37", "38", "39", "40", "41", "42", "43"],
    description: "Just the right pair of heels, perfect for work.",
    price: 35,
    category: "men",
  },
  {
    name: "Women's Converse",
    ref: "DEC345",
    sizes: ["37", "38", "39", "40"],
    description: "Just the right pair of heels, perfect for work.",
    price: 35,
    category: "women",
  },
  {
    name: "Kids Converse",
    ref: "DEC345",
    sizes: ["20", "21", "22", "23"],
    description: "Just the right pair of heels, perfect for work.",
    price: 35,
    category: "kids",
  },
];

mongoose
  .connect("mongodb://localhost:27017/sneaklove")
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);

    // Seeds
    Sneakers.create(sneakers)
      .then((sneakers) => {
        sneakers.forEach((sneakers) => {
          console.log(sneakers.name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(`Error occured while connecting to the Database ${err}`);
  });