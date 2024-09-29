import React from 'react';

import FeatureCard from '../custom/card/Feature';

// Example images (use your own hosted images)
const features = [
  {
    title: "Support Local Artisans",
    description: "Connect directly with local artisans and purchase authentic, handmade products that preserve cultural heritage.",
    image: "/images/local-artisan.png",
  },
  {
    title: "Join Craft Workshops",
    description: "Learn traditional crafts through interactive workshops taught by skilled artisans.",
    image: "/images/workshops.jpg",
  },
  {
    title: "Shop Unique Products",
    description: "Discover a wide range of unique, heritage-based products from various regions across the country.",
    image: "/images/unique-products.webp",
  },
  {
    title: "Share Traditional Stories",
    description: "Explore the fascinating stories behind each craft and artisan, and help preserve the legacy of traditional crafts and sites.",
    image: "/images/heritage-knowledge.jpg",
  },
];
const Feature = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">Why Choose Cultural Crafters?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
         <FeatureCard feature={feature} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Feature