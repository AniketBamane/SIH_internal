import Workshop from "@/components/custom/card/Workshop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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

const WorkshopPage = () => {
  return (

    <div className="container mx-auto px-4 py-8">
      <div className="flex w-1/2  mx-auto space-x-5 mb-3">
        <Input
        type="text"
        placeholder="Search for workshops... for example : pottery"
        className="w-full rounded-md focus:outline-none "
        />
        <Button>
          <Search />
        </Button>
      </div>
      {/* First Workshop (Full Width) */}
      {workshops.length > 0 && <Story workshop={workshops[0]} isFirst={true} />}

      {/* Other Workshops in Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.slice(1).map((workshop, index) => (
          <Workshop key={index} workshop={workshop} isFirst={false} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopPage;
