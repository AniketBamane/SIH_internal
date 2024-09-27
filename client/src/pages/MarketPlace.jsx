import Product from "@/components/custom/card/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MarketPlace = () => {
  const product = {
    name: "Handcrafted Pottery",
    description: "Beautiful handcrafted pottery made by local artisans.",
    price: 49.99,
    category: "Pottery",
    image: "/contact.jpg",  // Replace with your image URL
    stock: 20,
  };

  return (
   <div>
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
        [1,2,1,1,1,1,].map((item,index)=>(
          <Product product={product} />
        ))
      }
    </div>
   </div>
  );
};

export default MarketPlace;
