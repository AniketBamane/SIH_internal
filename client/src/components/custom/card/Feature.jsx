import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'; // Shadcn UI Card
import { Button } from '@/components/ui/button';  // Shadcn UI Button
const FeatureCard = ({feature}) => {
  return (
    <Card className="rounded-lg shadow-md overflow-hidden">
    {/* Feature Image */}
    <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />

    {/* Card Content */}
    <CardHeader className="p-4">
      <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      <p className="text-gray-700">{feature.description}</p>
    </CardContent>
  </Card>
  )
}

export default FeatureCard