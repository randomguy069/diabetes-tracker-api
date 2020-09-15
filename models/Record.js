const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  reading: {
    type: String,
    required: true,
  },
  readingDate: {
    type: Date,
    required: true,
  },
  fastingOption: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Record", RecordSchema);
