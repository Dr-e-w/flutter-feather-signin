import React from "react";
import { Heart, MessageCircle } from "lucide-react";

interface PostProps {
  avatar: string;
  username: string;
  timestamp: string;
  content: string;
  image?: string;
}

const Post = ({ avatar, username, timestamp, content, image }: PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center mb-3">
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{username}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{content}</p>
      {image && (
        <img
          src={image}
          alt="Post content"
          className="w-full h-64 object-cover rounded-lg mb-3"
        />
      )}
      <div className="flex space-x-4">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-powerhouse-orange transition-colors">
          <Heart className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-powerhouse-blue transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

export default Post;