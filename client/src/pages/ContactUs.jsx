import React from 'react';
import { Input } from '@/components/ui/input';  // Shadcn UI Input
import { Button } from '@/components/ui/button';  // Shadcn UI Button
import { Textarea } from '@/components/ui/textarea';  // Shadcn UI Textarea

const ContactUs = () => (
  <div className="text-gray-900 min-h-screen bg-gray-100">
    <main className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Image Section */}
        <div className="md:w-1/2  mb-8 md:mb-0">
          <img
            src="/contact.jpg"  // Replace with relevant image for HeritageHub
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions, suggestions, or need assistance, feel free to reach out to us by filling out the form below. We're here to help you!
          </p>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" type="text" placeholder="Enter your name" className="w-full" />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Enter your message" className="w-full" />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <Button type="submit" className="w-full bg-[#8B4513] text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
);

export default ContactUs;
