const express = require('express');
const { catchAsync } = require('../middleware');
const { createUser, signUp } = require('../controllers/users');

const router = new express.Router();

router.route('/crear-usuario').post(catchAsync(createUser));

router.route('/signup').post(catchAsync(signUp));

module.exports = router;
