const express = require('express');
const cors = require('cors');
const blogPostRouter = require('./routes/blogPostRoutes');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '10kb' }));
app.use('/api/v1/posts', blogPostRouter);

module.exports = app;
