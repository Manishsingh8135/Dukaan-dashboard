// components/NavLink.tsx
import React from 'react';

type NavLinkProps = {
  Icon: React.ElementType;
  label: string;
  href: string;
  iconSize?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ Icon, label, href, iconSize = '25px' }) => {
  return (
    <a href={href} className="flex items-center px-6 py-2 text-sm hover:bg-gray-700 hover:mx-2 hover:rounded-md">
      <Icon className="mr-3" size={iconSize} /> {label}
    </a>
  );
};

export default NavLink;
