import mongoose, { Schema, model, models } from 'mongoose';

const expertSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  expertise: [{ type: String }],
  yearsOfExperience: { type: Number, required: true },
  hourlyRate: { type: Number, required: true },
  availability: { 
    type: String, 
    enum: ['full-time', 'part-time', 'project-based'],
    required: true 
  },
  bio: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Expert = models.Expert || model('Expert', expertSchema);