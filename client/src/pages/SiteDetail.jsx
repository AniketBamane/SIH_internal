import Product from '@/components/custom/card/product'
import Loading from '@/components/custom/Loading'
import ProductStore from '@/store/ProductStore'
import SiteStore from '@/store/SiteStore'
import { ArrowLeft, ArrowLeftCircle } from 'lucide-react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const SiteDetail = () => {
  const {site,loading,getSiteById} = SiteStore()
  const navigate = useNavigate()
  const {getProductOParticularSite,siteProducts} = ProductStore()
  const params = useParams()
  const fetchSiteDetail = async(id)=>{
    const toastId = toast.loading("please wait...")
    try{
      await Promise.all[getSiteById(id),getProductOParticularSite(id)]
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
    fetchSiteDetail(params.id)
  },[])
  return (
    <div className="container mx-auto px-4 py-8">
      <ArrowLeftCircle className='cursor-pointer' onClick={()=>{
        navigate(-1)
      }} />
      {loading && <Loading />}
      {/* Heritage Information */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">{site?.title}</h1>
        <img src={site?.image} alt={site?.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <p className="text-lg mb-4">{site?.content}</p>
        <p className="text-sm text-gray-500">Location: {site?.location}</p>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteProducts.length ===0 && <h2>No items found ...</h2>}
          {siteProducts?.map((product) => (
            <Product key={product._id} product={product} page="heritage" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SiteDetail