module.exports = function (req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.render("login", {
      msg: "You need to sign in"
    });
  };
}