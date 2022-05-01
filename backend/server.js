const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

// Connecting to MongoDB database
connectDB();

const app = express();

// Middleware: accepts value from body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/users', userRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

// Handle error and exception
app.use(errorHandler);

// Listen to request
app.listen(port, () => console.log(`Server started on port ${port}`));