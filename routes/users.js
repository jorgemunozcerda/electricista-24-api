const express = require('express');
const {createUser} = require('../controllers/users');

const router = new express.Router();

router.route('/crear-usuario').post(createUser);

module.exports = router;
