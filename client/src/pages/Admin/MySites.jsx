import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import Site from '@/components/custom/card/Site';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CreateSite from '@/components/custom/form/CreateSite';
import AdminStore from '@/store/AdminStore';
import Loading from '@/components/custom/Loading';

const MySites = () => {
  const {getSites,sites,loading} = AdminStore()
  const fetchSites = async()=>{
    try{
      await getSites()
    }catch(err){
      console.error(err.message)
    }
  }
  useEffect(()=>{
    fetchSites()
  },[])
  // const sites = [
  //   {
  //     id: 1,
  //     title: "Historical Fort",
  //     content: "Explore the rich history and stunning architecture of this ancient fort.",
  //     location: "Maharashtra, India",
  //     image: "/images/fort.jpg",  // Replace with your actual image URLs
  //   },
  //   {
  //     id: 2,
  //     title: "Cultural Village",
  //     content: "Visit our vibrant cultural village showcasing local arts and crafts.",
  //     location: "Uttar Pradesh, India",
  //     image: "/images/village.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Scenic Lake",
  //     content: "Enjoy the breathtaking views and serene environment of our scenic lake.",
  //     location: "Himachal Pradesh, India",
  //     image: "/images/lake.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Mountain Trail",
  //     content: "Embark on an adventurous journey through our scenic mountain trails.",
  //     location: "Sikkim, India",
  //     image: "/images/mountain.jpg",
  //   },
  // ];

  return (
    <div className="container mx-auto px-4 py-8  min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">My Sites</h2>
        <Dialog>
          <DialogTrigger>
          <Button className="bg-[#8B4513] text-white">Create Site</Button>
          </DialogTrigger>
          <DialogContent>
            <CreateSite />
          </DialogContent>
        </Dialog>
      </div>
      {loading && <Loading />}
      {/* First Site (Full Width) */}
      <div className="mb-8">
      {sites &&  <Site site={sites[0]} fullWidth={true} page='mysites' /> }
      </div>

      {/* Other Sites in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        { sites.length >1 &&  sites?.slice(1).map((site,index) => (
          <Site key={index} site={site} page="mysites" />
        ))}
      </div>
    </div>
  );
};

export default MySites;
