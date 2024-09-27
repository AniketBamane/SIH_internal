import React, { useState } from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import { Textarea } from '@/components/ui/textarea';  // Shadcn UI Textarea
import AdminStore from '@/store/AdminStore';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const CreateSite = () => {
  // State to manage form data
  const {loading,createSite} = AdminStore()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    location: '',
  });

  const { title, content, image, location } = formData;

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleFile = (e)=>{
    setFormData({
     ...formData,
      image: e.target.files[0],
    });
  }
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const toastId = toast.loading("please wait ....")
    try{
      const newFormData = new FormData()
      newFormData.append("title",formData.title)
      newFormData.append("content",formData.content)
      newFormData.append("file",formData.image)
      newFormData.append("location",formData.location)
      await createSite(newFormData)
      setFormData({
        title: '',
        content: '',
        image: '',
        location: '',
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Site</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">Site Title</label>
          <Input id="title" type="text" value={title} onChange={handleChange} placeholder="Enter site title" required className="w-full" disabled={loading} />
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
          <Textarea id="content" value={content} onChange={handleChange} placeholder="Enter site content" required className="w-full" disabled={loading} />
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium mb-1">Image URL</label>
          <Input id="image" type="file"  onChange={handleFile} placeholder="Enter image URL" className="w-full" disabled={loading} />
        </div>

        {/* Location Field */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
          <Input id="location" type="text" value={location} onChange={handleChange} placeholder="Enter site location" required className="w-full" disabled={loading} />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" className="bg-[#8B4513] text-white" disabled={loading}>{loading && <Loader2 className='w-4 h-4 animate-spin' />}Create Site</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateSite;
