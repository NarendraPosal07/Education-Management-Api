const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Enrolled', 'Withdrawn'], default: 'Enrolled' }
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
