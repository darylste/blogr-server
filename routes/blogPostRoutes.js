const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/getAll', postController.getAll);

router.get('/getSingle/:id', postController.getSingle);

router.post('/create', postController.create);

router.put('/update/:id', postController.update);

router.delete('/delete/:id', postController.delete);

module.exports = router;
