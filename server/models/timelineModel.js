const mongoose = require("mongoose");
const { Schema } = mongoose;

const timelineSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

timelineSchema.virtual("tlEvents", {
  ref: "TlEvent",
  localField: "_id",
  foreignField: "timeline",
});

const Timeline = mongoose.model("Timeline", timelineSchema);

module.exports = Timeline;
