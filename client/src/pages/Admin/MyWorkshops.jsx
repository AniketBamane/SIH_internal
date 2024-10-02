import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import Workshop from '@/components/custom/card/Workshop';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CreateWorkshop from '@/components/custom/form/CreateWorkshop';
import Loading from '@/components/custom/Loading';
import AdminStore from '@/store/AdminStore';

const MyWorkshops = () => {
  // Sample workshop data
  const {getWorkshops,workshops,loading} = AdminStore()
  const fetchWorkshops = async()=>{
    try{
      await getWorkshops()
    }catch(err){
      console.error(err.message)
    }
  }
  useEffect(()=>{
    fetchWorkshops()
  },[])
  // const workshops = [
  //   {
  //     id: 1,
  //     title: "Pottery Workshop",
  //     description: "Learn the ancient art of pottery making in this hands-on workshop.",
  //     location: "Maharashtra, India",
  //     image: "/images/pottery_workshop.jpg", // Replace with your actual image URLs
  //   },
  //   {
  //     id: 2,
  //     title: "Textile Weaving Workshop",
  //     description: "Explore the world of traditional textile weaving techniques.",
  //     location: "Rajasthan, India",
  //     image: "/images/textile_weaving.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Woodworking Workshop",
  //     description: "Craft beautiful wooden pieces with expert guidance in our woodworking workshop.",
  //     location: "Gujarat, India",
  //     image: "/images/woodworking_workshop.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Metal Crafting Workshop",
  //     description: "Create stunning metal crafts in this beginner-friendly workshop.",
  //     location: "Tamil Nadu, India",
  //     image: "/images/metal_crafting_workshop.jpg",
  //   },
  // ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">My Workshops</h2>
        <Dialog>
          <DialogTrigger>
          <Button className="bg-[#8B4513] text-white">Create Workshop</Button>
          </DialogTrigger>
          <DialogContent>
            <CreateWorkshop />
          </DialogContent>
        </Dialog>
      </div>
      {loading && <Loading />}
      {/* First Workshop (Full Width) */}
      <div className="mb-8">
       { workshops && <Workshop workshop={workshops[0]} isFirst={true} page='myworkshops' />}
      </div>

      {/* Other Workshops in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops?.slice(1).map((workshop) => (
          <Workshop key={workshop._id} workshop={workshop} page="myworkshops" />
        ))}
      </div>
    </div>
  );
};

export default MyWorkshops;
