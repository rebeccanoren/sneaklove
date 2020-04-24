const express = require("express");
const router = express.Router();
const Sneakers = require("../models/Sneaker");
const Tag = require("../models/Tag");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/collection", (req, res) => {
  Sneakers.find({})
    .then(sneakers => {
      Tag.find()
        .then(tags => {
          res.render("products", {
            sneakers,
            tags
          })
        }).catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    });
});

router.get("/sneakers/men", (req, res) => {
  Sneakers.find({
      category: "men"
    })
    .then(sneakers => {
      Tag.find()
        .then(tags => {
          res.render("products", {
            sneakers,
            tags
          })
        }).catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    });
});

router.get("/sneakers/women", (req, res) => {
  Sneakers.find({
      category: "women"
    })
    .then(sneakers => {
      Tag.find()
        .then(tags => {
          res.render("products", {
            sneakers,
            tags
          })
        }).catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    });
});

router.get("/sneakers/kids", (req, res) => {
  Sneakers.find({
      category: "kids"
    })
    .then(sneakers => {
      Tag.find()
        .then(tags => {
          res.render("products", {
            sneakers,
            tags
          })
        }).catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    });
});

router.get("/one-product/:id", (req, res) => {
  Sneakers.findById(req.params.id)
    .then((dbResult) => {
      res.render("one_product", {
        sneaker: dbResult,
      })
    }).catch((err) => {
      console.log(err);
    });
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

// router.get("/signup", (req, res) => {
//   res.render("signup");
// });


module.exports = router;