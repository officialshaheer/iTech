const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers/index');
const { errorHandler } = require('../middleware/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'iTech Mobile Service Point' });
});

// USER ROUTES 
/* GET /register. - Getting the registration page*/
router.get('/user', (req, res, next) => {
  res.render('user');
});

/* POST /register. Posting values from registration page to database */
router.post('/user', errorHandler(postRegister));

/* GET /login. Getting login page of user */
router.get('/user/login', (req, res, next) => {
  res.render('user/login');
});

/* POST /login. Posting values from user login page to database  */
router.post('/user/login', postLogin);

// // /* GET /logout */
router.get('/logout', getLogout);

// /* GET /profile. - Display Profile  */
// router.get('/profile', (req, res, next) => {
//   res.send('GET /profile');
// });

// /* PUT /profile/:user_id - Updating profile */
// router.put('/profile/:user_id', (req, res, next) => {
//   res.send('PUT /profile/:user_id');
// });

module.exports = router;
