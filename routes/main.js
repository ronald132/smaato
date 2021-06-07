var router = require("express").Router();

router.get("/", function (req, res) {
  res.render("home");
});

router.get("/postback", function (req, res) {
  res.render("postback");
});

router.get("/rich", function (req, res) {
  res.render("rich");
});

router.get("/jstag", function (req, res) {
  res.render("jstag");
});
router.get("/test", function (req, res) {
  res.render("test");
});

module.exports = router;
