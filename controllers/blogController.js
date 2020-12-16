const fs = require('fs');
const path = require('path');

const Blog = require('../models/blogModel');

const Blogs = path.join(__dirname, "..", "data", "blogs.json");
const blog = JSON.parse(fs.readFileSync(Blogs, "utf-8"));


const getAllBlogs = (req, res) => {
    let data = blog.filter((user) => {
        return Object.keys(req.query).every((property) => {
            return user[property] == req.query[property];
        });
    });
    res.status(200).json({
        message: "Sucessful",
        data: data
    });
}

const getBlogById = (req, res) => {
    let data = blog.find((user) => {
        return user.id == req.params.id;
    });
    if (data) {
        res.status(200).json({
            message: "Succesful",
            data: data
        });
    } else {
        res.status(404).json({
            message: "Failed",
            status: "Blog Not Found",
        });
    }
}

//create a Blog
const createBlog = (req, res) => {
    if (!['author', 'title', 'content'].every(key => {
        return req.body[key] && req.body[key].length
    })) {
        res.status(404).json({
            message: 'Unsucessfull',
            status: "Inavlid Data Inputs"
        });
    };


    let newBlog = new Blog(req.body.author, req.body.title, req.body.content);
    blog.push(newBlog);
    fs.writeFile(Blogs, JSON.stringify(blog, null, 2), err => {
        if (err) {
            res.status(500).json({
                message: 'Unsucessfull',
                data: err
            });
            return err;
        } else {
            res.status(200).json({
                message: "Sucessfull",
                data: newBlog
            });
        }
    });
}

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog
}