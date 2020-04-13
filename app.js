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
app.listen(process.env.PORT || 4000, function () {
  console.log("server running on port:4000");
});

app.options("*", cors());
app.use(cors());
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
  "/linkedin",
  createProxyMiddleware({
    target: "https://mysterious-reaches-98129.herokuapp.com/linkedin", //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
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
      callbackURL: "https://fast-tundra-53694.herokuapp.com/callback/",
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
    failureRedirect: "/linkedin",
    successRedirect: "/",
  }),
  (req, res) => {
    res.json({ session: req.session, user: req.user, cookie: req.cookie });
  }
);

// method to load index.ejs file on base path
app.get("/", function (req, res) {
  res.send("<h1>Welcome</h1>");
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

  ig.state.generateDevice(req.body.username);

  return Promise.try(() =>
    ig.account.login(req.body.username, req.body.password).then((val) => {
      const cookies = ig.state.serializeCookieJar().then((val2) => {
        res.json({ success: true, user: val, cookie: val2.cookies });
      });
    })
  ).catch(IgLoginTwoFactorRequiredError, async (err) => {
    console.log("test2 called auth");
    if (err.response.body.invalid_credentials) {
      res.json({ message: "inavlid credentials", success: false });
    }

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
