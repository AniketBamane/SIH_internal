import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Profile from '../profile/Profile';
import AuthStore from '@/store/AuthStore';


const Navbar = () => {
  const {user} = AuthStore()
  return (
    <header className="flex justify-between items-center p-6 mt-2 rounded-lg shadow-xl">
    {
      user?.role != "artisan" ?
      <Link className=" text-3xl font-bold" to={"/"}>Crafts <span className='text-yellow-700'>Connect</span></Link>:
      <div className=" text-3xl font-bold" to={"/"}>Crafts <span className='text-yellow-700'>Connect</span></div>
    }
      <nav>
        <ul className="flex space-x-5">
          {
            user?.role != "artisan" ?
          <>
          <li><Link to={"/marketplace"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Marketplace</Link></li>
          <li><Link to={"/workshop"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Workshops</Link></li>
          <li><Link to={"/heritage-sites"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Heritage Sites</Link></li>
          <li><Link to={"/orders"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg"> My orders</Link></li>
          <li><Link to={"/cart"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">Cart</Link></li>
          </>
           :
           <>
          <li><Link to={"/auth/my-products"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">My Products</Link></li>
          <li><Link to={"/auth/my-workshops"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">My Workshops</Link></li>
          <li><Link to={"/auth/my-sites"} className=" hover:bg-yellow-800 hover:text-white p-2  hover:rounded-lg">My Sites</Link></li>
           </>
           }
        </ul>
      </nav>
      <div className="w-10 h-10 rounded-full border-2 border-blue-500">
    
<Popover>
  <PopoverTrigger>  
    <Avatar>
  <AvatarImage src={user?.profilePic} />
</Avatar></PopoverTrigger>
  <PopoverContent>
    <Profile />
  </PopoverContent>
</Popover>
      </div>
    </header>
  );
};

export default Navbar;
