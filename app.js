if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const path = require("path");
let express = require("express");

(session = require("express-session")),
  (cookieParser = require("cookie-parser")),
  (bodyParser = require("body-parser")),
  (router = express.Router()),
  (app = express());

app.set("views".__dirname + "/views");
app.set("view-engine", "ejs");
app.listen(process.env.PORT || 4000, function () {
  console.log("server running on", process.env.PORT || 4000);
});

app.use(cookieParser());
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "build")));

app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);
