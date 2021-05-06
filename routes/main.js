var router = require("express").Router();

router.get("/", function (req, res) {
  res.render("home");
});

router.get("/postback", function (req, res) {
  res.render("postback");
});

module.exports = router;
