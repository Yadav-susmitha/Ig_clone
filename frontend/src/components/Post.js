import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { mockComments } from '../mock/mockData.js';

const Post = ({ post, onLike, onSave, onShare, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [localLikes, setLocalLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLocalLikes(isLiked ? localLikes - 1 : localLikes + 1);
    onLike && onLike(post.id);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave && onSave(post.id);
  };

  const handleShare = () => {
    onShare && onShare(post.id);
    // Could show share modal here
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment && onComment(post.id, newComment);
      setNewComment('');
    }
  };

  const postComments = mockComments[post.id] || [];

  return (
    <article className="bg-white border border-gray-200 rounded-lg mb-6">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.userAvatar} alt={post.username} />
            <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm">{post.username}</span>
              {post.isVerified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            {post.location && (
              <span className="text-xs text-gray-500">{post.location}</span>
            )}
          </div>
        </div>
        
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post content"
          className="w-full aspect-square object-cover"
          onDoubleClick={handleLike}
        />
      </div>

      {/* Post Actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`p-0 hover:bg-transparent ${isLiked ? 'text-red-500' : 'text-gray-700'}`}
            >
              <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="p-0 text-gray-700 hover:bg-transparent"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="p-0 text-gray-700 hover:bg-transparent"
            >
              <Send className="h-6 w-6" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSave}
            className={`p-0 hover:bg-transparent ${isSaved ? 'text-black' : 'text-gray-700'}`}
          >
            <Bookmark className={`h-6 w-6 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <span className="font-semibold text-sm">{localLikes.toLocaleString()} likes</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.username}</span>
          <span className="text-sm">{post.caption}</span>
        </div>

        {/* Comments Section */}
        {postComments.length > 0 && (
          <div className="mb-2">
            <button
              onClick={() => setShowComments(!showComments)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {showComments ? 'Hide' : `View all ${postComments.length}`} comments
            </button>
            
            {showComments && (
              <div className="mt-2 space-y-2">
                {postComments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={comment.avatar} alt={comment.username} />
                      <AvatarFallback>{comment.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <span className="font-semibold text-sm mr-2">{comment.username}</span>
                      <span className="text-sm">{comment.text}</span>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{comment.timeAgo}</span>
                        <button className="text-xs text-gray-500 hover:text-gray-700">
                          {comment.likes} likes
                        </button>
                        <button className="text-xs text-gray-500 hover:text-gray-700">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Time */}
        <div className="text-xs text-gray-500 mb-3">{post.timeAgo}</div>

        {/* Add Comment */}
        <form onSubmit={handleComment} className="flex items-center space-x-2 pt-3 border-t border-gray-100">
          <Input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 border-none bg-transparent text-sm focus:ring-0 px-0"
          />
          {newComment.trim() && (
            <Button type="submit" variant="ghost" size="sm" className="text-blue-500 font-semibold text-sm p-0">
              Post
            </Button>
          )}
        </form>
      </div>
    </article>
  );
};

export default Post;