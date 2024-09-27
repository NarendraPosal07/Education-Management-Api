const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    grade: { type: Number, min: 0, max: 100, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Grade', gradeSchema);
