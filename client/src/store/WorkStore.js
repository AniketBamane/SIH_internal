import axios from "axios"
import { toast } from "sonner"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const WorkShopStore = create(persist(set=>({
  workshops: [],
  loading: false,
  getWorkshops:async()=>{
    try{
      set({loading:true})
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/get-workshops`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data != null){
        set({loading:false, workshops:response.data.workshops})
      }
    } catch(error){
      toast.error(error.response.data.message)
    }finally{
      set({loading:false})
    }
  }
}), {
  name: "workshop-storage", 
  storage:createJSONStorage( () => localStorage), 
}  ) )

export default WorkShopStore