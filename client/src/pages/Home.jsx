import React from "react";
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import Story from "@/components/custom/card/Workshop";
import Artisan from "@/components/custom/card/Artisan";
import Accordian from "@/components/custom/Accordian/accordian";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Feature from "@/components/features/Feature";
import ArtistSuccess from "@/components/features/ArtistSuccess";

const videos = [
  "/videos/bangles.mp4",
  "/videos/pot.mp4",
  "/videos/weaving.mp4",
  "/videos/wood-craft.mp4"
];

export default function Home() {
  return (
    <div className="min-h-screen">

      <Carousel>
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index} className="w-full h-[80vh]">
              <video
                className="w-full h-full object-cover"
                src={video}
                autoPlay
                loop
                muted
                playsInline
                
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
       <hr />
       <Feature />
       <hr />
       <h2 className="text-4xl font-bold mb-6">Artisan Success Stories</h2>
       <ArtistSuccess />
       <hr />
      <h3 className="p-2 font-bold text-2xl">Frequently Asked Questions ...</h3>
      <Accordian />
    </div>
  );
}
