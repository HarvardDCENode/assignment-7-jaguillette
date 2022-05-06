var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();

var indexRouter = require("./routes/index");
var tlEventsRouter = require("./routes/tlEvents");
var timelinesRouter = require("./routes/timelines");
var apiTimelinesRouter = require("./routes/api/api-timelines");
var apiTlEventsRouter = require("./routes/api/api-tlEvents");

var app = express();
mongoose.connect(
  `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@${process.env.ATLAS_HOST}/${process.env.ATLAS_DB_NAME}?retryWrites=true&w=majority`
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", indexRouter);
app.use("/tlEvents", tlEventsRouter);
app.use("/timelines", timelinesRouter);
app.use("/api/timelines/", apiTimelinesRouter);
app.use("/api/tlEvents/", apiTlEventsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
