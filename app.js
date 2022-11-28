const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "gowri",
  database: "student",
});


app.listen(3001, () => {
  console.log("running server");
});
