'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [mobile, setMobile] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center"
    >

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden md:flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md w-2/3 justify-between h-14"
      >
        <h1>Pranay</h1>

        <div>
          {links.map((link) => (
            <motion.div key={link.id} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                href={`#${link.id}`}
                className={
                  active === link.id
                    ? "px-4 py-1.5 text-base rounded-full bg-white/10 text-white"
                    : "px-4 py-1.5 text-base rounded-full text-white/60 hover:text-white hover:bg-white/5"
                }
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile */}
      <div className="md:hidden w-full px-4 flex flex-col items-center">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobile(!mobile)}
          className="text-white bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm w-60/100"
        >
          Menu
        </motion.button>

        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.35 }}
              className="absolute bg-black/40 border z-7 border-white/10 backdrop-blur-md px-6 py-4 rounded-xl w-full h-screen"
            >
              <div className="mt-3 flex flex-col items-center gap-2 border border-gray-800 rounded-2xl p-4">
                <div className="flex justify-between items-center w-full p-4">
                  <h1>Navigation</h1>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="border border-gray-400 p-2"
                    onClick={() => setMobile(false)}
                  >
                    <X />
                  </motion.button>
                </div>

                {links.map((link) => (
                  <motion.div key={link.id} whileTap={{ scale: 0.95 }} className="w-full">
                    <Link
                      href={`#${link.id}`}
                      onClick={() => setMobile(false)}
                      className={
                        active === link.id
                          ? "px-4 py-2 m-2 rounded-md bg-white/10 text-white w-full text-center"
                          : "px-4 py-2 m-2 rounded-md text-white/60 hover:text-white hover:bg-white/5 w-full text-center"
                      }
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
