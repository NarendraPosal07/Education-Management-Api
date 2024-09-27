const express = require('express');
const user = require('../controllers/authController');
const router = express();

router.post('/signup', user.signup);
router.post('/login', user.login);

module.exports = router;
