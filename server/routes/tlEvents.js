const express = require("express");
var router = express.Router();

const { TlEventService } = require("../controllers/tlEventsController");

/* GET event listing. */
router.get("/", function (req, res, next) {
  TlEventService.list()
    .then((allTlEvents) => {
      res.render("tlEvents", { allTlEvents: allTlEvents });
    })
    .catch((err) => res.render("error", { error: err }));
});

/* GET single timeline event by id */
router.get("/:tlEventId", (req, res, next) => {
  TlEventService.find(req.params.tlEventId)
    .then((tlEvent) => {
      res.render("tlEventDetails", { tlEvent: tlEvent });
    })
    .catch((err) => res.render("error", { error: err }));
});

/* POST new timeline event */
router.post("/", (req, res, next) => {
  const newTlEventObject = {
    title: req.body.title,
    description: req.body.description,
    displayDate: req.body.displayDate,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    hours: req.body.hours,
    minutes: req.body.minutes,
    seconds: req.body.seconds,
    timeline: req.body.timeline,
  };
  TlEventService.create(newTlEventObject)
    .then((newTlEvent) => {
      res.redirect(`/timelines/${req.body.timeline}`);
    })
    .catch((err) => res.render("error", { error: err }));
});

/* POST to a single timeline event to update or delete */
router.post("/:tlEventId", (req, res, next) => {
  if (req.body.delete) {
    TlEventService.delete(req.params.timelineId)
      .then((deletedTlEvent) => {
        res.redirect(`/tlEvents/${deletedTlEvent.timeline}`);
      })
      .catch((err) => res.render("error", { error: err }));
  } else {
    TlEventService.update(req.params.tlEventId, req.body)
      .then((updatedTlEvent) => {
        res.redirect(`/timelines/${updatedTlEvent.timeline}`);
      })
      .catch((err) => res.render("error", { error: err }));
  }
});

module.exports = router;
