const Enrollment = require('../models/enrollmentModel');
const Course = require('../models/courseModel');

const enrollStudent = async (req, res) => {
    const { courseId, studentId } = req.body;
    try {
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ error: 'Course not found' });

        const enrollment = new Enrollment({ course: courseId, student: studentId });
        await enrollment.save();
        res.status(201).json({ message: 'Student enrolled successfully', enrollment });
    } catch (error) {
        res.status(500).json({ error: 'Failed to enroll student' });
    }
};

const withdrawStudent = async (req, res) => {
    const { enrollmentId } = req.params;
    try {
        const enrollment = await Enrollment.findByIdAndUpdate(enrollmentId, { status: 'Withdrawn' }, { new: true });
        if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });

        res.status(200).json({ message: 'Student withdrawn', enrollment });
    } catch (error) {
        res.status(500).json({ error: 'Failed to withdraw student' });
    }
};

const getEnrollmentStatus = async (req, res) => {
    const { studentId, courseId } = req.query;
    try {
        const enrollment = await Enrollment.findOne({ student: studentId, course: courseId });
        if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });

        res.status(200).json({ enrollment });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch enrollment status' });
    }
};

module.exports = {
    enrollStudent,
    withdrawStudent,
    getEnrollmentStatus
}
