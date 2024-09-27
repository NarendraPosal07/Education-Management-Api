const isAdmin = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access forbidden: Admins only' });
    }
    next();
};

const isTeacher = (req, res, next) => {
    if (req.user.role !== 'Teacher') {
        return res.status(403).json({ error: 'Access forbidden: Teachers only' });
    }
    next();
};

const isStudent = (req, res, next) => {
    if (req.user.role !== 'Student') {
        return res.status(403).json({ error: 'Access forbidden: Students only' });
    }
    next();
};

module.exports = {
    isAdmin,
    isTeacher,
    isStudent
}