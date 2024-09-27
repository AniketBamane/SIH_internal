import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-6 mt-8 shadow-2xl mb-5">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h5 className="text-lg font-semibold mb-3">About Us</h5>
            <p>
              CulturalCrafter is dedicated to empowering rural artisans by providing them with a platform to showcase their heritage products.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to={"/"} className="text-gray-600 hover:text-[#8B4513]">Home</Link></li>
              <li><Link to={"/marketplace"} className="text-gray-600 hover:text-[#8B4513]">Shop</Link></li>
              <li><Link to={"/events"} className="text-gray-600 hover:text-[#8B4513]">Events</Link></li>
              <li><Link to={"/contact-us"} className="text-gray-600 hover:text-[#8B4513]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Contact Us</h5>
            <p>Email: <a href="mailto:info@culturalcrafter.com" className="text-gray-600 hover:text-[#8B4513]">info@culturalcrafter.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-gray-600 hover:text-[#8B4513]">+123 456 7890</a></p>
            <h5 className="mt-3 text-lg font-semibold">Follow Us</h5>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-[#8B4513]">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#8B4513]">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#8B4513]">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-2">
        &copy; {new Date().getFullYear()} CulturalCrafter. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
