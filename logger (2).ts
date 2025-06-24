import { Request, Response, NextFunction } from 'express';

// Custom logging middleware
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Get the current timestamp in ISO format
    const timestamp = new Date().toISOString();

    // Log the HTTP method and the URL of the incoming request along with the timestamp
    console.log(`[${timestamp}] ${req.method} ${req.url}`);

    // Call the next middleware function in the stack
    next();
};