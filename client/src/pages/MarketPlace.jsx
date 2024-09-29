import Product from "@/components/custom/card/product";
import CarouselComponent from "@/components/custom/carousel/Carousel";
import Loading from "@/components/custom/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductStore from "@/store/ProductStore";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const MarketPlace = () => {
  const {products,loading,getProducts} = ProductStore()

  const fetchProducts = async () => {
    const toastId = toast.loading("please wait ....")
    try {
      await getProducts()
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
      });
    }finally{
      setTimeout(()=>{
        toast.dismiss(toastId)
      },1000)
    }
  };
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
   <div>
  
    {loading && <Loading />}
        <CarouselComponent />
    <div className="flex w-1/2  mx-auto space-x-5 mb-3 mt-5">
        <Input
        type="text"
        placeholder="Search for products... for example : pottery"
        className="w-full rounded-md focus:outline-none "
        />
        <Button>
          <Search />
        </Button>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
      {
        products?.map((item,index)=>(
          <Product product={item} />
        ))
      }
      {products.length == 0 && <h2 className="text-center">no items found ....</h2>}
    </div>
   </div>
  );
};

export default MarketPlace;
