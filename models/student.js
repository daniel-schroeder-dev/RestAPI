const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentModel = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
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
    required: true
  },

  email: {
    type: String
  }
});

const student = mongoose.model("Student", studentModel);
module.exports = student;
