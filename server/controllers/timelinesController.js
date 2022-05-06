const Timeline = require("../models/timelineModel");

class TimelineService {
  // list
  static list() {
    return Timeline.find({})
      .populate("tlEvents")
      .then((allTimelines) => {
        return allTimelines;
      });
  }

  // find
  static find(timelineId) {
    return Timeline.findOne({ _id: timelineId })
      .populate("tlEvents")
      .then((timeline) => {
        return timeline;
      });
  }

  // create
  static create(newTimelineObject) {
    const newTimeline = new Timeline(newTimelineObject);
    return newTimeline.save();
  }

  // update
  static update(timelineId, updatedTimelineObject) {
    return Timeline.findOneAndUpdate(
      { _id: timelineId },
      updatedTimelineObject,
      { new: true }
    );
  }

  // delete
  static delete(timelineId) {
    return Timeline.findOneAndDelete({ _id: timelineId });
  }
}

module.exports.TimelineService = TimelineService;
