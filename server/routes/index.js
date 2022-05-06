var express = require("express");
var router = express.Router();

const tlEvent = require("../models/tlEventModel");
const timeline = require("../models/timelineModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const tlEventsCount = await tlEvent.count({});
  const timelinesCount = await timeline.count({});
  res.render("index", {
    title: "Timeline Generator",
    tlEventsCount: tlEventsCount,
    timelinesCount: timelinesCount,
  });
});

module.exports = router;
