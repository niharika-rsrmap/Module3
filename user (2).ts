// Define the User interface with specific properties
export interface User {
    id: string;         // Unique identifier for the user
    username: string;   // Username chosen by the user
    email: string;      // User's email address
    password: string;   // Password for user authentication
    createdAt: Date;    // Date and time when the user was created
}

// Export an array of users to simulate an in-memory user storage
// This array will store User objects and is used for demonstration purposes
export const users: User[] = [];