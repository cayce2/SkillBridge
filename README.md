# SkillBridge - Connect with Industry Experts

SkillBridge is a professional networking platform that connects businesses with retired industry experts for consulting and advisory roles. The platform bridges the gap between companies seeking expert guidance and experienced professionals looking to share their knowledge.

![SkillBridge Platform](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)

## Features

- **Expert Profiles**: Detailed profiles showcasing experts' experience, skills, and expertise
- **Project Listings**: Companies can post consulting opportunities and project requirements
- **Secure Authentication**: Role-based authentication system for experts and clients
- **Real-time Notifications**: Toast notifications for important updates and actions
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Modern Tech Stack**: Built with React, TypeScript, and MongoDB

## Tech Stack

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router v6
  - React Query
  - Zustand (State Management)
  - Lucide React (Icons)

- **Backend**:
  - MongoDB
  - Mongoose ODM
  - bcryptjs (Password Hashing)

## Getting Started

### Prerequisites

- Node.js 16.x or later
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skillbridge.git
   cd skillbridge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `VITE_MONGODB_URI` in `.env` with your MongoDB connection string.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
skillbridge/
├── src/
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utilities and configurations
│   │   ├── api/       # API integration
│   │   ├── models/    # MongoDB models
│   │   └── store/     # State management
│   ├── pages/         # Route components
│   ├── routes/        # Route configurations
│   └── types/         # TypeScript definitions
├── public/            # Static assets
└── ...config files
```

## Features in Detail

### For Experts
- Create detailed professional profiles
- Set availability and hourly rates
- Browse and apply to relevant projects
- Secure authentication and profile management

### For Clients
- Post consulting opportunities
- Browse expert profiles
- Set project budgets and requirements
- Direct communication with experts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/skillbridge](https://github.com/yourusername/skillbridge)

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [MongoDB](https://www.mongodb.com)
- [Vite](https://vitejs.dev)
