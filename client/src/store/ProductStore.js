import axios from "axios"
import { toast } from "sonner"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const ProductStore = create(persist(set=>({
  products: [],
  siteProducts:[],
  loading: false,
  getProducts:async()=>{
    try{
      set({loading:true})
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/get-all-products`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data != null){
        set({loading:false, products:response.data.products})
      }
    } catch(error){
      toast.error(error.response.data.message)
    }finally{
      set({loading:false})
    }
  },
  getProductOParticularSite:async(id)=>{
    try{
      set({loading:true})
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/get-product-by-siteid/${id}`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data != null){
        set({loading:false, siteProducts:response.data.products})
      }
    } catch(error){
      toast.error(error.response.data.message)
    }finally{
      set({loading:false})
    }
  }
}), {
  name: "product-storage", 
  storage:createJSONStorage( () => localStorage), 
}  ) )

export default ProductStore