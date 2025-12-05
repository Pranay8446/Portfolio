"use client"

import { motion } from "framer-motion";

const AboutSection = () => {

  const data = [
    { 
      text: "I'm Pranay Chandurkar, a frontend engineer focused on building fast and clean UIs using React, Next.js, Tailwind CSS, shadcn/ui, and Framer Motion. I also work with JavaScript, TypeScript, and have basic full-stack experience with Node.js, Express, MongoDB, and MySQL, allowing me to handle both frontend and backend tasks when needed." 
    },
  
    { 
      text: "I've built projects for small businesses and gaming communities, always aiming for better performance and smooth user experiences. I'm still early in my journey, but I enjoy learning new tools, improving my code, and working on meaningful ideas. Outside of coding, I like cricket and coffee." 
    }
  ];

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="h-auto flex flex-col justify-center items-center mt-4"
    >

      <div className="text-center p-5 md:w-2/3 ">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl mb-5 mt-20 font-semibold md:mt-25"
        >
          About me
        </motion.h1>

        {data.map((elem, index) => (
          <motion.p 
            key={elem.text}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="m-3 text-lg text-gray-400"
          >
            {elem.text}
          </motion.p>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div className="grid md:flex grid-cols-3 m-4 gap-17 justify-center items-center">

          {[
            "ri-html5-fill",
            "ri-css3-fill",
            "ri-tailwind-css-fill",
            "ri-nextjs-fill",
            "ri-reactjs-fill",
            "ri-javascript-fill",
            "ri-nodejs-fill"
          ].map((icon) => (
            <motion.div
              key={icon}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="h-10 w-10 text-5xl"
            >
              <i className={icon}></i>
            </motion.div>
          ))}

        </div>
      </div>

    </motion.div>
  )
}

export default AboutSection
