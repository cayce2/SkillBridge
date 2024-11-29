import { Expert, Project, User } from './db';
import { notify } from './toast';
import { hashPassword, verifyPassword, validatePassword } from './auth';

export async function registerUser(data: {
  email: string;
  password: string;
  name: string;
  role: 'expert' | 'client';
}) {
  try {
    // Validate password strength
    const validation = validatePassword(data.password);
    if (!validation.isValid) {
      notify.error(validation.message || 'Invalid password');
      throw new Error(validation.message);
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      notify.error('Email already registered');
      throw new Error('Email already registered');
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(data.password);
    const user = await User.create({
      ...data,
      passwordHash: hashedPassword
    });

    notify.success('Registration successful!');
    return user;
  } catch (error) {
    notify.error(error instanceof Error ? error.message : 'Registration failed. Please try again.');
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    notify.success('Login successful!');
    return user;
  } catch (error) {
    notify.error('Login failed. Please check your credentials.');
    throw error;
  }
}

export async function createProject(data: {
  title: string;
  description: string;
  requiredExpertise: string[];
  budget: number;
  duration: string;
  companyName: string;
  clientId: string;
}) {
  try {
    const project = await Project.create(data);
    notify.success('Project created successfully!');
    return project;
  } catch (error) {
    notify.error('Failed to create project. Please try again.');
    throw error;
  }
}

export async function createExpertProfile(data: {
  name: string;
  title: string;
  expertise: string[];
  yearsOfExperience: number;
  hourlyRate: number;
  availability: 'full-time' | 'part-time' | 'project-based';
  bio: string;
  imageUrl: string;
  userId: string;
}) {
  try {
    const expert = await Expert.create(data);
    notify.success('Expert profile created successfully!');
    return expert;
  } catch (error) {
    notify.error('Failed to create expert profile. Please try again.');
    throw error;
  }
}

export async function getExperts() {
  try {
    return await Expert.find().populate('userId', 'name email');
  } catch (error) {
    notify.error('Failed to fetch experts.');
    throw error;
  }
}

export async function getProjects() {
  try {
    return await Project.find().populate('clientId', 'name email');
  } catch (error) {
    notify.error('Failed to fetch projects.');
    throw error;
  }
}