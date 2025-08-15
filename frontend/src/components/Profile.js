import React, { useState } from 'react';
import { Settings, Grid, Bookmark, Heart, MessageCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mockCurrentUser, mockPosts } from '../mock/mockData.js';

const Profile = ({ user = mockCurrentUser }) => {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Filter posts by user for the profile
  const userPosts = mockPosts.filter(post => post.userId === user.id || user.id === '0');

  const PostGrid = ({ posts }) => (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map((post) => (
        <div key={post.id} className="relative aspect-square group cursor-pointer">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5 fill-current" />
                <span className="font-semibold">{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-5 w-5 fill-current" />
                <span className="font-semibold">{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <h1 className="text-2xl font-light">{user.username}</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Edit profile
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start space-x-8 mb-4">
            <div className="text-center">
              <span className="font-semibold text-lg">{user.posts}</span>
              <p className="text-gray-600 text-sm">posts</p>
            </div>
            <div className="text-center">
              <span className="font-semibold text-lg">{user.followers.toLocaleString()}</span>
              <p className="text-gray-600 text-sm">followers</p>
            </div>
            <div className="text-center">
              <span className="font-semibold text-lg">{user.following}</span>
              <p className="text-gray-600 text-sm">following</p>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-md">
            <h2 className="font-semibold">{user.fullName}</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 border-t border-gray-200 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="posts" 
            className="flex items-center space-x-1 py-4 border-t-2 border-transparent data-[state=active]:border-black data-[state=active]:text-black text-gray-500 bg-transparent"
          >
            <Grid className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Posts</span>
          </TabsTrigger>
          <TabsTrigger 
            value="saved" 
            className="flex items-center space-x-1 py-4 border-t-2 border-transparent data-[state=active]:border-black data-[state=active]:text-black text-gray-500 bg-transparent"
          >
            <Bookmark className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Saved</span>
          </TabsTrigger>
          <TabsTrigger 
            value="tagged" 
            className="flex items-center space-x-1 py-4 border-t-2 border-transparent data-[state=active]:border-black data-[state=active]:text-black text-gray-500 bg-transparent"
          >
            <Heart className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">Tagged</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-8">
          {userPosts.length > 0 ? (
            <PostGrid posts={userPosts} />
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-light mb-2">No Posts Yet</h3>
              <p className="text-gray-500">When you share photos, they'll appear on your profile.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Bookmark className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-light mb-2">Save posts you like</h3>
            <p className="text-gray-500">Bookmark posts to easily find them again.</p>
          </div>
        </TabsContent>

        <TabsContent value="tagged" className="mt-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-light mb-2">Photos of you</h3>
            <p className="text-gray-500">When people tag you in photos, they'll appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;