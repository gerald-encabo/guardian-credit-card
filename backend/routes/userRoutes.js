const express = require('express');
const router = express.Router();
const { signupUser, signinUser, signoutUser } = require('../controllers/userControllers');

// URL routes for user
router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.get('/signout', signoutUser);

module.exports = router;