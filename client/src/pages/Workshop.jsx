import Workshop from "@/components/custom/card/Workshop";
import Loading from "@/components/custom/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WorkShopStore from "@/store/WorkStore";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";



const WorkshopPage = () => {
  const {loading,workshops,getWorkshops} = WorkShopStore()
  const fetchWorkshops = async()=>{
    const toastId = toast.loading("please wait...")
    try{
      await getWorkshops()
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
  useEffect(()=>{
   fetchWorkshops()  // fetch workshops on page load
  },[])
  return (

    <div className="container mx-auto px-4 py-8">
      <div className="flex w-1/2  mx-auto space-x-5 mb-3">
        <Input
        type="text"
        placeholder="Search for workshops... for example : pottery"
        className="w-full rounded-md focus:outline-none "
        />
        <Button>
          <Search />
        </Button>
      </div>
      {workshops.length ==0 && <h2>no items found ...</h2>}
      {/* First Workshop (Full Width) */}
      {workshops?.length > 0 && <Workshop workshop={workshops[0]} isFirst={true} />}

      {/* Other Workshops in Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops?.slice(1).map((workshop, index) => (
          <Workshop key={index} workshop={workshop} isFirst={false} />
        ))}
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default WorkshopPage;
