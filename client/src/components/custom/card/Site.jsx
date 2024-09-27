import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'; // Shadcn UI Card
import { Button } from '@/components/ui/button'; // Shadcn UI Button

const Site = ({ site, fullWidth = false }) => {
  return (
    <Card className={`rounded-lg shadow-md overflow-hidden ${fullWidth ? 'w-full' : 'max-w-sm mx-auto'}`}>
      {/* Site Image */}
      {site.image && (
        <img
          src={site.image}
          alt={site.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Card Content */}
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-semibold">{site.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-gray-700 mb-2">{site.content}</p>
        <p className="text-sm text-gray-500">Location: {site.location}</p>
      </CardContent>

      {/* Footer with Action Button */}
      <CardFooter className="p-4 flex justify-between">
        <Button className="bg-[#8B4513] text-white">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default Site;
