import React from 'react';
import Site from '../components/custom/card/Site'; // Import the Site component

const SitePage = () => {
  const sites = [
    {
      title: "Historical Fort",
      content: "Explore the rich history and stunning architecture of this ancient fort.",
      image: "/contact.jpg",  // Replace with your image URL
      location: "Maharashtra, India",
    },
    {
      title: "Cultural Village",
      content: "Visit our vibrant cultural village showcasing local arts and crafts.",
      image: "/contact.jpg",  // Replace with your image URL
      location: "Uttar Pradesh, India",
    },
    {
      title: "Scenic Lake",
      content: "Enjoy the breathtaking views and serene environment of our scenic lake.",
      image: "/contact.jpg",  // Replace with your image URL
      location: "Himachal Pradesh, India",
    },
    {
      title: "Mountain Trail",
      content: "Embark on an adventurous journey through our scenic mountain trails.",
      image: "/contact.jpg",  // Replace with your image URL
      location: "Sikkim, India",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* First Site taking full width */}
      <div className="mb-8">
        <Site site={sites[0]} fullWidth={true} />
      </div>

      {/* Other Sites in grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.slice(1).map((site, index) => (
          <Site key={index} site={site} />
        ))}
      </div>
    </div>
  );
};

export default SitePage;
