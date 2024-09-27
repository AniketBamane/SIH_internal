import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, CircleX, Cross, Loader2, TrashIcon, X, XCircle } from 'lucide-react'; // Import Lucide React icons
import { Card } from '@/components/ui/card';
import orderStore from '@/store/OrderStore';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Loading from '@/components/custom/Loading';

const Order = () => {
  const {orders,loading,deleteOrder} = orderStore()
  const navigate = useNavigate()
  const handleDelete = async(id)=>{
    const toastId = toast.loading("please wait , cancelling order ...")
    try{
      await deleteOrder(id)
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

  console.log(orders)

  return (
    <div className=" text-gray-900 min-h-screen">


      <main className="container mx-auto px-4 py-8">
     
        <section>
          <h2 className="text-3xl font-bold mb-6">My Orders</h2>
          {loading? (
            <Loading />
          ) : null}
          {orders.length === 0 ? (
            <Card className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-center">You have no orders yet.</p>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order._id} className="p-6 bg-white shadow-md rounded-lg">
                  <div className="mb-4 flex justify-between">
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <CircleX onClick={()=>handleDelete(order._id)} disabled={loading} />
                  </div>
                  <div className="mb-2">
                    <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
                  </div>
                  <div className="mb-4">
                    <strong>Status:</strong> {order.status === 'completed' ? <span className="text-green-500"><CheckCircle className='inline' /> {order.status}</span> : <span className="text-red-500"><XCircle className='inline' /> {order.status}</span>}
                  </div>
                  <div className="mb-4">
                    <strong>Payment Status:</strong> {order.payment}
                  </div>
                  <div className="mb-4">
                    <strong>Delivery Date:</strong> {new Date(order.deliveryDate).toLocaleDateString()}
                  </div>
                  
                  <div className="mt-6">
                    <strong>Ordered Items:</strong>
                    <div className="mt-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center mb-4">
                          <img src={item.dish.imageUrl} alt={item.dish.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                          <div>
                            <div className="font-semibold">{item.dish.name}</div>
                            <div>Quantity: {item.quantity}</div>
                            <div>Price: ${item.dish.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

    </div>
  );
};

export default Order;