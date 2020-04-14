if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const {
  IgApiClient,
  IgLoginTwoFactorRequiredError,
} = require("instagram-private-api");
const ig = new IgApiClient();
var Promise = require("bluebird");
let express = require("express"),
  util = require("util"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  router = express.Router(),
  app = express();

let passport = require("passport");
let cors = require("cors");
var path = require("path");
let LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
app.set("views".__dirname + "/views");
app.set("view-engine", "ejs");
app.listen(process.env.PORT || 4000, function () {
  console.log("server running on port:4000");
});

app.options("*", cors());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "build")));

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

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDINCLIENTID,
      clientSecret: process.env.LINKEDINCLIENTSECRET,
      callbackURL: "https://mysterious-reaches-98129.herokuapp.com/callback/",
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

//LinkedIn login route
app.get("/linkedin", passport.authenticate("linkedin"));
// callback method which linkedin will hit after successfull login of user
app.get(
  "/callback/",
  passport.authenticate("linkedin", {
    failureRedirect: "/",
    successRedirect: "/linkedin/profile",
  }),
  (req, res) => {}
);
app.get("/linkedin/profile", function (req, res) {
  console.log(req.user);
  res.render("index", {
    user: req.user,
    session: req.session.id,
  });
});
// method to load index.ejs file on base path
app.get("/", function (req, res) {
  res.send("<h1>Welcome</h1>");
});
app.get("/", function (req, res) {
  res.send("<h1>Welcome</h1>");
});
app.get("/insta/getCode", (req, res) => {
  if (req.query.choice != null)
    ig.challenge
      .replay(req.query.choice)
      .then((response) => {
        res.json({ success: true, response: response });
      })
      .catch((err) => {
        res.json({ success: false });
      });
});
app.get("/insta/submitCode", (req, res) => {
  ig.request.end$.subscribe(async () => {
    const cookies = await ig.state.serializeCookieJar();
    const state = {
      deviceString: ig.state.deviceString,
      deviceId: ig.state.deviceId,
      uuid: ig.state.uuid,
      phoneId: ig.state.phoneId,
      adid: ig.state.adid,
      build: ig.state.build,
    };
    // In order to restore session cookies you need this
    await ig.state.deserializeCookieJar(JSON.stringify(cookies));
    ig.state.deviceString = state.deviceString;
    ig.state.deviceId = state.deviceId;
    ig.state.uuid = state.uuid;
    ig.state.phoneId = state.phoneId;
    ig.state.adid = state.adid;
    ig.state.build = state.build;
  });

  return ig.account
    .twoFactorLogin({
      username: req.query.username,
      verificationCode: req.query.code,
      twoFactorIdentifier: req.query.two_factor_identifier,
      verificationMethod: req.query.verificationMethod, // '1' = SMS (default), '0' = OTP
      trustThisDevice: "1", // Can be omitted as '1' is used by default
    })
    .then((val) => {
      const cookies = ig.state.serializeCookieJar().then((val2) => {
        res.json({ success: true, user: val, cookie: val2.cookies });
      });
    });
});

app.post("/insta", (req, res) => {
  // Initiate Instagram API client
  console.log("insta login test");
  console.log(req.body);
  const body = JSON.parse(req.body);

  ig.state.generateDevice(body.username);

  return Promise.try(() =>
    ig.account
      .login(body.username, body.password)
      .then((val) => {
        const cookies = ig.state.serializeCookieJar().then((val2) => {
          res.json({ success: true, user: val, cookie: val2.cookies });
        });
      })
      .catch((err) => {
        res.json({ message: "inavlid password", success: false });
      })
  ).catch(IgLoginTwoFactorRequiredError, async (err) => {
    const {
      username,
      totp_two_factor_on,
      two_factor_identifier,
    } = err.response.body.two_factor_info;
    if (!two_factor_identifier) {
      res.json({
        message: "Unable to login, no 2fa identifier found",
        success: false,
      });
      throw new Error("Unable to login, no 2fa identifier found");
    }

    const verificationMethod = totp_two_factor_on ? "0" : "1"; // default to 1 for SMS

    //sending Two Factor details
    res.json({
      username,
      two_factor_identifier,
      verificationMethod,
      success: true,
    });
    // Use the code to finish the login process
  });
});

// Method to logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
app.get("/logout/insta", (req, res) => {
  ig.account
    .logout()
    .then((val) => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false });
    });
});
