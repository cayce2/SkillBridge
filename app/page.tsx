import React from 'react';
import { Header } from './components/Header';
import { ExpertCard } from './components/ExpertCard';
import { ProjectCard } from './components/ProjectCard';
import type { Expert, Project } from './types';

const featuredExperts: Expert[] = [
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

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'AI Strategy Implementation',
    description: 'Looking for an AI expert to help develop and implement our company-wide AI strategy.',
    requiredExpertise: ['Artificial Intelligence', 'Strategy', 'Digital Transformation'],
    budget: 50000,
    duration: '6 months',
    status: 'open',
    companyName: 'TechCorp Industries'
  },
  {
    id: '2',
    title: 'Financial Risk Assessment',
    description: 'Need a senior financial expert to conduct a comprehensive risk assessment of our investment portfolio.',
    requiredExpertise: ['Risk Management', 'Investment Analysis', 'Financial Planning'],
    budget: 30000,
    duration: '3 months',
    status: 'open',
    companyName: 'Global Investments Ltd'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Connect with Top Industry Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access decades of experience from retired professionals ready to share their expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;