export interface Expert {
    id: string;
    name: string;
    title: string;
    expertise: string[];
    yearsOfExperience: number;
    hourlyRate: number;
    availability: 'full-time' | 'part-time' | 'project-based';
    bio: string;
    imageUrl: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    requiredExpertise: string[];
    budget: number;
    duration: string;
    status: 'open' | 'in-progress' | 'completed';
    companyName: string;
  }