import axios from "axios"
import { toast } from "sonner"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const SiteStore = create(persist(set=>({
  sites: [],
  site:{},
  loading: false,
  getSites:async()=>{
    try{
      set({loading:true})
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/story/get-stories`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data != null){
        set({loading:false, sites:response.data.stories})
      }
    } catch(error){
      toast.error(error.response.data.message)
    }finally{
      set({loading:false})
    }
  },
  getSiteById:async(id)=>{
    try{
      set({loading:true})
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/story/get-story/${id}`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data != null){
        set({loading:false, site:response.data.story})
      }
    } catch(error){
      toast.error(error.response.data.message)
    }finally{
      set({loading:false})
    }
  }
}), {
  name: "site-storage", 
  storage:createJSONStorage( () => localStorage), 
}  ) )

export default SiteStore