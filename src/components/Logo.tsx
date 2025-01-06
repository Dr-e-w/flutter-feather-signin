import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative">
        <div className="text-powerhouse-orange text-4xl font-bold">
          POWER<span className="text-powerhouse-blue">HOUSE</span>
        </div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="w-6 h-6 bg-powerhouse-orange rounded-full" />
          <div className="w-12 h-1 bg-powerhouse-blue mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Logo;