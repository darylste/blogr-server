const express = require('express');

const router = express.Router();

router.get('/getAll', (req, res) => {
	return res.status(200).json({
		message: 'get all route',
	});
});

router.get('/getSingle/:id', (req, res) => {
	return res.status(200).json({
		message: 'get single route',
		id: req.params.id,
	});
});

router.post('/create', (req, res) => {
	return res.status(201).json({
		message: 'post post',
	});
});

router.put('/update/:id', (req, res) => {
	return res.status(200).json({
		message: 'update post',
		id: req.params.id,
	});
});

router.delete('/delete/:id', (req, res) => {
	return res.status(200).json({
		message: 'delete post',
		id: req.params.id,
	});
});

module.exports = router;
