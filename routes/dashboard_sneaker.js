const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const requireAuth = require("../middlewares/requireAuth");
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");

router.get("/prod-add", requireAuth, (req, res) => {
  res.render("products_add");
});

router.post("/add-tag-form", (req, res) => {
  Tag.create(req.body)
    .then((dbResult) => {
      Tag.find({})
        .then((dbResult) => {
          res.render("products_add", {
            tag: dbResult,
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

router.post("/prod-add", (req, res, next) => {
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

router.get("/prod-manage", requireAuth, (req, res) => {
  Sneaker.find({})
    .then(sneakers => {
      Tag.find()
        .then(tags => {
          res.render("products_manage", {
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

router.get("/prod-manage/delete/:id", requireAuth, (req, res, next) => {
  Sneaker.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/prod-manage"))
    .catch((err) => {
      console.log(err);
    });
});

router.get('/product-edit/:id', requireAuth, (req, res, next) => {
  Sneaker
    .findById(req.params.id)
    .then(sneaker => {
      res.render("product_edit", {
        sneaker: sneaker
      });
    })
    .catch(next);
})

router.post('/product-edit/:id', (req, res, next) => {
  const {
    name,
    ref,
    sizes,
    description,
    price,
    category,
    image,
    id_tags
  } = req.body
  Sneaker
    .findByIdAndUpdate(req.params.id, {
      name,
      ref,
      sizes,
      description,
      price,
      category,
      image,
      id_tags
    })
    .then(() => res.redirect("/prod-manage"))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;