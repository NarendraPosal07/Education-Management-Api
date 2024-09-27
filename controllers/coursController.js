const Course = require('../models/courseModel');

const createCourse = async (req, res) => {
    const { title, description, teacher } = req.body;
    try {
        const course = new Course({ title, description, teacher });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create course' });
    }
};

const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const course = await Course.findByIdAndUpdate(id, { title, description }, { new: true });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update course' });
    }
};

const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        await Course.findByIdAndDelete(id);
        res.status(200).json({ message: 'Course deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete course' });
    }
};

module.exports = {
    createCourse,
    updateCourse,
    deleteCourse
}