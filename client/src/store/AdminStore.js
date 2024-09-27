import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "sonner";

const AdminStore = create(
  persist(
    (set) => ({
      loading:false,
      sites:[],
      site:{},
      workshops:[],
      products:[],
      //operations
      createSite : async(data)=>{
        console.log(data);
        try{
          set({loading:true})
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/story/create-story`, data, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response)
          if(response.data!= null){
            set(state=>({
              sites: [...state.sites, response.data.newStory],
            }))
            toast.success("site is created successfully !")
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      createWorkshop: async(data)=>{
        try{
          set({loading:true})
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/create-workshop`, data, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if(response.data!= null){
            set(state=>({
              workshops: [...state.workshops, response.data.workshop],
            }))
            toast.success("workshop created successfully")
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      createProduct:async(data)=>{
        try{
          set({loading:true})
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/product/create-product`, data, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if(response.data!= null){
            set(state=>({
              products: [...state.products, response.data.product],
            }))
            toast.success(response.data.message)
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      //get operations
      getSites: async()=>{
        try{
          set({loading:true})
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/story/get-stories`, {
            withCredentials: true,
          });
          console.log(response , " in site")
          if(response.data!= null){
            
            set({sites: response.data.stories})
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      getWorkshops: async()=>{
        try{
          set({loading:true})
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/get-workshops`, {
            withCredentials: true,
          });
          if(response.data!= null){
            set({workshops: response.data.workshops})
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      getProducts: async()=>{
        try{
          set({loading:true})
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/get-products`, {
            withCredentials: true,
          });
        
          if(response.data!= null){
            set({products: response.data.products})
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      //update operations
      updateSite: async(id, data)=>{
        try{
          set({loading:true})
          const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/story/update-story/${id}`, data, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if(response.data!= null){
            set(state=>({
              sites: state.sites.map(site=>site._id === id? response.data.story : site),
            }))
            toast.success("site updated successfully !")
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      updateWorkshop: async(id, data)=>{
        try{
          set({loading:true})
          const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/update-workshop/${id}`, data, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if(response.data!= null){
            set(state=>({
              workshops: state.workshops.map(workshop=>workshop._id === id? response.data.workshop : workshop),
            }))
            toast.success(response.data.message)
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      updateProduct: async(id, data)=>{
        try{
          set({loading:true})
          const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/update-product/${id}`, data, {
            withCredentials: true,
            headers: {
              'Content-Type':'multipart/form-data',
            },
          });
          if(response.data!= null){
            set(state=>({
              products: state.products.map(product=>product._id === id? response.data.product : product),
            }))
            toast.success("product updated successfully !")
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      //delete operations
      deleteSite: async(id)=>{
        try{
          set({loading:true})
          const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/site/deleteSite/${id}`, {
            withCredentials: true,
          });
          if(response.data!= null){
            set(state=>({
              sites: state.sites.filter(site=>site._id!= id),
            }))
            toast.success(response.data.message)
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      deleteWorkshop: async(id)=>{
        try{
          set({loading:true})
          const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/workshop/delete-workshop/${id}`, {
            withCredentials: true,
          });
          if(response.data!= null){
            set(state=>({
              workshops: state.workshops.filter(workshop=>workshop._id!= id),
            }))
            toast.success(response.data.message)
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      deleteProduct: async(id)=>{
        try{
          set({loading:true})
          const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/product/delete-product/${id}`, {
            withCredentials: true,
          });
          if(response.data!= null){
            set(state=>({
              products: state.products.filter(product=>product._id!= id),
            }))
            toast.success(response.data.message)
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      },
      //other utility methods
      getSiteById:async(id)=>{
        try{
          set({loading:true})
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/site/getSiteById/${id}`, {
            withCredentials: true,
          });
          if(response.data!= null){
            set({site: response.data.story})
          }
        }catch(err){
          toast.error(err.response.data.message)
        }finally{
          set({loading:false})
        }
      }
    }),
    { 
      name: "adminStore",
      storage:createJSONStorage(()=>localStorage) 

    } 
  )
)

export default AdminStore;