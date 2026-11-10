
const express = require('express');
const Router = express.Router();
const postmodel = require('../Model/postmodel');

// Display homepage
Router.get('/', async (req, res) => {
    try {
        const posts = await postmodel.find();
        res.render('Home', { posts: posts });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error loading homepage');
    }
});

// Display create post form
Router.get('/create', (req, res) => {
    res.render('createpost');
});

// Save post to MongoDB
Router.post('/createpost', async (req, res) => {
    try {
        console.log('Form data:', req.body);

        const newPost = new postmodel({
            title: req.body.title,
            content: req.body.content
        });

        await newPost.save();

        console.log('Post saved successfully');

        res.redirect('/');
    } catch (err) {
        console.log('Post error:', err);
        res.status(500).send('Error saving post');
    }
});

module.exports = Router;
