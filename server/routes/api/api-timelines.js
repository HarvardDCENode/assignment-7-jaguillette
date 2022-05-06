var express = require("express");
const { TimelineService } = require("../../controllers/timelinesController");
var router = express.Router();

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
  // list all timelines
  TimelineService.list()
    .then((allTimelines) => {
      res.status(200);
      res.json(allTimelines);
    })
    .catch(errorFactory(res));
});

// find
router.get("/:timelineId", (req, res, next) => {
  // list info for one timeline
  TimelineService.find(req.params.timelineId)
    .then((timeline) => {
      res.status(200);
      res.json(timeline);
    })
    .catch(errorFactory(res));
});

// create
router.post("/", (req, res, next) => {
  // create a new timeline
  console.log("Post request body:");
  console.log(req.body);
  const newTimelineObject = {
    title: req.body.title,
    description: req.body.description,
    tlEvents: req.body.tlEvents,
  };
  TimelineService.create(newTimelineObject)
    .then((newTimeline) => {
      console.log(newTimeline);
      res.status(201);
      res.json(newTimeline);
    })
    .catch(errorFactory(res));
});

// update
router.put("/:timelineId", (req, res, next) => {
  // update the timeline with that id
  console.log(req.body);
  TimelineService.update(req.params.timelineId, req.body)
    .then((updatedTimeline) => {
      res.status(200);
      res.json(updatedTimeline);
    })
    .catch(errorFactory(res));
});

// delete
router.delete("/:timelineId", (req, res, next) => {
  // delete the timeline with that id
  TimelineService.delete(req.params.timelineId)
    .then((deletedTimeline) => {
      res.status(200);
      res.json(deletedTimeline);
    })
    .catch(errorFactory(res));
});

module.exports = router;
