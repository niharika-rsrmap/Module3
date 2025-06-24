import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/user.model';
import mongoose from 'mongoose';

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword
        });
        const { password: _, ...userWithoutPassword } = newUser.toObject();
        res.status(201).json({
            message: 'Registration successful',
            user: userWithoutPassword
        });
    } catch (err) {
        console.error('Register User Error:', err); // Log the actual error
        res.status(500).json({ error: 'Server error', details: err instanceof Error ? err.message : err });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const { password: _, ...userWithoutPassword } = user.toObject();
        res.json({
            message: 'Login successful',
            user: userWithoutPassword
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const isValidHex = /^[a-fA-F0-9]{24}$/.test(userId);
    if (!isValidHex) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }
    try {
        const user = await UserModel.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error in GET /user/:id:', error);
        res.status(500).json({ error: 'Server error', details: error instanceof Error ? error.message : error });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find().select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};