module.exports = function (req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.render("signin", {
      msg: "You need to sign in"
    });
  };
}