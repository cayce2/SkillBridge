import mongoose, { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['expert', 'client'],
    required: true 
  },
  passwordHash: { type: String, required: true }
});

export const User = models.User || model('User', userSchema);