const express = require('express');
const { getAllBlogs, getBlogById, createBlog } = require('../controllers/blogController');

const router = express.Router();

// /blogs/
router.route('/').get(getAllBlogs).post(createBlog);

// /blogs/:id
router.route('/:id').get(getBlogById);

module.exports = router;
