import React from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button

const Login = () => {
  return (
    <div className="flex min-h-screen">
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
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input id="password" type="password" placeholder="Enter your password" className="w-full" />
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full bg-[#8B4513] text-white">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
