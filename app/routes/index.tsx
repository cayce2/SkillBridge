import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ExpertsPage } from '../pages/ExpertsPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { Layout } from '../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'experts', element: <ExpertsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
]);