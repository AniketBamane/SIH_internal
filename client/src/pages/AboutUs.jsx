import React from 'react';

const AboutUs = () => (
  <div className="text-gray-900 min-h-screen bg-gray-100">
    <main className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/about.jpeg" // Use relevant image for HeritageHub
            alt="Artisan Craft"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to <strong>HeritageHub</strong>, a platform that celebrates and preserves the rich cultural heritage of artisans from across the globe. Our mission is to connect traditional crafts with the world, empowering artisans to share their stories, skills, and products.
          </p>
          <p className="mb-4">
            Through HeritageHub, we provide a unique blend of an online marketplace and a storytelling platform, where each artisan's journey is cherished. We believe in fostering cultural appreciation and economic growth through meaningful connections between artisans and customers.
          </p>
          <p className="mb-4">
            Whether you’re here to purchase handcrafted goods or learn about the craft’s history, <strong>HeritageHub</strong> offers an immersive experience like no other. Our platform ensures that each product you buy comes with a story that enriches your understanding of the craft.
          </p>
          <p>
            Thank you for supporting artisans, and we look forward to your continued involvement. If you have any questions or feedback, feel free to <a href="mailto:support@heritagehub.com" className="text-blue-500 hover:underline">contact us</a>.
          </p>
        </div>
      </section>
    </main>
  </div>
);

export default AboutUs;
