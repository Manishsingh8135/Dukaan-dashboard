import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSortAlt2 } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
const SearchBar: React.FC = () => {
    const iconsize = '25px'
    return (
        <div className="flex items-center mb-4 justify-between text-gray-500 ">
            <div className="flex border-2  border-gray-300 rounded overflow-hidden">

                <button aria-label="Search" title="Search" className="flex items-center justify-center px-4">
                    <AiOutlineSearch />
                </button>
                <input type="text" className=" py-2 w-full bg-transparent outline-none text-sm" placeholder="Search by order ID..." />
            </div>
            <div className='flex  gap-3'>
                <div className='border-2 rounded-md border-gray-300 px-4 py-2 flex gap-2'><span>Sort</span> <BiSortAlt2 size={iconsize} /></div>
                <div className='border-2 rounded-md border-gray-300 p-4 py-2'><MdOutlineFileDownload size={iconsize} /></div>
            </div>
        </div>
    );
};

export default SearchBar;
