const passport = require("passport");

exports.sessionNew = (req, res, next) => {
  res.render("signin", { error: null });
};

exports.sessionCreate = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.render("signin", { error: info.message });
    } else {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.redirect("/");
        }
      });
    }
  })(req, res, next);
};

exports.sessionDelete = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
