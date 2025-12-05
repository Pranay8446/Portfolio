"use client";

import extraProject from "@/data/extraProject.json";
import Link from "next/link";
import { motion } from "framer-motion";

const ExtraProject = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center items-center p-5 md:p- flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-start w-85/100 md:mt-5"
      >
        <div className="text-sm hidden md:block">
          <Link href={"/"} className="text-gray-500">
            Home {'>'}
          </Link>
          <span className="mx-1"> Project</span>
        </div>

        <div className="text-center my-5">
          <Link
            href={"/"}
            className="border border-white/20 px-3 py-2 text-sm rounded-full"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl mt-4 font-semibold md:mt-5 mb-5">
          My Extra Project
        </h1>
      </motion.div>

      <div className="h-auto flex flex-col mb-20 md:grid md:grid-cols-3 gap-4 m-2 md:w-85/100">

        {extraProject.map((elem, index) => (
          <motion.div
            key={elem.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="h-full border border-white/10 p-6"
          >

            <div className="h-45 md:h-45 w-full">
              <img
                src={elem.image}
                alt={elem.title}
                className="h-full w-full bg-cover hover:scale-105 transition-all"
              />
            </div>

            <div className="my-2">
              <h1 className="text-xl font-medium">{elem.title}</h1>
              <p className="text-lg text-gray-400 md:text-sm">{elem.description}</p>
            </div>

            <div className="flex gap-4 flex-wrap mb-3">
              {elem.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-2 md:text-sm py-1 rounded-2xl border border-gray-800 min-w-5"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div whileTap={{ scale: 0.92 }}>
              <Link
                href={elem.link}
                target="_blank"
                className="mt-3 border text-black bg-white font-medium border-gray-800 px-2 py-1 md:text-sm rounded-2xl"
              >
                Live Visit
              </Link>
            </motion.div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExtraProject;
