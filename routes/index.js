const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const { ensureAuthenticated } = require("../config/security.config");
const router = require("express").Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

router.get("/protected", ensureAuthenticated, (req, res) => {
  res.render("protected");
});

router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

module.exports = router;
