const Grade = require('../models/gradeModel');
const Enrollment = require('../models/enrollmentModel');

const assignGrade = async (req, res) => {
    const { courseId, studentId, grade } = req.body;
    try {
        const enrollment = await Enrollment.findOne({ course: courseId, student: studentId });
        if (!enrollment || enrollment.status !== 'Enrolled') {
            return res.status(404).json({ error: 'Student not enrolled in this course' });
        }

        const assignedGrade = new Grade({ course: courseId, student: studentId, grade });
        await assignedGrade.save();
        res.status(201).json({ message: 'Grade assigned', assignedGrade });
    } catch (error) {
        res.status(500).json({ error: 'Failed to assign grade' });
    }
};

const viewGrades = async (req, res) => {
    const { studentId } = req.params;
    try {
        const grades = await Grade.find({ student: studentId }).populate('course', 'title');
        res.status(200).json({ grades });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve grades' });
    }
};

module.exports = {
    assignGrade,
    viewGrades
}