import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an API request to a backend
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center text-pink-700">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We'd love to hear from you! Please leave us a message regarding our full package makeup delivery in Ethiopia.
        </p>

        {submitted ? (
          <div className="bg-pink-50 p-6 rounded-md text-center">
            <h2 className="text-2xl font-bold text-pink-700 mb-2">Thank you!</h2>
            <p className="text-gray-700">Your message has been sent successfully. We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm px-4 py-3 border"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm px-4 py-3 border"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm px-4 py-3 border"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
