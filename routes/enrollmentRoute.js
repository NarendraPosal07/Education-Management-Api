const express = require('express');
const enrollment = require('../controllers/enrollmentController');
const verifyToken = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const router = express();

router.post('/enroll', verifyToken, role.isAdmin, enrollment.enrollStudent);

router.put('/withdraw/:enrollmentId', verifyToken, role.isAdmin, enrollment.withdrawStudent);

router.get('/status', verifyToken, role.isStudent, enrollment.getEnrollmentStatus);

module.exports = router;
