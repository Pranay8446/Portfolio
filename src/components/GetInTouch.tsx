"use client";

import { useState } from "react";
import axios from "axios";
const GetInTouch = () => {

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await axios.post("/api/send", formData);

    setLoading(false);


    alert("Message sent!");
    e.target.reset();
  };

  return (
    <div
    id="contact"
     className="flex flex-col justify-center items-center p-6 mb-20">
      <h1 className="my-5 text-4xl font-semibold md:mt-25">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <label htmlFor="name" 
        className="font-semibold"
        >Name</label>
        <input
          name="name"
          type="text"
          className="border border-gray-700 mt-2 rounded-lg p-2 w-full"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email" 
        className="font-semibold"
        >Email</label>
        <input
          name="email"
          type="email"
          className="border border-gray-700 mt-2 rounded-lg p-2 w-full"
          placeholder="hello@gmail.com"
          required
        />

        <label htmlFor="message" 
        className="font-semibold"
        >Message</label>
        <textarea
          name="message"
          className="border border-gray-700 mt-2 rounded-lg p-2 w-full"
          placeholder="Your Message"
          required
        />
        <div className="flex justify-center items-center">
          <button
            disabled={loading}
            className="bg-white text-black flex justify-center px-4 py-2 rounded-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouch