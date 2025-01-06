import React from "react";
import Post from "../components/Post";
import BottomNav from "../components/BottomNav";

const Feed = () => {
  const posts = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/150?img=1",
      username: "Jane Doe",
      timestamp: "Today - 11:05 AM",
      content: "Did some stretching and guided meditation near the Grand Canyon!",
      image: "public/lovable-uploads/e3bb0048-f7c7-4a25-a4dc-57e316d8b76b.png",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/150?img=2",
      username: "John Doe",
      timestamp: "Today - 3:03 PM",
      content: "Hey Guys! Who else is going to cardio kickboxing tomorrow morning?",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto p-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Feed;