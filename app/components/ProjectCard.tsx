import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-600">{project.companyName}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            project.status === 'open' 
              ? 'bg-green-100 text-green-800'
              : project.status === 'in-progress'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {project.status}
          </span>
        </div>
        
        <p className="mt-4 text-gray-600">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.requiredExpertise.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${project.budget}
            </span>
            <span className="text-gray-600 ml-2">{project.duration}</span>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}