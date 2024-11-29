import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Welcome Back</h1>
      <LoginForm />
    </div>
  );
}