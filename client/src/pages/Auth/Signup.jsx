import React from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import { Textarea } from '@/components/ui/textarea';  // Shadcn UI Textarea

const Signup = () => {
  return (
    <div className="flex min-h-screen overflow-hidden"> {/* Prevent window scrolling */}
      {/* Left Image Section */}
      <div className="hidden md:flex md:flex-grow relative justify-center  ">
        <img
          src="/contact.jpg"  // Replace with your image URL
          alt="Login"
          className="w-full h-full object-cover "
        />
        <h2 className='absolute text-white font-bold text-5xl'>Cultural Crafters</h2>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-md p-12 w-full max-w-md h-[90vh] overflow-hidden relative"> {/* Scrollable form container */}
          <h2 className="text-2xl font-bold  text-center">Create Your Account</h2>

          <form className="overflow-y-auto h-full scrollbar-hide"> {/* Allow scroll and hide scrollbar */}
            {/* Name Field */}
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input id="name" type="text" placeholder="Enter your name" className="w-full" />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <Input id="password" type="password" placeholder="Enter your password" className="w-full" />
            </div>

            {/* Role Selection Field */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
              <select id="role" className="w-full border rounded-md p-2">
                <option value="">Select your role</option>
                <option value="artisan">Artisan</option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Bio Field */}
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium mb-1">Bio</label>
              <Textarea id="bio" placeholder="Tell us about yourself" className="w-full" />
            </div>

            {/* Profile Picture Field */}
            <div className="mb-4">
              <label htmlFor="profilePic" className="block text-sm font-medium mb-1">Profile Picture URL</label>
              <Input id="profilePic" type="text" placeholder="Enter profile picture URL" className="w-full" />
            </div>

            {/* Address Fields */}
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <div className="mb-4">
              <label htmlFor="street" className="block text-sm font-medium mb-1">Street</label>
              <Input id="street" type="text" placeholder="Street" className="w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
              <Input id="city" type="text" placeholder="City" className="w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
              <Input id="state" type="text" placeholder="State" className="w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="block text-sm font-medium mb-1">Pincode</label>
              <Input id="pincode" type="text" placeholder="Pincode" className="w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="building" className="block text-sm font-medium mb-1">Building</label>
              <Input id="building" type="text" placeholder="Building" className="w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="landmark" className="block text-sm font-medium mb-1">Landmark</label>
              <Input id="landmark" type="text" placeholder="Landmark" className="w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
              <Input id="country" type="text" placeholder="Country" className="w-full" />
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full bg-[#8B4513] text-white">Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
