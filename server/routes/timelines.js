var express = require("express");
var router = express.Router();

const { TimelineService } = require("../controllers/timelinesController");

/* GET timelines home page. */
router.get("/", (req, res, next) => {
  TimelineService.list()
    .then((allTimelines) => {
      res.render("timelines", { allTimelines: allTimelines });
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

/* GET single timeline by id */
router.get("/:timelineId", (req, res, next) => {
  TimelineService.find(req.params.timelineId)
    .then((timeline) => {
      res.render("timelineDetails", { timeline: timeline });
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

/* POST a new timeline */
router.post("/", (req, res, next) => {
  const newTimelineObject = {
    title: req.body.title,
    description: req.body.description,
  };
  TimelineService.create(newTimelineObject)
    .then((newTimeline) => {
      res.redirect(`/timelines/${newTimeline._id}`);
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

/* POST to a single timeline to update or delete */
router.post("/:timelineId", (req, res, next) => {
  console.log(req.body);
  if (req.body.delete) {
    TimelineService.delete(req.params.timelineId)
      .then(() => {
        res.redirect("/timelines");
      })
      .catch((err) => {
        res.render("error", { error: err });
      });
  } else {
    TimelineService.update(req.params.timelineId, req.body)
      .then((updatedTimeline) => {
        res.recirect(`/timelines/${updatedTimeline._id}`);
      })
      .catch((err) => {
        res.render("error", { error: err });
      });
  }
});

module.exports = router;
