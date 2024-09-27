import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import { Textarea } from '@/components/ui/textarea';  // Shadcn UI Textarea
import { toast } from 'sonner';
import AuthStore from '@/store/AuthStore';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // State for the form data
  const {loading,signup,verification} = AuthStore()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: verification.email,
    password: '',
    role: '',
    bio: '',
    profilePic: null,
    address: {
      street: '',
      city: '',
      state: '',
      pincode: '',
      building: '',
      landmark: '',
      country: ''
    }
  });

  useEffect(()=>{
    if(verification.email == null){
      navigate("/verification") 
    }
  },[])

  const handleFile = (e)=>{
    setFormData((prevState) => ({
     ...prevState,
      profilePic: e.target.files[0]
    }));
  }

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (["street", "city", "state", "pincode", "building", "landmark", "country"].includes(id)) {
      // Update address fields
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [id]: value,
        },
      }));
    } else {
      // Update non-address fields
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const toastId = toast.loading("please wait , signing up ....")
    try{
      const newFormData = new FormData()
      newFormData.append("name",formData.name)
      newFormData.append("email",formData.email)
      newFormData.append("password",formData.password)
      newFormData.append("role",formData.role)
      newFormData.append("bio",formData.bio)
      newFormData.append("file",formData.profilePic)
      newFormData.append("address",JSON.stringify(formData.address))
      await signup(newFormData)
      setFormData({
        name: '',
        email: '',
        password: '',
        role: '',
        bio: '',
        profilePic: null,
        address: {
          street: '',
          city: '',
          state: '',
          pincode: '',
          building: '',
          landmark: '',
          country: ''
        }
      })
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
    <div className="flex min-h-screen overflow-hidden">
      {/* Left Image Section */}
      <div className="hidden md:flex md:flex-grow relative justify-center items-center">
        <img
          src="/contact.jpg"  // Replace with your image URL
          alt="Login"
          className="w-full h-[70vh] object-cover"
        />
        <h2 className='absolute text-white font-bold text-5xl'>Cultural Crafters</h2>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-md p-12 w-full max-w-md h-[90vh] overflow-hidden relative">
          <h2 className="text-2xl font-bold text-center">Create Your Account</h2>

          <form className="overflow-y-auto h-full scrollbar-hide" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input id="name" type="text" placeholder="Enter your name" className="w-full" value={formData.name} onChange={handleChange} required disabled={loading} />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" placeholder="Enter your email" className="w-full" value={verification.email} required disabled={true}  />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <Input id="password" type="password" placeholder="Enter your password" className="w-full" value={formData.password} onChange={handleChange} required  disabled={loading} />
            </div>

            {/* Role Selection Field */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
              <select id="role" className="w-full border rounded-md p-2" value={formData.role} onChange={handleChange} required>
                <option value="">Select your role</option>
                <option value="artisan">Artisan</option>
                <option value="customer">Customer</option>
              </select>
            </div>

            {/* Bio Field */}
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium mb-1">Bio</label>
              <Textarea id="bio" placeholder="Tell us about yourself" className="w-full" value={formData.bio} onChange={handleChange} disabled={loading} />
            </div>

            {/* Profile Picture Field */}
            <div className="mb-4">
              <label htmlFor="profilePic" className="block text-sm font-medium mb-1">Profile Picture URL</label>
              <Input id="profilePic" type="file" placeholder="Enter profile picture URL" className="w-full"  onChange={handleFile} disabled={loading}  />
            </div>

            {/* Address Fields */}
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <div className="mb-4">
              <label htmlFor="street" className="block text-sm font-medium mb-1">Street</label>
              <Input id="street" type="text" placeholder="Street" className="w-full" value={formData.address.street} onChange={handleChange} disabled={loading}  />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
              <Input id="city" type="text" placeholder="City" className="w-full" value={formData.address.city} onChange={handleChange} disabled={loading}  />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
              <Input id="state" type="text" placeholder="State" className="w-full" value={formData.address.state} onChange={handleChange} disabled={loading}  />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="block text-sm font-medium mb-1">Pincode</label>
              <Input id="pincode" type="text" placeholder="Pincode" className="w-full" value={formData.address.pincode} onChange={handleChange} disabled={loading}  />
            </div>
            <div className="mb-3">
              <label htmlFor="building" className="block text-sm font-medium mb-1">Building</label>
              <Input id="building" type="text" placeholder="Building" className="w-full" value={formData.address.building} onChange={handleChange}  disabled={loading} />
            </div>
            <div className="mb-3">
              <label htmlFor="landmark" className="block text-sm font-medium mb-1">Landmark</label>
              <Input id="landmark" type="text" placeholder="Landmark" className="w-full" value={formData.address.landmark} onChange={handleChange} disabled={loading}  />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
              <Input id="country" type="text" placeholder="Country" className="w-full" value={formData.address.country} onChange={handleChange} disabled={loading} />
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="w-full bg-[#8B4513] text-white" disabled={loading} >{loading ? <Loader2 className='w-4 h-4 animate-spin' /> :null}Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
