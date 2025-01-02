import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen text-white flex flex-wrap justify-center items-center p-5">
      <div className="max-w-3xl w-full bg-neutral-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Get in Touch
        </h1>
        <form  className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 bg-neutral-900 border border-white rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-neutral-900 border border-white rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 bg-neutral-900 border border-white rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-lg">
            Or email me directly at{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-yellow-500 underline"
            >
              shahmina814@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
