const Display = require('../models/display');

module.exports = {
	// Posts Index
	async getPosts(req, res, next) {
		let displays = await Display.find({});
		res.render('displays/index', { displays });
	},
	// New Post
	newPost(req, res, next) {
		res.render('displays/new');
	},
	// Create Post
	async createPost(req, res, next) {
	// use req.body to create a new Post
	let display = await Display.create(req.body);
	res.redirect(`/displays/${display.id}`);
	},
	// Posts show or display on page
	async showPost(req, res, next) {
		let display = await Display.findById(req.params.id);
		res.render('displays/show', { display });
	},

	// Edit Posts
	async editPost(req, res, next) {
		let display = await Display.findById(req.params.id);
		res.render('displays/edit', { display });
	}
}