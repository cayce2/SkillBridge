import mongoose, { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requiredExpertise: [{ type: String }],
  budget: { type: Number, required: true },
  duration: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['open', 'in-progress', 'completed'],
    default: 'open'
  },
  companyName: { type: String, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Project = models.Project || model('Project', projectSchema);