import type { Expert } from '../types';

export const featuredExperts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Former CTO & AI Specialist',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Tech Leadership'],
    yearsOfExperience: 25,
    hourlyRate: 250,
    availability: 'project-based',
    bio: 'Ex-CTO of a Fortune 500 company with extensive experience in AI implementation and digital transformation.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'James Wilson',
    title: 'Financial Strategy Consultant',
    expertise: ['Investment Banking', 'M&A', 'Risk Management'],
    yearsOfExperience: 30,
    hourlyRate: 300,
    availability: 'part-time',
    bio: 'Former Managing Director at Goldman Sachs with expertise in mergers & acquisitions and risk management.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }
];