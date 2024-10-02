import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UpdateWorkshop from "../form/UpdateWorkshop";
import AdminStore from "@/store/AdminStore";
import { toast } from "sonner";
import WorkShopStore from "@/store/WorkStore";
import { Loader2, XCircleIcon } from "lucide-react";

const Workshop = ({ workshop, isFirst=false ,page="" }) => {

  const {deleteWorkshop,loading} = AdminStore()
  const {bookWorkshop,loading:workshopLoading,removeWorkshop} = WorkShopStore() 

  const handleDelete = async()=>{
    const toastId = toast.loading("please wait ....")
    try{
     await deleteWorkshop(workshop._id)
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(() => {
        toast.dismiss(toastId)
      }, 1000);
    }
  }
  const handleJoinWorkshop = async()=>{
    const toastId = toast.loading("please wait....")
    try{
     await bookWorkshop(workshop)
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(() => {
        toast.dismiss(toastId)
      }, 1000);
    }
  }

  const handleRemoveWorkshop  = async()=>{
    const toastId = toast.loading("please wait....")
    try{
     await removeWorkshop(workshop._id)
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(() => {
        toast.dismiss(toastId)
      }, 1000);
    }
  }

  console.log(page,"------")

  if (isFirst) {
    return (
      <Card className="w-full mb-8 shadow-lg rounded-lg overflow-hidden">
        {/* Workshop Image */}
        {workshop?.image && (
          <img src={workshop?.image} alt={workshop?.title} className="w-full h-64 object-cover" />
        )}

        {/* Workshop? Content */}
        <CardHeader className="p-5 bg-gray-50">
          <CardTitle className="text-3xl font-semibold">{workshop?.title}</CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <p className="text-base text-gray-700 mb-4">{workshop?.description}</p>
          <p className="text-sm text-gray-500">Location: <span className="font-medium">{workshop?.location}</span></p>
        </CardContent>

        {/* Call to Action Button */}
        <CardFooter className="p-6 flex justify-end">
         {
          page==="my-workshops" ? null :
          
            page==="myworkshops" ?
            <div className="space-x-2">
            <Dialog>
              <DialogTrigger>
              <Button className="bg-[#8B4513] text-white" disabled={loading}>Edit Workshop</Button>
              </DialogTrigger>
              <DialogContent>
                <UpdateWorkshop id={workshop._id} />
              </DialogContent>
            </Dialog>
            <Button className="bg-red-500 text-white" onClick={()=>handleDelete()} disabled={loading}>Delete</Button>
            </div>
            :
            <Button className="bg-[#8B4513] text-white" onClick={handleJoinWorkshop} disabled={workshopLoading}>{workshopLoading && <Loader2 className="w-4 h-4 animate-spin" />} Join Workshop</Button>
           
         }
        </CardFooter>
      </Card>
    );
  }

  // Other workshop cards in the grid
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      {/* Workshop Image */}
      {workshop.image && (
        <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
      )}

      {/* Workshop Content */}
      <div className="p-4 flex justify-between">
        <CardTitle className="text-2xl font-semibold">{workshop.title}</CardTitle>
        <XCircleIcon className="inline cursor-pointer" onClick={handleRemoveWorkshop} disabled={workshopLoading} />
      </div>

      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
        <p className="text-sm text-gray-500">Location: <span className="font-medium">{workshop.location}</span></p>
      </CardContent>

      {/* Call to Action Button */}
      <CardFooter className="p-4 flex justify-end">
      {
         page==="my-workshops" ? null :
         page==="myworkshops" ?
         <div className="space-x-2">
         <Dialog>
           <DialogTrigger>
           <Button className="bg-[#8B4513] text-white" disabled={loading}>Edit Workshop</Button>
           </DialogTrigger>
           <DialogContent>
             <UpdateWorkshop id={workshop._id} />
           </DialogContent>
         </Dialog>
         <Button className="bg-red-500 text-white" onClick={()=>handleDelete()} disabled={loading}>Delete</Button>
         </div>
         :
         <Button className="bg-[#8B4513] text-white">Join Workshop</Button>
         }
      </CardFooter>
    </Card>
  );
};

export default Workshop;