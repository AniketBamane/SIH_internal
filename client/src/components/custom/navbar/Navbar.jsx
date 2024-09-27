import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 mt-2 rounded-lg shadow-xl">
      <div className=" text-2xl font-bold">Crafts Connect</div>
      <nav>
        <ul className="flex space-x-5">
          <li><Link to={"/marketplace"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Marketplace</Link></li>
          <li><Link to={"/workshop"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Workshops</Link></li>
          <li><Link to={"/heritage-sites"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Heritage Sites</Link></li>
        </ul>
      </nav>
      <div className="w-10 h-10 rounded-full border-2 border-blue-500">
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
</Avatar>

      </div>
    </header>
  );
};

export default Navbar;
