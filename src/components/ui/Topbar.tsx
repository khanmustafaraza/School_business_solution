import React from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const Topbar: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-4 md:px-6 py-3 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* Middle - Search (hidden on small screens) */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <button className="relative text-gray-600 hover:text-black">
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <FiUser />
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700">
            John Doe
          </span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;