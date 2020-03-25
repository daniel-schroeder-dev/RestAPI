const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentModel = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true
  },
  birthday: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  }
});

const student = mongoose.model("Student", studentModel);
module.exports = student;
