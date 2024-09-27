import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
const accordionData = [
  {
    title: "What are Cultural Crafters?",
    content: "Cultural crafters are artisans who create handmade products that reflect their cultural heritage. They often use traditional techniques passed down through generations, aiming to preserve and promote their cultural identity through their craft."
  },
  {
    title: "Why should I support Cultural Crafters?",
    content: "Supporting cultural crafters helps sustain traditional arts and crafts, which are at risk of disappearing in the modern world. By purchasing their products, you not only acquire unique items but also contribute to the livelihoods of these artisans and their communities."
  },
  {
    title: "How can I identify authentic cultural crafts?",
    content: "Authentic cultural crafts can usually be identified by their craftsmanship, materials used, and the story behind them. Look for certifications, artist information, or labels that describe the cultural significance of the product to ensure its authenticity."
  },
  {
    title: "Bridging Rural Communities and Urban Consumers",
    content: "The platform aims to bridge the gap between rural communities and urban consumers. By promoting local events and traditions through filmed content, CulturalCrafter enhances cultural awareness and creates economic opportunities for artisans, allowing urban consumers to connect with rural cultures."
  },
  {
    title: "How can I connect with Cultural Crafters?",
    content: "You can connect with cultural crafters through various avenues. CulturalCrafter provides a digital platform where you can explore and purchase traditional crafts directly from artisans. Additionally, you can find cultural crafters at local markets, craft fairs, and community workshops. Many artisans showcase their work and engage with potential customers through their profiles on CulturalCrafter, where they share their stories and products. You can also connect with them via their social media pages or personal websites linked within the platform."
  },
];



const Accordian = () => {
  return (
    <Accordion type="single" collapsible className="w-[80vw] mx-auto">
   {
    accordionData.map((item,index)=>(
      <AccordionItem value={item.title} key={item.title}>
      <AccordionTrigger className="hover:bg-gray-200 px-2">{item.title}</AccordionTrigger>
      <AccordionContent>
       {item.content}
      </AccordionContent>
    </AccordionItem>
    ))
   }
   
  </Accordion>
  )
}

export default Accordian