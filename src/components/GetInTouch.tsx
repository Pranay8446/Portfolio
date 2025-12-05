"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col justify-center items-center p-6 mb-40"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="my-5 text-4xl mt-20 font-semibold md:mt-25"
      >
        Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        <motion.label
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          htmlFor="name"
          className="font-medium"
        >
          Name
        </motion.label>

        <motion.input
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          name="name"
          type="text"
          className="border border-white/10 mt-2 rounded-lg p-2 w-full"
          placeholder="Your Name"
          required
        />

        <motion.label
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          htmlFor="email"
          className="font-medium"
        >
          Email
        </motion.label>

        <motion.input
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          name="email"
          type="email"
          className="border border-white/10 mt-2 rounded-lg p-2 w-full"
          placeholder="hello@gmail.com"
          required
        />

        <motion.label
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          htmlFor="message"
          className="font-medium"
        >
          Message
        </motion.label>

        <motion.textarea
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          name="message"
          className="border border-white/10 mt-2 rounded-lg p-2 w-full"
          placeholder="Your Message"
          required
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 }
          }}
          className="flex justify-center items-center"
        >
          <motion.button
            whileTap={{ scale: 0.92 }}
            disabled={loading}
            className="bg-white text-black flex justify-center px-4 py-2 rounded-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.div>

      </motion.form>
    </motion.div>
  );
}

export default GetInTouch;
