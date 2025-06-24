import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'; // Import user routes
import { loggerMiddleware } from './middleware/logger'; // Import logger middleware
import { errorHandler } from './middleware/errorHandler'; // Import error handling middleware

dotenv.config();

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_assignment';
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 3000; // Define the server port, defaulting to 3000 if not specified

// Middleware to parse JSON request bodies
app.use(express.json());

// Custom logging middleware to log request details
app.use(loggerMiddleware);

// Routes for user-related endpoints prefixed with '/api'
app.use('/api', userRoutes);

// Middleware for centralized error handling
app.use(errorHandler);

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});