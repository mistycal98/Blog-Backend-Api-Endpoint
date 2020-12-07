// Inbuilt Modules
const fs = require("fs");
const path = require("path");

// Custom Module
// Third Party Modules
const express = require("express");

// Create Server
const app = express();
const port = process.env.PORT || 3000; // Port Number for the website

const USERS = path.join(__dirname, "data", "blogs.json");
const userData = JSON.parse(fs.readFileSync(USERS, "utf-8"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome Page</h1>");
});

app.get("/blogs", (req, res) => {
  let data = userData.filter((user) => {
    return Object.keys(req.query).every((property) => {
      return user[property] == req.query[property];
    });
  });
  res.status(200).json({
    message: "Sucessful",
    data: data,
  });
});

app.get("/blogs/:id", (req, res) => {
  let data = userData.find((user) => {
    return (user = user.id);
  });
  if (data) {
    res.status(200).json({
      message: "Succesful",
      data: data,
    });
  } else {
    res.status(404).json({
      message: "Failed",
      status: "User Not Found",
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on Port ${port}`);
});
