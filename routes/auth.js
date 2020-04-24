const express = require("express");
const router = new express.Router();
const User = require("../models/User");
// const requireAuth = require("../middlewares/requireAuth");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

/* GET home page */
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    password
  } = req.body;

  if (firstname === "" || lastname === "" || email === "" || password === "") {
    req.flash("error", "Invalid credentials....");
    res.redirect("/signup");
  }

  User.findOne({
      "email": email
    })
    .then(user => {
      if (user !== null) {
        req.session.msg = {
          status: 404,
          text: "The username already exists!",
        }
        console.log(req.session.msg)
        res.redirect("/signup");

      } else {
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = {
          firstname,
          lastname,
          email,
          password: hashPass,
        };
        User.create(newUser)
          .then((createdUser) => {
            // User created !
            res.redirect("/signin"); // Redirect to signin !
          })
          .catch(error => {
            console.log(error);
          })
      }
    })
    .catch(error => {
      next(error);
    })
})

router.post("/signin", (req, res) => {
  const {
    email,
    password
  } = req.body;
  // Check if user already exists with email.
  User.findOne({
      email: email
    })
    .then((foundUser) => {
      // If a user is not found, redirect to get("/signin") with an error message.
      if (!foundUser) {
        req.session.msg = {
          status: 404,
          text: "No user found!",
        }
        res.redirect("signin");
      } else {
        // If we're here, it means a user was found, we compare the password
        // coming from the form with the password of the foundUser.
        if (bcrypt.compareSync(password, foundUser.password)) {
          req.session.currentUser = foundUser; // <== This is what allows us to have our user logged in !
          res.redirect("/"); // Redirect to home
          // Matching passwords...
          // Login user...
        } else {
          // If the password didn't match, redirect to signin with an error message.
          req.session.msg = {
            status: 404,
            text: "Wrong password",
          }
          res.redirect("signin");
        }
      }
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.get("/logout", (req, res) => {
  // Destroys the session.
  // Makes the user logged out.
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;