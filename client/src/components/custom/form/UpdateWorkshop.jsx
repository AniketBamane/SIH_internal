import React, { useState } from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import { Textarea } from '@/components/ui/textarea';  // Shadcn UI Textarea
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import AdminStore from '@/store/AdminStore';
const UpdateWorkshop = ({id}) => {
  const {loading,updateWorkshop} = AdminStore()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    price: '',
    image: '',
  });

  const { title, description, date, price, image } = formData;

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleFile = (e) => {
    setFormData({
     ...formData,
      image: e.target.files[0],
    });
  }
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const toastId = toast.loading("please wait...");
    try{
      const newFormData = new FormData()
      newFormData.append("title",title)
      newFormData.append("description",description)
      newFormData.append("date",date)
      newFormData.append("price",price)
      newFormData.append("file",image)
      await updateWorkshop(id,newFormData)
      setFormData({
        title: '',
        description: '',
        date: '',
        price: '',
        image: '',
      })
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(()=>{
        toast.dismiss(toastId);
      },1000)
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">update Workshop</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">Workshop Title</label>
          <Input id="title" type="text" value={title} onChange={handleChange} placeholder="Enter workshop title"  className="w-full" disabled={loading} />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <Textarea id="description" value={description} onChange={handleChange} placeholder="Enter workshop description"  className="w-full" disabled={loading} />
        </div>

        {/* Date Field */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
          <Input id="date" type="date" value={date} onChange={handleChange}  className="w-full" disabled={loading}/>
        </div>

        {/* Price Field */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">Price ($)</label>
          <Input id="price" type="number" value={price} onChange={handleChange} placeholder="Enter workshop price"  className="w-full" disabled={loading} />
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium mb-1">Image URL</label>
          <Input id="image" type="file"  onChange={handleFile} placeholder="Enter image URL" className="w-full" disabled={loading} />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" className="bg-[#8B4513] text-white" disabled={loading}>{loading && <Loader2 className='w-4 h-4 animate-spin' />}Create Workshop</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateWorkshop