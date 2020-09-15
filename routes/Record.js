const router = require("express").Router();
const Record = require("../models/Record");

router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/", async (req, res) => {
  const record = new Record({
    reading: req.body.reading,
    readingDate: req.body.readingDate,
    fastingOption: req.body.fastingOption,
  });
  try {
    const newRecord = await record.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
