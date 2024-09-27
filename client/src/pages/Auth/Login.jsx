import React, { useState } from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import AuthStore from '@/store/AuthStore';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const {loading,login} = AuthStore()
  // State to manage form input
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const toastId = toast.loading("please wait , logging in ...")
    try{
      const formData = new FormData()
      formData.append("email",email)
      formData.append("password",password)
      await login(formData)
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(()=>{
        toast.dismiss(toastId)
      },1000)
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image Section */}
      <div className="hidden md:flex md:flex-grow relative justify-center items-center">
        <img
          src="/contact.jpg"  // Replace with your image URL
          alt="Login"
          className="w-full h-[70vh] object-cover"
        />
        <h2 className="absolute text-white font-bold text-5xl">Cultural Crafters</h2>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
                value={password}
                onChange={handleChange}
                required
                disabled={loading}

              />
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full bg-[#8B4513] text-white" 
              disabled={loading}
              >
               {loading ?<Loader2 className='w-4 h-4 animate-spin' />:null } Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
