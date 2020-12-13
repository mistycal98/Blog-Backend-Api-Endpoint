// Inbuilt Modules
const fs = require("fs");
const path = require("path");

// Custom Module
// Third Party Modules
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
// Create Server
const app = express();

const USERS = path.join(__dirname, "data", "blogs.json");
const userData = JSON.parse(fs.readFileSync(USERS, "utf-8"));

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.get("/blogs", (req, res) => {
  let data = userData.filter((user) => {
    return Object.keys(req.query).every((property) => {
      return user[property] == req.query[property];
    });
  });
  res.status(200).json({
    message: "Sucessful",
    data: data
  });
});

app.get("/blogs/:id", (req, res) => {
  let data = userData.find((user) => {
    return user.id == req.params.id;
  });
  if (data) {
    res.status(200).json({
      message: "Succesful",
      data:  data
    });
  } else {
    res.status(404).json({
      message: "Failed",
      status: "Blog Not Found",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
