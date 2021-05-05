var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var ejs_mate = require("ejs-mate");

var app = express();

app.use(express.static(__dirname + "/public"));
app.engine("ejs", ejs_mate);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("./routes/main"));
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function(){
  console.log("listening port 3000");
});