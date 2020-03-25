const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseModel = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  startdate: {
    type: Date,
    required: true
  },
  enddate: {
    type: Date,
    required: true
  }
});

const course = mongoose.model("Course", courseModel);
module.exports = course;
