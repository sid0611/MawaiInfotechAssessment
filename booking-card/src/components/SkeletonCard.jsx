import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow animate-pulse w-full max-w-xs">
      <div className="w-full h-48 bg-gray-300 rounded-t-2xl"></div>

      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
        <div className="h-10 bg-gray-400 rounded w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
