import mongoose from 'mongoose';
import { DB_CONFIG } from '../config';

// Initialize mongoose connection
let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(DB_CONFIG.mongodb_uri);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}