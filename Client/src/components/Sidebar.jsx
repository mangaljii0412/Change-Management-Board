import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: '📊' },
    { path: '/change-update', name: 'Change Update', icon: '📝' },
  ];

  return (
    <div className="pt-16 bg-slate-300 text-white w-64 min-h-screen flex flex-col">
      {/* Filter Button */}
      <div className="p-4 border-b border-slate-700">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>Filter</span>
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-grow p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-blue-600 text-lg font-medium'
                : 'hover:bg-slate-700 text-base'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Settings at bottom */}
      <div className="p-4 border-t border-slate-700">
        <Link
          to="/settings"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-all duration-200"
        >
          <span className="text-xl">⚙️</span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
