import Workshop from '@/components/custom/card/Workshop';
import WorkShopStore from '@/store/WorkStore';
import { BookOpenIcon } from 'lucide-react';
import React from 'react';

const MyWorkshop = () => {
  const {myWorkshops} = WorkShopStore()
  return (
    <div className="max-w-7xl min-h-screen mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">My Workshops <BookOpenIcon className='inline'  /> </h1>
      
      {/* Workshop List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render Workshop Cards */}
        {myWorkshops && myWorkshops.length > 0 ? (
          myWorkshops.map((workshop, index) => (
            <Workshop
              key={workshop._id}
              workshop={workshop}
              isFirst={false}
              page='my-workshops'
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-600 col-span-3">
            You have no workshops at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyWorkshop;
