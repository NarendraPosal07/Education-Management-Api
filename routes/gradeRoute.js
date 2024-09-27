const express = require('express');
const grade = require('../controllers/gradeController');
const verifyToken = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const router = express();

router.post('/assign', verifyToken, role.isTeacher, grade.assignGrade);

router.get('/:studentId', verifyToken, role.isStudent, grade.viewGrades);

module.exports = router;
