const sequelize = require("sequelize");

var con = new sequelize("student", "postgres", "Joymaaloknath123", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const student = con.define("student", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  dob: {
    type: sequelize.DATEONLY,
    allowNull: false
  },
  address: {
    type: sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  city: {
    type: sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  email: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

const course = con.define("course", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true
  },
  name: { type: sequelize.STRING },
  startdate: { type: sequelize.DATEONLY },
  enddate: { type: sequelize.DATEONLY },
  studentid: { type: sequelize.INTEGER, foreignKey: true }
});

student.hasMany(course);
course.belongsTo(student);

//con.sync({ force: true });

module.exports = con;
