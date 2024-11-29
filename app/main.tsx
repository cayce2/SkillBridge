import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes';
import { AlertProvider } from './lib/toast';
import { connectDB } from './lib/db';
import './index.css';

const queryClient = new QueryClient();

// Initialize database connection
connectDB().catch(console.error);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </QueryClientProvider>
  </StrictMode>
);