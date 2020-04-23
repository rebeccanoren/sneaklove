require("dotenv").config();
const mongoose = require("mongoose");
const Sneakers = require("../models/Sneaker");
const Labels = require("../models/Tag");

const tags = [{
    label: "Special occation",
  }, {
    label: "Work",
  },
  {
    label: "Sports",
  },
  {
    label: "Casual",
  }
]

const sneakers = [{
    name: "Low Heels",
    ref: "ABC123",
    sizes: ["37", "38", "39", "40"],
    description: "Just the right pair of heels, perfect for work.",
    price: 45,
    category: "women",
    id_tags: [],
  },
  {
    name: "High Heels",
    ref: "ACC123",
    sizes: ["37", "38", "39", "40"],
    description: "Just the right pair of heels, perfect for work.",
    price: 41,
    category: "women",
    id_tags: [],
  },
  {
    name: "Men's Converse",
    ref: "DEC345",
    sizes: ["37", "38", "39", "40", "41", "42", "43"],
    description: "Just the right pair of heels, perfect for work.",
    price: 35,
    category: "men",
    id_tags: [],
  },
  {
    name: "Women's Converse",
    ref: "DEC345",
    sizes: ["37", "38", "39", "40"],
    description: "Just the right pair of heels, perfect for work.",
    price: 35,
    category: "women",
    id_tags: [],
  },
  {
    name: "Kids Converse",
    ref: "DEC345",
    sizes: ["20", "21", "22", "23"],
    description: "Just the right pair of heels, perfect for work.",
    price: 35,
    category: "kids",
    id_tags: [],
  },
];

// 
mongoose
  .connect("mongodb://localhost:27017/sneaklove")
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);


    // Seeds
    Labels.create(tags).then(result => {
        sneakers.forEach((sneaker, index) => {
          sneaker.id_tags.push(result[Math.floor(Math.random() * result.length)]._id)
        })
        Sneakers.create(sneakers).then(result => {
            console.log("Sucess")
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(`Error occured while connecting to the Database ${err}`);
      });
  })

// Sneakers.create(sneakers)
// .then((sneakers) => {
//   sneakers.forEach((sneakers) => {
//     console.log(sneakers.name);
//   });
// })


// mongoose
//   .connect("mongodb://localhost:27017/sneaklove")
//   .then((self) => {
//     console.log(`Connected to ${self.connection.name}`);

//     // Seeds
//     Labels.create(tags)
//       .then((tags) => {
//         tags.forEach((tags) => {
//           console.log(tags.label);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(`Error occured while connecting to the Database ${err}`);
//   });