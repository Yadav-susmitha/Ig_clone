// Mock data for Instagram clone

export const mockUsers = [
  {
    id: '1',
    username: 'johndoe',
    fullName: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    isFollowing: false,
    isVerified: true,
    bio: 'Photographer & Travel Enthusiast 📸✈️',
    posts: 127,
    followers: 1543,
    following: 892
  },
  {
    id: '2',
    username: 'sarasmith',
    fullName: 'Sara Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a0?w=150&h=150&fit=crop&crop=face',
    isFollowing: true,
    isVerified: false,
    bio: 'Artist & Coffee Lover ☕🎨',
    posts: 89,
    followers: 2341,
    following: 456
  },
  {
    id: '3',
    username: 'mikejohnson',
    fullName: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    isFollowing: false,
    isVerified: false,
    bio: 'Chef & Food Blogger 🍳👨‍🍳',
    posts: 234,
    followers: 5672,
    following: 234
  }
];

export const mockCurrentUser = {
  id: '0',
  username: 'you',
  fullName: 'Your Name',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
  bio: 'Living my best life! 🌟',
  posts: 42,
  followers: 1234,
  following: 567
};

export const mockStories = [
  {
    id: '1',
    userId: '0',
    username: 'Your Story',
    avatar: mockCurrentUser.avatar,
    hasNew: false,
    isOwn: true
  },
  {
    id: '2',
    userId: '1',
    username: 'johndoe',
    avatar: mockUsers[0].avatar,
    hasNew: true,
    isOwn: false
  },
  {
    id: '3',
    userId: '2',
    username: 'sarasmith',
    avatar: mockUsers[1].avatar,
    hasNew: true,
    isOwn: false
  },
  {
    id: '4',
    userId: '3',
    username: 'mikejohnson',
    avatar: mockUsers[2].avatar,
    hasNew: false,
    isOwn: false
  }
];

export const mockPosts = [
  {
    id: '1',
    userId: '1',
    username: 'johndoe',
    userAvatar: mockUsers[0].avatar,
    isVerified: true,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    caption: 'Beautiful sunset at the mountains! Nature never fails to amaze me 🌅 #sunset #mountains #nature #photography',
    likes: 2847,
    comments: 156,
    shares: 23,
    timeAgo: '2h',
    isLiked: false,
    isSaved: false,
    location: 'Rocky Mountains, Colorado'
  },
  {
    id: '2',
    userId: '2',
    username: 'sarasmith',
    userAvatar: mockUsers[1].avatar,
    isVerified: false,
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&h=600&fit=crop',
    caption: 'New coffee art piece I just finished! ☕✨ What do you think? #coffee #art #latte #coffeeart',
    likes: 1234,
    comments: 87,
    shares: 12,
    timeAgo: '4h',
    isLiked: true,
    isSaved: true,
    location: 'Downtown Cafe'
  },
  {
    id: '3',
    userId: '3',
    username: 'mikejohnson',
    userAvatar: mockUsers[2].avatar,
    isVerified: false,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=600&fit=crop',
    caption: 'Homemade pizza night! 🍕 Nothing beats fresh ingredients and good company. Recipe in my bio! #homemade #pizza #cooking #foodie',
    likes: 3567,
    comments: 234,
    shares: 45,
    timeAgo: '6h',
    isLiked: false,
    isSaved: false,
    location: 'Home Kitchen'
  },
  {
    id: '4',
    userId: '1',
    username: 'johndoe',
    userAvatar: mockUsers[0].avatar,
    isVerified: true,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=600&fit=crop',
    caption: 'Urban exploration at its finest! This abandoned building has so much character 🏢 #urban #exploration #photography #architecture',
    likes: 4891,
    comments: 298,
    shares: 67,
    timeAgo: '1d',
    isLiked: true,
    isSaved: false,
    location: 'Downtown District'
  }
];

export const mockComments = {
  '1': [
    {
      id: '1',
      userId: '2',
      username: 'sarasmith',
      avatar: mockUsers[1].avatar,
      text: 'Absolutely stunning! 😍',
      timeAgo: '1h',
      likes: 12
    },
    {
      id: '2',
      userId: '3',
      username: 'mikejohnson',
      avatar: mockUsers[2].avatar,
      text: 'Great shot! The lighting is perfect 📸',
      timeAgo: '45m',
      likes: 8
    }
  ],
  '2': [
    {
      id: '3',
      userId: '1',
      username: 'johndoe',
      avatar: mockUsers[0].avatar,
      text: 'Amazing work! Coffee art is so underrated ☕',
      timeAgo: '2h',
      likes: 15
    }
  ]
};

export const mockSuggestedUsers = [
  {
    id: '4',
    username: 'alexwilson',
    fullName: 'Alex Wilson',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
    mutualFollowers: 5,
    isFollowing: false
  },
  {
    id: '5',
    username: 'emilybrown',
    fullName: 'Emily Brown',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    mutualFollowers: 12,
    isFollowing: false
  },
  {
    id: '6',
    username: 'davidlee',
    fullName: 'David Lee',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    mutualFollowers: 3,
    isFollowing: false
  }
];