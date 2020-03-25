require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const student = require("./models/student");
const course = require("./models/course");
//app middlewear
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json()); //body Parser

//Connect to db
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(err);
  });

//student

app.get("/students", async (req, res, next) => {
  try {
    await student
      .find()
      .populate("course")
      .select("name birthday address zipcode city phone email")
      .then(docs => {
        const response = {
          count: docs.length,
          students: docs
        };
        res.json(response);
      });
  } catch (error) {
    console.log(error);
  }
});

app.get("/students/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    student
      .findById(id)
      .exec()
      .then(data => {
        console.log(data);
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.put("/students/:id", async (req, res, next) => {
  const id = req.params.id;
  const update = {};
  for (const datas of req.body) {
    update[datas.updateData] = datas.value;
  }
  try {
    student
      .update({ _id: id }, { $set: update })
      .exec()
      .then(data => {
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/students/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    student
      .remove({ _id: id })
      .exec()
      .then(data => {
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.post("/students", async (req, res, next) => {
  const logs = new student({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    birthday: req.body.birthday,
    address: req.body.address,
    zipcode: req.body.zipcode,
    city: req.body.city,
    phone: req.body.phone,
    email: req.body.email,
    course: req.body.courseid
  });
  logs
    .save()
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});
//course
app.get("/courses", async (req, res, next) => {
  try {
    await course
      .find()
      .select("name  student startdate enddate")

      .then(docs => {
        const response = {
          count: docs.length,
          courses: docs
        };
        res.json(response);
      });
  } catch (error) {
    console.log(error);
  }
});

app.get("/courses/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    course
      .findById(id)
      .select("name  student startdate enddate")
      .exec()
      .then(data => {
        console.log(data);
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.put("/courses/:id", async (req, res, next) => {
  const id = req.params.id;
  const update = {};
  for (const datas of req.body) {
    update[datas.updateData] = datas.value;
  }
  try {
    course
      .update({ _id: id }, { $set: update })
      .exec()
      .then(data => {
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/courses/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    course
      .remove({ _id: id })
      .exec()
      .then(data => {
        res.json(data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.post("/courses", async (req, res, next) => {
  const logs = new course({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    startdate: req.body.startdate,
    enddate: req.body.enddate
  });
  logs
    .save()
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 App is listening at port ${port}!`));
