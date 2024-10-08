import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Plus, Minus, Check, ArrowLeft, Trash } from 'lucide-react'; // Import Lucide React icons
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Loading from '@/components/custom/Loading';
import CheckoutForm from '@/components/custom/form/CheckoutForm';
import AuthStore from '@/store/AuthStore';

const Cart = () => {
  const {user,loading,removeItemFromCart,increaseQuantityOfItemInCart,removeQuantityOfItemCart} = AuthStore()

  const [editingIndex, setEditingIndex] = useState(null);
  const [done,setDone] = useState(false)

  const [quantityData, setQuantityData] = useState({
    newQuantity: 1,
    operation: null,
  });

  const handleDeleteItem = async(dish)=>{
    const toastId = toast.loading("please wait , removing item from cart ....")
    try{
      await removeItemFromCart(dish)
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

  const handleEditClick = (index) => {
    setEditingIndex(index); 
    setQuantityData({
      newQuantity: user?.cart?.products[index].quantity, 
      operation: null,
    });
  };

  const handleQuantityChange = (operation) => {
    setDone(false)
    setQuantityData((prevData) => {
      const newQuantity =
        operation === 'increase'
          ? prevData.newQuantity + 1
          : prevData.newQuantity - 1;
      if (newQuantity < 1) return prevData; 
      return { newQuantity, operation };
    });
  };

  const handleDoneClick = async(productDetails) => {
    const toastId = toast.loading("please wait, saving changes ...")
     setDone(true);
    console.log(quantityData)
    console.log(productDetails,"--------------------------")
    try{
     if(quantityData.operation == "increase"){
      await increaseQuantityOfItemInCart(productDetails,quantityData.newQuantity)
     }else{
      await removeQuantityOfItemCart(productDetails,quantityData.newQuantity)
     }
    }catch(err){
      toast.error(err.message,{
        id: toastId,
      });
    }finally{
      setTimeout(()=>{
        toast.dismiss(toastId)
      },1000)
    }
  };

console.log(user , "--------user")
  return (
    <div className="text-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-8">
       
        <section>
          <h2 className="text-3xl font-bold mb-6">My Cart</h2>
          { loading ? (
           <Loading />
          ) : null }
          { user?.cart?.products?.length === 0 ? (
            <Card className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-center">Your cart is empty.</p>
            </Card>
          ) : (
            <div className="space-y-6">
              {user?.cart?.products?.map((item, index) => (
                <Card key={index} className="p-6 bg-white shadow-md rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <div className='flex justify-between'>
                      <div className="font-semibold">{item.product.name}</div>
                      <Trash className='cursor-pointer' onClick={()=>handleDeleteItem(item.product)} disabled={loading} />
                      </div>
                      <div>Description: {item.product.description}</div>
                      <div className="flex items-center mt-2">
                        {editingIndex === index ? (
                          <>
                            <Button
                              onClick={() => handleQuantityChange('decrease')}
                              className="mr-2"
                            >
                              <Minus size={16} />
                            </Button>
                            <span className="mx-2">
                              {quantityData.newQuantity}
                            </span>
                            <Button
                              onClick={() => handleQuantityChange('increase')}
                              className="ml-2"
                            >
                              <Plus size={16} />
                            </Button>
                           {!done && (
                             <Button
                             onClick={()=>handleDoneClick(item.product)}
                             className="ml-4 text-green-600"   
                           >
                             <Check size={16} />
                           </Button>
                           ) }
                          </>
                        ) : (
                          <>
                            <span className="mr-4">
                              Quantity: {item.quantity}
                            </span>
                            <Button onClick={() => handleEditClick(index)}>
                              <Edit size={16} />
                            </Button>
                          </>
                        )}
                      </div>
                      <div>Price of single dish: ${item.product.price}</div>
                    </div>
                  </div>
                </Card>
              ))}
              <Card className="p-6 bg-white shadow-md rounded-lg mt-6">
                <div className="flex justify-between font-semibold">
                  <span>Total Price:</span>
                  <span>${user?.cart?.totalPrice.toFixed(2)}</span>
                </div>
              </Card>
            </div>
          )}
        </section>

        {user?.cart?.products?.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Dialog>
              <DialogTrigger>
              <Button
              onClick={() => {
                console.log(user.cart)
              }}
            >
              Proceed to Checkout
            </Button>
              </DialogTrigger>
              <DialogContent className="h-[80vh] overflow-y-auto">
                <CheckoutForm />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;