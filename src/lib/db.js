const mysql = require("mysql2");

const db = mysql.createConnection({
  config: {
    // host: process.env.MYSQL_HOST,
    // port: process.env.MYSQL_PORT,
    // database: process.env.MYSQL_DATABASE,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    host: "localhost",
    user: "root",
    password: "Kaisenjujutsu@101010",
    database: "guests",
  },
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
