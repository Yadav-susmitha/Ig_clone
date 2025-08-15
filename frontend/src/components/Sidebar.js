import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { mockCurrentUser, mockSuggestedUsers } from '../mock/mockData.js';

const Sidebar = () => {
  const handleFollow = (userId) => {
    console.log('Follow user:', userId);
    // Handle follow logic here
  };

  const handleSeeAll = () => {
    console.log('See all suggestions');
    // Navigate to suggestions page
  };

  return (
    <div className="hidden lg:block w-80 p-6 space-y-6">
      {/* Current User Profile */}
      <div className="flex items-center space-x-3">
        <Avatar className="h-14 w-14">
          <AvatarImage src={mockCurrentUser.avatar} alt={mockCurrentUser.username} />
          <AvatarFallback>{mockCurrentUser.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-semibold text-sm">{mockCurrentUser.username}</div>
          <div className="text-gray-500 text-sm">{mockCurrentUser.fullName}</div>
        </div>
        <Button variant="ghost" size="sm" className="text-blue-500 font-semibold text-sm">
          Switch
        </Button>
      </div>

      {/* Suggestions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold text-sm">Suggested for you</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleSeeAll}
            className="text-black font-semibold text-sm p-0"
          >
            See All
          </Button>
        </div>

        <div className="space-y-3">
          {mockSuggestedUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-semibold text-sm">{user.username}</div>
                <div className="text-gray-500 text-xs">
                  Followed by {user.mutualFollowers} others
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFollow(user.id)}
                className="text-blue-500 font-semibold text-sm"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-xs text-gray-400 space-y-2">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">About</a>
          <span>•</span>
          <a href="#" className="hover:underline">Help</a>
          <span>•</span>
          <a href="#" className="hover:underline">Press</a>
          <span>•</span>
          <a href="#" className="hover:underline">API</a>
          <span>•</span>
          <a href="#" className="hover:underline">Jobs</a>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>•</span>
          <a href="#" className="hover:underline">Locations</a>
        </div>
        <div className="pt-2">
          <span>© 2025 INSTACLONE</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;