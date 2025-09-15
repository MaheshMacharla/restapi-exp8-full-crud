const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// --- MongoDB Connection ---
const mongoURI = 'mongodb://127.0.0.1:27017/my_school_db';

mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// --- Mongoose Schema and Model ---
// Define schema for 'Student'
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 18
  },
  major: {
    type: String,
    required: false,
    default: 'Undecided'
  }
});

// Create Student model
const Student = mongoose.model('Student', studentSchema);

// --- REST API Routes ---

// CREATE: POST /api/students
app.post('/api/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ: GET /api/students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// READ: GET /api/students/:id
app.get('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: 'Invalid student ID' });
  }
});

// UPDATE: PUT /api/students/:id
app.put('/api/students/:id', async (req, res) => {
  console.log('PUT request:', req.params.id, req.body); // Debug info
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// DELETE: DELETE /api/students/:id
app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid student ID' });
  }
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log('API endpoints: /api/students (GET, POST), /api/students/:id (GET, PUT, DELETE)');
});
