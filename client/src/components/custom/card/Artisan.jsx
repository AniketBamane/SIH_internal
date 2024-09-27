import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Shadcn UI components
import { Badge } from '@/components/ui/badge';  // Shadcn UI Badge

const Artisan = () => {
  return (
    <Card className="relative p-4 bg-white rounded-lg shadow-md">
      {/* Image */}
      <img src="/contact.jpg" alt="Linda's Ceramics" className="w-full h-48 object-cover rounded-md" />

      {/* Badge for Description */}
      <Badge className="absolute top-2 left-2 bg-gray-700 text-white text-sm rounded-md px-2 py-1">
        Expert in handcrafted ceramics
      </Badge>

      {/* Card Content */}
      <CardHeader className="mt-4">
        <CardTitle className="font-medium">Linda's Ceramics</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default Artisan;
