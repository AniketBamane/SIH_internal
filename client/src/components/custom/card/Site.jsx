import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'; // Shadcn UI Card
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CreateProduct from '../form/CreateProduct';
import UpdateSite from '../form/UpdateSite';

const Site = ({ site ,page="" }) => {
  return (
    <Card className={`rounded-lg shadow-md overflow-hidden `}>
      {/* Site Image */}
      {site?.image && (
        <img
          src={site?.image}
          alt={site?.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Card Content */}
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-semibold">{site?.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-gray-700 mb-2">{site?.content}</p>
        <p className="text-sm text-gray-500">Location: {site?.location}</p>
      </CardContent>

      {/* Footer with Action Button */}
      <CardFooter className="p-4 flex justify-between">
        {
          page != "mysites" ?
          <Button className="bg-[#8B4513] text-white">Learn More</Button>
          :
          <>
          <Dialog>
            <DialogTrigger>
            <Button className="bg-[#8B4513] text-white">Create Product</Button>
            </DialogTrigger>
            <DialogContent className="h-[90vh] overflow-auto">
              <CreateProduct id={site?._id} />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
            <Button className="bg-[#8B4513] text-white">Update Site</Button>
            </DialogTrigger>
            <DialogContent className="h-[90vh] overflow-auto">
              <UpdateSite id={site?._id} />
            </DialogContent>
          </Dialog>
          </>
 
        }
      </CardFooter>
    </Card>
  );
};

export default Site;
