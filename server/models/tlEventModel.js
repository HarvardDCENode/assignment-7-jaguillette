const mongoose = require("mongoose");
const { Schema } = mongoose;

const tlEventSchema = Schema({
  title: String,
  description: String,
  displayDate: String,
  year: {
    type: Number,
    min: [-271820, "Date is too far in the past for JavaScript to handle."],
    max: [275759, "Date is too far in the future for JavaScript to handle."],
    required: true,
  },
  month: {
    type: Number,
    min: [0, "Month out of range (too low)"],
    max: [11, "Month out of range (too high)"],
  },
  day: {
    type: Number,
    min: [1, "Day out of range (too low)"],
    max: [31, "Day out of range (too high)"],
  },
  hours: {
    type: Number,
    min: [0, "Hours out of range (too low)"],
    max: [23, "Hours out of range (too high)"],
  },
  minutes: {
    type: Number,
    min: [0, "Minutes out of range (too low)"],
    max: [59, "Minutes out of range (too high)"],
  },
  seconds: {
    type: Number,
    min: [0, "Seconds out of range (too low)"],
    max: [59, "Seconds out of range (too high)"],
  },
  timeline: {
    type: Schema.Types.ObjectId,
    ref: "Timeline",
    required: true,
  },
});

const TlEvent = mongoose.model("TlEvent", tlEventSchema);

module.exports = TlEvent;
