const TlEvent = require("../models/tlEventModel");

class TlEventService {
  static list() {
    return TlEvent.find({})
      .populate({ path: "timeline", select: "title timeline" })
      .then((allTlEvents) => {
        return allTlEvents;
      });
  }

  static find(tlEventId) {
    return TlEvent.findOne({ _id: tlEventId })
      .populate({ path: "timeline", select: "title timeline" })
      .then((tlEvent) => {
        return tlEvent;
      });
  }

  static create(newTlEventObject) {
    const newTlEvent = new TlEvent(newTlEventObject);
    return newTlEvent.save();
  }

  static update(tlEventId, updatedTlEventOjbect) {
    return TlEvent.findOneAndUpdate({ _id: tlEventId }, updatedTlEventOjbect, {
      new: true,
    });
  }

  static delete(tlEventId) {
    return TlEvent.findOneAndDelete({ _id: tlEventId });
  }
}

module.exports.TlEventService = TlEventService;
