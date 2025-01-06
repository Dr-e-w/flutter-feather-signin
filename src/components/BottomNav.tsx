import React from "react";
import { Home, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/feed" className="text-powerhouse-blue">
          <Home className="w-6 h-6" />
        </Link>
        <button className="bg-powerhouse-blue text-white p-3 rounded-full -mt-8 shadow-lg hover:bg-powerhouse-orange transition-colors">
          <Plus className="w-6 h-6" />
        </button>
        <Link to="/profile" className="text-gray-400">
          <User className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;