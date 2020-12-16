// Inbuilt Modules
const fs = require("fs");
const path = require("path");

// Custom Module
const blogRoutes = require('./routes/blogRoutes')

// Third Party Modules
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Create Server
const app = express();

const BLOGS = path.join(__dirname, "data", "blogs.json"); 
const blog = JSON.parse(fs.readFileSync(BLOGS, "utf-8"));

app.use(express.json());

// Views for Home Page
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.status(200).render("home");
});

// Blogs
app.use("/blogs", blogRoutes);

//app Starts on....
app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
