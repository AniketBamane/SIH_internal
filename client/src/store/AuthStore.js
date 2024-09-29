import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "sonner";

const AuthStore = create(
  persist(
    (set) => ({
      loading: false,
      isAuthenticated: false,
      user: null,
      verification: {
        verificationCode:null,
        email:null,
      },
      setCart:()=>{
        set(state=>(
          {
            user: {...state.user, cart: {dishes:[],totalPrice:0} },
          }
        ))
      }
      ,
      cleanVerification :()=>{
        set({verification:{
          verificationCode:null,
          email:null,
        }})
      },

      getCurrentUser:async()=>{
        try{
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/getCurrentUser`,
            { withCredentials: true }
          );
          if (response.data!= null) {
            console.log(response.data.user , "in current user")
            set({
              isAuthenticated: true,
              user:response.data.user,
              loading: false,
            });
          }
        }catch(err){
          console.log(err)
          toast.error(err.message)
        }
      },
      // Login function
      login: async (formData) => {
        set({ loading: true });
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
            formData,
            { 
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
             }
          );
          console.log(response)
          if (response.data != null) {
            set({
              isAuthenticated: true,
              user: {...response.data.user},
              loading: false,
            });
            toast.success("User Logged in successfully!");
          }
        } catch(error) {
          console.log(error)
          toast.error(error.response.data.message);
        } finally {
          set({ loading: false });
        }
      },

      // Logout function
      logout: async () => {
        set({ loading: true });
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
            { withCredentials: true }
          );
          console.log(response)
          if (response.data != null) {
            set({
              isAuthenticated: false,
              user: null,
              loading: false,
            });
            toast.success("Users logged out successfully !");
          }
        } catch (error) {
          console.log(error)
          toast.error(error.response.data.message);
        } finally {
          set({ loading: false });
        }
      },

      // Signup function
      signup: async (formData) => {
        set({ loading: true });
        console.log(formData)
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
            formData,
            { 
              withCredentials: true,
              headers: {
                "Content-Type": "multipart/form-data",
              },
             }
          );
          if (response.data != null) {
            set({
              isAuthenticated: true,
              user: response.data.user,
              loading: false,
              verification:{
                verificationCode: null,
                email: null,
              }
            });
            toast.success(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ loading: false });
        }
      },

      // Verify email function
      verifyEmail: async (email) => {
        set({ loading: true });
        try {
          console.log("in verify email ....")
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-email`,
            { email },
            { withCredentials: true }
          );
          console.log(response)
          if (response.data != null) {
            
            set({
              verification: {
                verificationCode : response.data.verificationCode.toString(),
                email : email,
              },
              loading: false,
            });
            toast.success(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ loading: false });
        }
      },
      updateProfile:async(formData)=>{
        set({ loading: true });
        try {
          console.log(formData," in update profile store")
          const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/update-profile`,
            formData,
            { 
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
             }
          );
          if (response.data!= null) {
            set({
              user: response.data.user,
              loading: false,
            });
            toast.success(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ loading: false });
        }
      }
    ,
      addItemIntoCart: async(productDetails)=>{
        set({ loading: true });
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/cart/add-item-cart`,
            {productId:productDetails._id},
            { withCredentials: true }
          );
          console.log(response," in add item into cart  !--------------------------------")
          if (response.data != null) {
            console.log(response.data.cart)
            set(state=>({
              user: {...state.user, cart: response.data.cart },
              loading: false,
            }));
            toast.success(response.data.message);
          }
        } catch (error) {
          console.log(error)
          toast.error(error.response.data.message);
        } finally {
          set({ loading: false });
        }
      },
    removeItemFromCart:async(productDetails)=>{
      try{
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/remove-item-cart`,
          {productId:productDetails._id},
          { withCredentials: true }
        );
        if (response.data!= null) {
          set(state=>(
            {
              user: {...state.user, cart: response.data.cart },
              loading: false,
            }
          ));
          toast.success(response.data.message);
        }
      }catch(err){
        toast.error(err.response.data.message);
      }finally{
        set({ loading: false });
      }
    },
    increaseQuantityOfItemInCart:async(productDetails,quantity)=>{
      console.log(productDetails,quantity);
      try{
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/increase-quantity-cart`,
          {productId:productDetails._id,
            quantity
          },
          { withCredentials: true }
        );
        console.log(response)
        if (response.data!= null) {
          set(state=>(
            {
              user: {...state.user, cart: response.data.cart },
              loading: false,
            }
          ));
          toast.success(response.data.message);
        }
      }catch(err){
        console.log(err)
        toast.error(err.response.data.message);
      }finally{
        set({ loading: false });
      }
    },
    removeQuantityOfItemCart:async(productDetails,quantity)=>{
      try{
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/decrease-quantity-cart`,
          {productId:productDetails._id,
            quantity
          },
          { withCredentials: true }
        );
        if (response.data!= null) {
          set(state=>(
            {
              user: {...state.user, cart: response.data.cart },
              loading: false,
            }
          ));
          toast.success(response.data.message);
        }
      }catch(err){
        console.log(err)
        toast.error(err.response.data.message);
      }finally{
        set({ loading: false });
      }
    },
    deleteCart:async()=>{
      try{
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/delete-cart`,
          { withCredentials: true }
        );
        if (response.data!= null) {
          toast.success(response.data.message);
        }
      }catch(err){
        toast.error(err.response.data.message);
      }finally{
        set({ loading: false });
      }
    }
    }),
    {
      name: "auth-storage", 
      storage:createJSONStorage( () => localStorage), 
    }    
  )
);

export default AuthStore;