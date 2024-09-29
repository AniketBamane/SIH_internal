import React from 'react'

const ArtistSuccess = () => {
  const stories = [
    {
      name: "Ramesh Verma",
      location: "Kutch, Gujarat",
      image: "/images/ramesh.avif", // Replace with actual image URL
      story: `
        Ramesh Verma, a skilled potter from Kutch, struggled to find a sustainable market for his handcrafted pottery. 
        After joining Cultural Crafters, he was able to connect with customers from across the country, leading to 
        increased orders and recognition. With access to our platform, Ramesh has grown his business exponentially, 
        expanding his product line and reaching new markets while staying true to his traditional techniques.
      `,
    },
    {
      name: "Meena Devi",
      location: "Jaipur, Rajasthan",
      image: "/images/meena.jpg", // Replace with actual image URL
      story: `
        Meena Devi, an expert in traditional block printing, faced challenges in competing with mass-produced textiles. 
        After showcasing her unique designs on Cultural Crafters, her business saw a significant boost in both local and 
        international orders. The platform enabled her to share her story and craftsmanship with a global audience, 
        helping her preserve her family's artisanal heritage while growing her brand.
      `,
    },
  ];

  return (
    <section className="py-5 mb-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col  md:flex-row items-center gap-8">
            {/* Artisan Image */}
            <div className="w-full md:w-1/2 ">
              <img
                src={story.image}
                alt={`Image of ${story.name}`}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>

            {/* Artisan Story */}
            <div className="w-full md:w-1/2">
             
              <p className="text-lg text-gray-700 mb-4">
                {story.story}
              </p>

              {/* Artisan Details */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold">{story.name}</h3>
                <p className="text-gray-600">{story.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtistSuccess