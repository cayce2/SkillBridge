import React from 'react';
import { ExpertCard } from '../components/ExpertCard';
import { ProjectCard } from '../components/ProjectCard';
import { featuredExperts } from '../data/experts';
import { featuredProjects } from '../data/projects';

export function HomePage() {
  return (
    <>
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
    </>
  );
}