const express = require("express");
const router = express.Router();
const Sneakers = require("../models/Sneaker");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/collection", (req, res) => {
  Sneakers.find({})
    .then((dbResult) => {
      res.render("products", {
        sneakers: dbResult,
        css: ["products.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/sneakers/men", (req, res) => {
  Sneakers.find({
      category: "men"
    })
    .then((dbResult) => {
      res.render("products", {
        sneakers: dbResult,
        css: ["products.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/sneakers/women", (req, res) => {
  Sneakers.find({
      category: "women"
    })
    .then((dbResult) => {
      res.render("products", {
        sneakers: dbResult,
        css: ["products.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/sneakers/kids", (req, res) => {
  Sneakers.find({
      category: "kids"
    })
    .then((dbResult) => {
      res.render("products", {
        sneakers: dbResult,
        css: ["products.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


router.get("/sneakers/kids", (req, res) => {
  res.render("products");
});

router.get("/one-product/:id", (req, res) => {
  res.send("one_product");
});


router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});


module.exports = router;