const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	tile: {
		type: String,
		required: [true, 'Post requires a title'],
		trim: true,
		maxlength: [60, 'Title must be less than 60 characters'],
		minlength: [5, 'Title must have at least 5 characters'],
	},
	body: {
		type: String,
		trim: true,
		required: [true, 'Post requires a body'],
		minlength: [15, 'Post must have at 15 characters'],
	},
	image: {
		type: String,
		required: [true, 'Post must contain an image'],
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('Post', postSchema);
