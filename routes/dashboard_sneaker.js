const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");

router.get("/prod-add", (req, res) => {
  res.render("products_add");
});

router.get("/prod-manage", (req, res) => {
  res.render("products_manage");
});

router.post("/prod-add", (req, res) => {
  console.log(req.body);
  Sneaker.create(req.body)
    .then((dbResult) => {
      Sneaker.find({})
        .then((dbResult) => {
          res.render("products_add", {
            sneakers: dbResult,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      // res.redirect("/foods");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;