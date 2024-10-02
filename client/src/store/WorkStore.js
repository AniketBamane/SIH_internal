import axios from "axios"
import { toast } from "sonner"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const WorkShopStore = create(persist(set=>({
  workshops: [],
  myWorkshops:[],
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
  },
  bookWorkshop:async(workshopDetails)=>{
    try{
      set({loading:true})
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/book-workshop/${workshopDetails._id}`,{},{
        withCredentials:true
      })
      if(response.data!= null){
        set(state=>({
          myWorkshops: [...state.myWorkshops,workshopDetails]
        }))
        toast.success(response.data.message)
      }
    }catch(err){
      toast.error(err.response.data.message)
    }finally{
      set({loading:false})
    }
  },
  removeWorkshop:async(workshopId)=>{
    try{
      set({loading:true})
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/cancel-workshop/${workshopId}`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data!= null){
        set(state=>({
          myWorkshops: state.myWorkshops.filter(workshop=>workshop._id!= workshopId)
        }))
        toast.success("Workshop removed successfully")
      }
    }catch(err){
      toast.error(err.response.data.message)
    }finally{
      set({loading:false})
    }
  },
  getMyWorkshops:async()=>{
    try{
      set({loading:true})
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/get-my-workshops`,{
        withCredentials:true
      })
      console.log(response)
      if(response.data!= null){
        set({loading:false, myWorkshops:response.data.workshops})
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