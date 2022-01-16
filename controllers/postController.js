const Post = require('../models/Posts');

exports.getAll = async (req, res) => {
	try {
		const allPosts = await Post.find();
		const length = allPosts.length;
		return res.status(200).json({
			message: 'posts found',
			data: allPosts,
			numPosts: length,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'post not  found',
			error: error,
		});
	}
};

exports.getSingle = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		return res.status(200).json({
			message: 'post found',
			data: post,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'post not found',
			error: error,
		});
	}
};

exports.create = async (req, res) => {
	try {
		const post = await Post.create(req.body);
		return res.status(201).json({
			message: 'post created',
			data: post,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'failed to created',
			error: error,
		});
	}
};

exports.update = async (req, res) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!updatedPost) {
			return res.status(500);
		}

		return res.status(200).json({
			message: 'post updated',
			data: updatedPost,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'failed to update',
			error: error,
		});
	}
};

exports.delete = async (req, res) => {
	try {
		const post = await Post.deleteOne({ _id: req.params.id });
		return res.status(200).json({
			message: 'post deleted',
			data: post,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'failed to delete',
			error: error,
		});
	}
};
