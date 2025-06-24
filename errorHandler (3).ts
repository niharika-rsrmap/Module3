import { Request, Response, NextFunction } from 'express';

// Error handling middleware
export const errorHandler = (
    err: Error,                 // The error object
    req: Request,               // The Express request object
    res: Response,              // The Express response object
    next: NextFunction          // The next middleware function in the stack
) => {
    // Log the error stack to the console for debugging purposes
    console.error(err.stack);

    // Send a 500 Internal Server Error response with a JSON payload
    res.status(500).json({
        error: {
            message: 'Internal Server Error',  // Generic error message
            details: process.env.NODE_ENV === 'development' ? err.message : undefined
            // Include detailed error message only in development mode
        }
    });
};