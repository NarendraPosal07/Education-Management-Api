const express = require('express');
const connectDB = require('./db/db');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/courses', require('./routes/courseRoute'));
app.use('/api/enrollments', require('./routes/enrollmentRoute'));
app.use('/api/grades', require('./routes/gradeRoute'));

connectDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

