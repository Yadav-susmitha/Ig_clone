import React from 'react';
import { Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { mockStories } from '../mock/mockData.js';

const Stories = () => {
  const handleStoryClick = (story) => {
    if (story.isOwn) {
      // Handle creating a new story
      console.log('Create new story');
    } else {
      // Handle viewing story
      console.log('View story:', story.username);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center space-y-1 cursor-pointer group flex-shrink-0"
            onClick={() => handleStoryClick(story)}
          >
            <div className="relative">
              <div className={`p-0.5 rounded-full ${
                story.hasNew 
                  ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' 
                  : story.isOwn 
                  ? 'bg-gray-300' 
                  : 'bg-gray-200'
              }`}>
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src={story.avatar} alt={story.username} />
                  <AvatarFallback>{story.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
              
              {story.isOwn && (
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                  <Plus className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            
            <span className="text-xs text-gray-600 max-w-[64px] truncate group-hover:text-gray-900 transition-colors">
              {story.isOwn ? 'Your Story' : story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;