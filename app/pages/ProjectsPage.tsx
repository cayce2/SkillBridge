import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Projects</h1>
        <p className="mt-2 text-gray-600">Browse through available consulting opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}