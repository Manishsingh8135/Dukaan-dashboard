import React from 'react';
import { AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineBell, AiOutlineCaretDown } from 'react-icons/ai';

const Navbar: React.FC = () => {
    const iconSize = '20';
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white text-black w-full border-b border-gray-300 top-0 sticky ">
            <div className="flex items-center gap-2 w-1/3">
                <span className="text-xl">Payments</span>
                <div className='flex items-center text-gray-500'>
                    <AiOutlineQuestionCircle size={iconSize} className="cursor-pointer" />
                    <span className="cursor-pointer text-sm">How it works</span>
                </div>
            </div>
            <div className="flex items-center bg-gray-200 rounded-md justify-center w-1/3 px-16">
                <AiOutlineSearch size={iconSize} className="text-gray-500" />
                <input type="text" placeholder="Search features, tutorials, etc." className="p-2 w-full focus:outline-none bg-transparent" />
            </div>
            <div className='flex items-center gap-4 w-1/3 justify-end'>
                <div className='rounded-full p-2 bg-gray-200'>
                    <AiOutlineBell size={iconSize} className="cursor-pointer" />
                </div>
                <div className='rounded-full p-2 bg-gray-200'>
                    <AiOutlineCaretDown size={iconSize} className="cursor-pointer" />
                </div>

            </div>
        </div>
    );
};

export default Navbar;
