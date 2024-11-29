import React from 'react';
import { ExpertCard } from '../components/ExpertCard';
import { featuredExperts } from '../data/experts';

export function ExpertsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find an Expert</h1>
        <p className="mt-2 text-gray-600">Connect with industry professionals ready to share their expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredExperts.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
}