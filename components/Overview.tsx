// components/StatisticsSection.tsx
import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const OverviewSection: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] px-4 sm:px-6 py-6  text-black mx-auto max-w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl mb-4 sm:mb-0">Overview</h2>
        <div className="relative">
          <button className="px-4 py-2 bg-gray-100 text-sm border-2 border-gray-300 rounded-md flex items-center">
            Last Month <AiOutlineDown className="ml-2" />
          </button>

        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm  border-gray-200 hover:cursor-pointer  ">
          <h3 className="text-xl text-gray-600 mb-4">Online orders</h3>
          <p className="text-4xl">231</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm  border-gray-200 hover:cursor-pointer  ">
          <h3 className="text-xl text-gray-600 mb-4">Amount received</h3>
          <p className="text-4xl">₹23,92,312.19</p>
        </div>

      </div>
    </div>
  );
};

export default OverviewSection;
