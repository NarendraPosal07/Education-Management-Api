const express = require('express');
const course = require('../controllers/coursController');
const authorize = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const router = express();

router.post('/', authorize, role.isAdmin, course.createCourse);
router.put('/:id', authorize, role.isTeacher, course.updateCourse);
router.delete('/:id', authorize, role.isAdmin, course.deleteCourse);

module.exports = router;
