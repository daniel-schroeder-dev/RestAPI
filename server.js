require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const students = require("./src/logs/studentLogs");
const courses = require("./src/logs/coursesLogs");
//app middlewear
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json()); //body Parser

//student

app.get("/students", async (req, res, next) => {
  res.status(200).json({
    message: "it works"
  });
});

app.get("/students/1", async (req, res, next) => {
  const id = req.params;
  id === "special"
    ? res.status(200).json({ message: "student id", id: id })
    : res.status(200).json({ message: "you pass the id" });
});

app.put("/students/1", async (req, res, next) => {
  res.status(200).json({
    message: "updated product"
  });
});

app.delete("/students/1", async (req, res, next) => {
  res.status(200).json({
    message: "delete product"
  });
});

app.post("/students", async (req, res, next) => {
  try {
    const logs = new logEntry(req.body);
    const entry = await logs.save();
    res.json(entry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

//course

app.get("/courses", async (req, res, next) => {
  try {
    const entries = await logEntry.find();
    res.json({
      entries
    });
  } catch (error) {
    next(error);
  }
});

app.get("/courses/1", async (req, res, next) => {
  const id = req.params.body;
  id === "special"
    ? res.status(200).json({ message: "srudent id", id: id })
    : res.status(200).json({ message: "you pass the id" });
});

router.put("/courses/1", async (req, res, next) => {
  res.status(200).json({
    message: "updated product"
  });
});

router.delete("/courses/1", async (req, res, next) => {
  res.status(200).json({
    message: "updated product"
  });
});

router.post("/courses", async (req, res, next) => {
  try {
    const logs = new logEntry(req.body);
    const entry = await logs.save();
    res.json(entry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 App is listening at port ${port}!`));
