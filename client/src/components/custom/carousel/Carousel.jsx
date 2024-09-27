import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const CarouselComponent = () => {
  return (
    <Carousel>
  <CarouselContent>
    {
      [1,1,1,1,1].map((item,index)=>{
        return (
          <CarouselItem key={index}>
            <img src={`/contact.jpg`} alt={`Image ${index+1}`} className='w-full h-[50vh] object-cover' />
          </CarouselItem>
        )
      })
    }
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default CarouselComponent