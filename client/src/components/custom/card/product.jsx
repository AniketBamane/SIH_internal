import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'; // Shadcn UI Card
import { Button } from '@/components/ui/button'; // Shadcn UI Button

const Product = ({ product }) => {
  return (
    <Card className="w-full max-w-sm mx-auto rounded-lg shadow-md overflow-hidden">
      {/* Product Image */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Card Content */}
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
        <p className="text-sm text-gray-600">{product.category}</p>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
      </CardContent>

      {/* Footer with Action Button */}
      <CardFooter className="p-4 flex justify-between">
        <Button className="bg-[#8B4513] text-white">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
