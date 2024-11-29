/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { Expert } from '../types';

interface ExpertCardProps {
  expert: Expert;
}

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={expert.imageUrl}
            alt={expert.name}
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
            <p className="text-gray-600">{expert.title}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">{expert.bio}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {expert.expertise.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${expert.hourlyRate}/hr
            </span>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}