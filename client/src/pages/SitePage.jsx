import React, { useEffect } from 'react';
import Site from '../components/custom/card/Site'; // Import the Site component
import SiteStore from '@/store/SiteStore';
import Loading from '@/components/custom/Loading';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const SitePage = () => {
  const {loading,sites,getSites} = SiteStore()
  const fetchSites = async()=>{
    const toastId = toast.loading("please wait...")
    try{
      await getSites()
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
    fetchSites()
  },[])
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
       {sites?.length == 0 ? <h2>no items found !</h2>: <Site site={sites[0]} fullWidth={true} />}
      </div>
     {loading && <Loading />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites?.slice(1).map((site, index) => (
          <Site key={index} site={site} />
        ))}
      </div>
    </div>
  );
};

export default SitePage;
