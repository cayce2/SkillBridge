import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';
import { Menu, Search, UserCircle } from 'lucide-react';

export function Navigation() {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              SkillBridge
            </Link>
            <div className="hidden md:flex space-x-8 ml-10">
              <Link to="/experts" className="text-gray-700 hover:text-indigo-600">
                Find Experts
              </Link>
              <Link to="/projects" className="text-gray-700 hover:text-indigo-600">
                Browse Projects
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for experts or projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-700">{user?.name}</span>
                <button
                  onClick={() => logout()}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <UserCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}