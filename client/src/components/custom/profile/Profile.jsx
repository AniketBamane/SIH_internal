import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'; // Shadcn UI Popover
import { Button } from '@/components/ui/button'; // Shadcn UI Button
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
  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-64">
      {/* Profile Picture */}
      {profile.profilePic && (
        <img
          src={profile.profilePic}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}

      {/* Profile Details */}
      <div>
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="text-gray-600">{profile.email}</p>
        <p className="text-gray-500">Role: {profile.role}</p>
      </div>

      {/* Popover Trigger */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-[#8B4513] text-white">View Details</Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 p-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">User Profile</h3>

            {/* Bio */}
            {profile.bio && (
              <div className="mb-4">
                <h4 className="font-medium">Bio</h4>
                <p className="text-sm text-gray-600">{profile.bio}</p>
              </div>
            )}

            {/* Address */}
            {profile.address && (
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-sm text-gray-600">
                  {profile.address.building}, {profile.address.street}
                  <br />
                  {profile.address.city}, {profile.address.state}, {profile.address.country} - {profile.address.pincode}
                  <br />
                  Landmark: {profile.address.landmark}
                </p>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Profile;
