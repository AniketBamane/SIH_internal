import React, { useState } from 'react';
import { Input } from '@/components/ui/input'; // Shadcn UI Input
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { Textarea } from '@/components/ui/textarea'; // Shadcn UI Textarea
import { toast } from 'sonner';
import AdminStore from '@/store/AdminStore';
import { Loader2 } from 'lucide-react';


const UpdateProduct = ({id}) => {
  const {updateProduct,loading} = AdminStore()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
  });

  const { name, description, price, category, stock, image } = formData;

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
      newFormData.append("name",name)
      newFormData.append("description",description)
      newFormData.append("price",price)
      newFormData.append("category",category)
      newFormData.append("stock",stock)
      newFormData.append("file",image)
      await updateProduct(id,newFormData)
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: '',
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
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Product</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Product Name</label>
          <Input id="name" type="text" value={name} onChange={handleChange} placeholder="Enter product name"  className="w-full"
          disabled={loading}
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <Textarea id="description" value={description} onChange={handleChange} placeholder="Enter product description"  className="w-full"  disabled={loading} />
        </div>

        {/* Price Field */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">Price ($)</label>
          <Input id="price" type="number" value={price} onChange={handleChange} placeholder="Enter product price"  className="w-full"  disabled={loading} />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
          <Input id="category" type="text" value={category} onChange={handleChange} placeholder="Enter product category"  className="w-full"  disabled={loading} />
        </div>

        {/* Stock Field */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-medium mb-1">Stock Quantity</label>
          <Input id="stock" type="number" value={stock} onChange={handleChange} placeholder="Enter stock quantity"  className="w-full"  disabled={loading} />
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium mb-1">Image URL</label>
          <Input id="image" type="file" onChange={handleFile} placeholder="Enter image URL" className="w-full"  disabled={loading} />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" className="bg-[#8B4513] text-white"  disabled={loading}>{loading && <Loader2 className='w-4 h-4 animate-spin' />}Create Product</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct