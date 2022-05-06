const express = require("express");
const { TlEventService } = require("../../controllers/tlEventsController");
const router = express.Router();

// Using provided sample code to handle CORS and preflights
router.use((req, res, next) => {
  res.set({
    // Allow AJAX access from any domain
    "Access-Control-Allow-Origin": "*",
    // Allow methods and headers for 'preflight'
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  // if this is a preflight, we're done and can send the response with our headers
  if (req.method == "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

function errorFactory(res) {
  return (err) => {
    res.status(500);
    res.json({ error: err });
  };
}

// list
router.get("/", (req, res, next) => {
  // list all timeline events
  TlEventService.list()
    .then((allTlEvents) => {
      res.status(200);
      res.json(allTlEvents);
    })
    .catch(errorFactory(res));
});

// find
router.get("/:tlEventId", (req, res, next) => {
  TlEventService.find(req.params.tlEventId)
    .then((tlEvent) => {
      res.status(200);
      res.json(tlEvent);
    })
    .catch(errorFactory(res));
});

// create
router.post("/", (req, res, next) => {
  console.log(req.body);
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
      res.status(201);
      res.json(newTlEvent);
    })
    .catch(errorFactory(res));
});

// update
router.put("/:tlEventId", (req, res, next) => {
  console.log(req.body);
  TlEventService.update(req.params.tlEventId, req.body)
    .then((updatedTlEvent) => {
      res.status(200);
      res.json(updatedTlEvent);
    })
    .catch(errorFactory(res));
});

// delete
router.delete("/:timelineId", (req, res, next) => {
  TlEventService.delete(req.params.timelineId)
    .then((deletedTlEvent) => {
      res.status(200);
      res.json(deletedTlEvent);
    })
    .catch(errorFactory(res));
});

module.exports = router;
