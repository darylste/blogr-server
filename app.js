const express = require('express');
const blogPostRouter = require('./routes/blogPostRoutes');

const app = express();

app.use('/api/v1/posts', blogPostRouter);

module.exports = app;
