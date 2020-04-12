if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
let express = require("express"),
  util = require("util"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  router = express.Router(),
  app = express();
let Instagram = require("passport-instagram");
let InstagramStrategy = Instagram.Strategy;
let passport = require("passport");
let LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//
app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port:3000");
});

//
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

//
console.log(process.env.LINKEDINCLIENTID);
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDINCLIENTID,
      clientSecret: process.env.LINKEDINCLIENTSECRET,
      callbackURL: "http://localhost:3000/callback/",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.INSTACLIENTID,
      clientSecret: process.env.INSTACLIENTSECRET,
      callbackURL:
        "https://fast-tundra-53694.herokuapp.com/auth/instagram/callback",
      scope: ["user_profile", "user_media"],
    },
    (accessToken, refreshToken, profile, done) => {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);
//Instagram login route
app.get(
  "/auth/instagram",
  passport.authenticate("instagram", { scope: ["basic"] })
);
//LinkedIn login route
app.get("/auth/linkedin", passport.authenticate("linkedin"));
// callback method which linkedin will hit after successfull login of user
app.get(
  "/callback/",
  passport.authenticate("linkedin", {
    failureRedirect: "/auth/linkedin",
    successRedirect: "/",
  }),
  (req, res) => {
    console.log(req.session);
    console.log(req.cookies);
    console.log(req.user);
    res.redirect("/");
  }
);
app.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram", {
    successRedirect: "insta/profile",
    failureRedirect: "/auth/instagram",
  }),
  (req, res) => {
    console.log(req.session);
    console.log(req.cookies);
    console.log(req.user);
  }
);
// method to load index.ejs file on base path
app.get("/", function (req, res) {
  res.render("index", { user: req.user });
});
app.get("insta/profile", ensureAuthenticated, (request, response) => {
  const { instagram } = request.user;
  response.render("profile", { user: instagram });
});
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
// Method to logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
