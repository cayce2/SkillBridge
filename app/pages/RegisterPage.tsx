import React, { useState } from 'react';
import { useAuthStore } from '../lib/store';
import { registerUser } from '../lib/api';
import { validatePassword } from '../lib/auth';

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'expert' | 'client'>('client');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const login = useAuthStore((state) => state.login);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    if (newPassword) {
      const validation = validatePassword(newPassword);
      setPasswordError(validation.isValid ? null : validation.message || null);
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordError) return;
    
    setIsLoading(true);
    try {
      const user = await registerUser({ email, password, name, role });
      login(user);
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Create an Account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${
              passwordError ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {passwordError && (
            <p className="mt-1 text-sm text-red-600">{passwordError}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            Password must contain at least 8 characters, including uppercase, lowercase, 
            numbers, and special characters.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Account Type</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="client"
                checked={role === 'client'}
                onChange={(e) => setRole(e.target.value as 'client')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Client</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="expert"
                checked={role === 'expert'}
                onChange={(e) => setRole(e.target.value as 'expert')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Expert</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !!passwordError}
          className={`w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
}