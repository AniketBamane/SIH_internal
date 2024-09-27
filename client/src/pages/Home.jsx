import React from "react";
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import Story from "@/components/custom/card/Workshop";
import Artisan from "@/components/custom/card/Artisan";
import Accordian from "@/components/custom/Accordian/accordian";
const workshops = [
  {
    title: "Traditional Pottery Making",
    description: "Learn the ancient art of pottery making from expert artisans.",
    image: "https://media.istockphoto.com/id/1126452727/photo/ceramic-workshop.jpg?s=612x612&w=0&k=20&c=a3T1XOyTYgJ4yxLWQsnFuCOUcyFkcVUAL_yJdlBa4HM=",
    location: "Rajasthan, India"
  },
  {
    title: "Weaving Workshop",
    description: "Explore the traditional techniques of weaving from local artisans.",
    image: "https://wazir.in/wp-content/uploads/2023/04/Indias-Weaving-Industry.png",
    location: "Assam, India"
  },
  {
    title: "Weaving Workshop",
    description: "Explore the traditional techniques of weaving from local artisans.",
    image: "https://wazir.in/wp-content/uploads/2023/04/Indias-Weaving-Industry.png",
    location: "Assam, India"
  },
  {
    title: "Weaving Workshop",
    description: "Explore the traditional techniques of weaving from local artisans.",
    image: "https://wazir.in/wp-content/uploads/2023/04/Indias-Weaving-Industry.png",
    location: "Assam, India"
  },
  {
    title: "Weaving Workshop",
    description: "Explore the traditional techniques of weaving from local artisans.",
    image: "https://wazir.in/wp-content/uploads/2023/04/Indias-Weaving-Industry.png",
    location: "Assam, India"
  },

  
];

export default function Home() {
  return (
    <div className=" min-h-screen">

      {/* Hero Section */}
      <section className="mt-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-xl text-center text-white p-16"
        style={{ backgroundImage: "url('/contact.jpg')" }}>
        <h1 className="text-4xl font-bold mb-6">Discover the beauty of traditional crafts</h1>
        <div className="flex justify-center items-center gap-4">
          <Input type="text" placeholder="Search for artisans, crafts, and more" className="w-80" />
          <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="py-2 text-center">
        <h2 className="text-3xl font-semibold mb-5">Featured Artisans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Using ArtisanCard component to display each artisan */}
          <Artisan />
          <Artisan />
          <Artisan />
          <Artisan />
        </div>
      </section>


      {/* Workshops Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Learn a new craft</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Other Workshops in Grid Layout */}
        {workshops.slice(1).map((workshop, index) => (
          <Story key={index} workshop={workshop} isFirst={false} />
        ))}
        </div>
      </section>
      <h3 className="p-2 font-bold text-2xl">Frequently Asked Questions ...</h3>
      <Accordian />
    </div>
  );
}
