const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/collection", (req, res) => {
  res.render("products");
});

router.get("/sneakers/men", (req, res) => {
  res.render("products");
});

router.get("/sneakers/women", (req, res) => {
  res.render("products");
});

router.get("/sneakers/kids", (req, res) => {
  res.render("products");
});

// router.get("/one-product/:id", (req, res) => {
//   res.send("baz");
// });


router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});


module.exports = router;