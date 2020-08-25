const User = require('../models/user');
const passport = require('passport');

module.exports = {
 async postRegister(req, res, next) {
 	const newUser = new User({
 		username: req.body.username,
 		email: req.body.email,
 		image: req.body.image
 	}); 

    await User.register(newUser, req.body.password);
    res.redirect('/');
    console.log('User Registered');
 },

 postLogin(req, res, next) {
 	passport.authenticate('local', {
 	successRedirect: '/',
 	failureRedirect: '/user/login'	
 	})(req, res, next);
 	console.log('User Logged In!')
 },

 getLogout(req, res, next) {
   req.logout();
   res.redirect('/');
 }
 
}