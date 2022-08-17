import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[100%] flex space-x-2 items-center justify-center border-b pb-2">
      <div className="flex-1">
        <input className="bg-gray-200 p-2 rounded-full" />
      </div>
      <span className="block flex-1 cursor-pointer">Search</span>
    </div>
  );
};

export default SearchBar;
