// components/Sidebar.tsx
import React from 'react';
import NavLink from './Navlinks';
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineTool,
  AiOutlineSound
} from 'react-icons/ai';
import { CiWallet,CiDeliveryTruck } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";
import { BsBarChartFill ,BsLightningCharge} from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const SidebarSection: React.FC = () => {
  const navLinks = [
    { Icon: AiOutlineHome, label: 'Home', href: '#home' },
    { Icon: FaClipboardList, label: 'Orders', href: '#orders' },
    { Icon: AiOutlineAppstore, label: 'Products', href: '#products' },
    { Icon: FiTruck, label: 'Delivery', href: '#delivery' },
    { Icon: AiOutlineSound, label: 'Marketing', href: '#marketing' },
    { Icon: BsBarChartFill, label: 'Analytics', href: '#analytics' },
    { Icon: MdPayments, label: 'Payments', href: '#payments' },
    { Icon: AiOutlineTool, label: 'Tools', href: '#tools' },
    { Icon: TbDiscount2, label: 'Discounts', href: '#discounts' },
    { Icon: MdPeopleAlt, label: 'Audience', href: '#audience' },
    { Icon: IoIosColorPalette, label: 'Appearance', href: '#appearance' },
    { Icon: BsLightningCharge, label: 'Plugin', href: '#plugins' },
   
  ];

  return (
    <aside className="fixed h-screen w-64 bg-[#1E2640] text-white z-60">
      <div className="flex  items-center  px-3 mt-3">
        <div className='w-3/10 '>
        <Image  className='rounded-md' src="assets/company-logo.svg" alt="Company Logo" width={45} height={45} />
        </div>
        <div className='flex flex-col w-5/10 justify-start ml-4 mr-20' >
            <span className="text-md font-bold">Nishyan</span>
            <span className="text-xs font-gray-500 mt-1 underline hover:cursor-pointer text-[#D1D4D8]">Visit Store</span>
        </div>
        <div className='w-2/10 hover:cursor-pointer justify-end' >
            <IoIosArrowDown size='30px' />
        </div>
        
      </div>
      <nav className="mt-10 text-[#D1D4D8]">
        {navLinks.map((link, index) => (
          <NavLink key={index} Icon={link.Icon} label={link.label} href={link.href} />
        ))}
      </nav>
      <div className="absolute bottom-0 my-4 mx-4 text-[#D1D4D8]">
        <div className='flex bg-[#363C53] p-3 px-6 rounded-md'>
          <div className='flex items-center justify-center bg-[#485065] p-1 rounded-md'>
            <CiWallet size='40px' />
          </div>
          <div className="flex flex-col ml-3">
            <span className="text-sm">Available credits</span>
            <span className="font-bold text-lg">222.10</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarSection;
