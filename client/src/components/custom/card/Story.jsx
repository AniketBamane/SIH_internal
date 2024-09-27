import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Story = ({ workshop, isFirst }) => {
  // First workshop card will have a different design
  if (isFirst) {
    return (
      <Card className="w-full mb-8 shadow-lg rounded-lg overflow-hidden">
        {/* Workshop Image */}
        {workshop.image && (
          <img src={workshop.image} alt={workshop.title} className="w-full h-64 object-cover" />
        )}

        {/* Workshop Content */}
        <CardHeader className="p-5 bg-gray-50">
          <CardTitle className="text-3xl font-semibold">{workshop.title}</CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <p className="text-base text-gray-700 mb-4">{workshop.description}</p>
          <p className="text-sm text-gray-500">Location: <span className="font-medium">{workshop.location}</span></p>
        </CardContent>

        {/* Call to Action Button */}
        <CardFooter className="p-6 flex justify-end">
          <Button className="bg-[#8B4513] text-white">Join Workshop</Button>
        </CardFooter>
      </Card>
    );
  }

  // Other workshop cards in the grid
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      {/* Workshop Image */}
      {workshop.image && (
        <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
      )}

      {/* Workshop Content */}
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold">{workshop.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
        <p className="text-sm text-gray-500">Location: <span className="font-medium">{workshop.location}</span></p>
      </CardContent>

      {/* Call to Action Button */}
      <CardFooter className="p-4 flex justify-end">
        <Button className="bg-[#8B4513] text-white">Join Workshop</Button>
      </CardFooter>
    </Card>
  );
};

export default Story;