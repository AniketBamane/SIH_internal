import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import Product from '@/components/custom/card/product';
import AdminStore from '@/store/AdminStore';
import Loading from '@/components/custom/Loading';
import { toast } from 'sonner';

const MyProducts = () => {
  // Sample product data
  const {getProducts,products,loading,deleteProduct} = AdminStore()
  const fetchProducts = async()=>{
    try{
      await getProducts()
    }catch(err){
      console.error(err.message)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  const handleDelete = async(id)=>{
    const toastId = toast.loading("please wait, deleting product...")
    try{
      await deleteProduct(id)
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(()=>{
      toast.dismiss(toastId)
      },1000)
    }
  }
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Handmade Pottery",
  //     description: "Beautiful handmade pottery created with traditional methods.",
  //     price: 49.99,
  //     category: "Artisan",
  //     image: "/images/pottery.jpg",  // Replace with actual image URLs
  //     stock: 10
  //   },
  //   {
  //     id: 2,
  //     name: "Wooden Crafts",
  //     description: "Exquisite wooden crafts, perfect for home decor.",
  //     price: 79.99,
  //     category: "Crafts",
  //     image: "/images/wooden_crafts.jpg",
  //     stock: 5
  //   },
  //   {
  //     id: 3,
  //     name: "Textile Weaving",
  //     description: "Handwoven textiles created by local artisans.",
  //     price: 59.99,
  //     category: "Textiles",
  //     image: "/images/textile.jpg",
  //     stock: 20
  //   }
  // ]);

  // Handle deleting a product
  // const handleDelete = (id) => {
  //   const updatedProducts = products.filter(product => product.id !== id);
  //   setProducts(updatedProducts);
  // };
 console.log(products)
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">My Products</h2>
      </div>

      {/* Products Grid */}
        {loading && <Loading />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length == 0 && <h2>no items found ....</h2>}
        {products?.map(product => (
          <div key={product._id} className="relative">
            <Product product={product} page="myproducts" />
            
            {/* Delete Button */}
            <Button
              className="absolute top-2 right-2 bg-red-500 text-white"
              onClick={() => {
                handleDelete(product._id);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
