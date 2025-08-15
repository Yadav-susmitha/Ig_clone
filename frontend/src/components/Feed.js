import React from 'react';
import Stories from './Stories';
import Post from './Post';
import { mockPosts } from '../mock/mockData.js';

const Feed = () => {
  const handleLike = (postId) => {
    console.log('Liked post:', postId);
    // Handle like logic
  };

  const handleSave = (postId) => {
    console.log('Saved post:', postId);
    // Handle save logic
  };

  const handleShare = (postId) => {
    console.log('Shared post:', postId);
    // Handle share logic
  };

  const handleComment = (postId, comment) => {
    console.log('Comment on post:', postId, comment);
    // Handle comment logic
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Stories Section */}
      <Stories />

      {/* Posts Feed */}
      <div className="space-y-0">
        {mockPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={handleLike}
            onSave={handleSave}
            onShare={handleShare}
            onComment={handleComment}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <p className="text-gray-500 text-sm">You're all caught up!</p>
        <p className="text-gray-400 text-xs mt-1">Check back later for more posts</p>
      </div>
    </div>
  );
};

export default Feed;