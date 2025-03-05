import React from 'react';

const Loading = () => {
  return (
    <div className="h-[60vh] inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
