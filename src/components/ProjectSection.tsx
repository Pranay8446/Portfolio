"use client";

import project from "@/data/project.json"
import Link from "next/link"
import { motion } from "framer-motion";

const ProjectSection = () => {
  
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center items-center p-5 flex-col"
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl mt-20 font-semibold md:mt-25 mb-5">
          My Project
        </h1>
      </motion.div>

      <div className="h-auto flex flex-col md:grid md:grid-cols-2 gap-4 m-2 md:w-85/100">

        {project.map((elem, index) => (
          <motion.div
            key={elem.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            viewport={{ once: true}}
            className="h-full border border-white/10 p-6"
          >

            <div className="h-45 md:h-60 w-full">
              <img
                src={elem.image}
                alt={elem.title}
                className="h-full w-full bg-cover hover:scale-105 transition-all"
              />
            </div>

            <div className="my-2">
              <h1 className="text-2xl font-medium">{elem.title}</h1>
              <p className="text-lg text-gray-400">{elem.description}</p>
            </div>

            <div className="flex gap-4 flex-wrap mb-3">
              {elem.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-3 rounded-2xl py-1 border border-white/20 min-w-5"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div whileTap={{ scale: 0.92 }}>
              <Link
                href={elem.link}
                target="_blank"
                className="mt-3 border border-white/40 px-4 py-1 rounded-2xl"
              >
                preview
              </Link>
            </motion.div>

          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-4"
      >
        <Link
          href={"/projects"}
          className="border border-white/20 px-3 py-2 text-base rounded-full md:text-base md:py-2 md:px-4"
        >
          View all project
        </Link>
      </motion.div>

    </motion.div>
  )
}

export default ProjectSection
