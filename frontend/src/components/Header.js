import React, { useState } from 'react';
import { Heart, Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { mockCurrentUser } from '../mock/mockData.js';

const Header = ({ currentPage, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { icon: Home, id: 'home', label: 'Home' },
    { icon: Search, id: 'search', label: 'Search' },
    { icon: PlusSquare, id: 'create', label: 'Create' },
    { icon: MessageCircle, id: 'messages', label: 'Messages' },
    { icon: Heart, id: 'notifications', label: 'Notifications' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            onClick={() => setCurrentPage('home')}
          >
            Instaclone
          </h1>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xs mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  currentPage === item.id 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
                aria-label={item.label}
              >
                <Icon className="h-6 w-6" />
              </button>
            );
          })}
          
          {/* Profile */}
          <button
            onClick={() => setCurrentPage('profile')}
            className="flex items-center space-x-2"
          >
            <Avatar className="h-8 w-8 ring-2 ring-transparent hover:ring-gray-300 transition-all duration-200">
              <AvatarImage src={mockCurrentUser.avatar} alt={mockCurrentUser.username} />
              <AvatarFallback>{mockCurrentUser.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          </button>
        </nav>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;