import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'; // Shadcn UI Popover
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import AuthStore from '@/store/AuthStore';
import { toast } from 'sonner';
import Loading from '../Loading';
const profile = {
  name: "John Doe",
  email: "johndoe@example.com",
  role: "artisan",
  bio: "I am an artisan specializing in handcrafted pottery.",
  profilePic: "/contact.jpg", // Replace with actual image URL
  address: {
    street: "123 Main St",
    city: "Springfield",
    state: "Illinois",
    pincode: "62701",
    building: "Apt 4B",
    landmark: "Near Central Park",
    country: "USA",
  },
};

const Profile = () => {
  const {logout,loading ,user} = AuthStore()
  const handleLogout = async()=>{
    const toastId = toast.loading("please wait ....")
    try{
     await logout()
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(() => {
        toast.dismiss(toastId)
      }, 2000);
    }
  }
  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-64">
      {/* Profile Picture */}
      {user?.profilePic && (
        <img
          src={user?.profilePic}
          alt={user?.name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}

      {/* Profile Details */}
      <div>
        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>
        <p className="text-gray-500">Role: {user?.role}</p>
      </div>

      {/* Popover Trigger */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-[#8B4513] text-white">View Details</Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 p-4">
          {loading && <Loading />}
          <div>
            <h3 className="text-lg font-semibold mb-2">User Profile</h3>

            {/* Bio */}
            {profile.bio && (
              <div className="mb-4">
                <h4 className="font-medium">Bio</h4>
                <p className="text-sm text-gray-600">{user?.bio}</p>
              </div>
            )}

            {/* Address */}
            {user?.address && (
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-sm text-gray-600">
                  {user?.address.building}, {user?.address.street}
                  <br />
                  {user?.address.city}, {user?.address.state}, {user?.address.country} - {user?.address.pincode}
                  <br />
                  Landmark: {user?.address.landmark}
                </p>
                <Button className="bg-[#8B4513] text-white mt-2" onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Profile;
