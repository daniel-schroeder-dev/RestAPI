const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseModel = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  name: {
    type: String,
    required: true
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
