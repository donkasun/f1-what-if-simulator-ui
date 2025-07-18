import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'F1 What-If Simulator' }) => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex items-center space-x-4">
            {/* Add navigation items here if needed */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 