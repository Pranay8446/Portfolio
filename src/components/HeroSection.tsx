'use client'

import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div
        id="home"
        className="h-screen md:h-160 w-full rounded-md flex flex-col items-center justify-center mx-auto py-10 px-6 md:py-0"
    >
        <div className="flex mt-45">
            <div className="h-30 w-30 bg-gray-900 rounded-full">

            </div>
        </div>
        <div className=" mt-10 z-10 flex justify-center items-center flex-col   py-2 text-center md:w-1/2">
            <h1 
                className="text-4xl tracking-tight font-bold "
            >I’m <span className="text-pink-600">Pranay Chandurkar</span> - Frontend Engineer With Growing Full-Stack Expertise.</h1>
            <p 
                className="mt-4 text-gray-400  text-lg"
            >I build fast, accessible, and SEO-friendly web applications using React.js, Next.js, Tailwind CSS, and shadcn/ui. With strong full-stack skills in JavaScript and TypeScript, I focus on clean code, smooth user experiences, and modern UI/UX. I create high-performance frontends and deliver scalable backend integrations when needed.</p>
           
        </div>
         <div className="flex flex-col md:flex-row md:gap-3">
                <div className="mt-5 flex flex-col md:flex-row md:gap-3">
                    <Link href="#contact" 
                        className="font-normal bg-white text-black rounded-3xl px-10 mb-2 md:mb-0 py-2"
                    >
                        Get in touch
                    </Link>
                    <Link href="#projects" 
                        className="font-normal bg-zinc-800 text-white rounded-3xl px-10  py-2"
                    >
                        View project
                    </Link>
                    <Link href="" 
                        className="hidden md:block font-normal bg-zinc-800 text-white rounded-3xl px-10  py-2"
                    >
                        Download CV
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-3 mt-3">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className="border border-gray-700 p-2  rounded-full"
                    >
                        <Linkedin size={22} />
                    </a>
                    <a href="https://github.com/Pranay8446" target="_blank" rel="noopener noreferrer"
                        className="border border-gray-700 p-2 rounded-full"
                    >
                        <Github size={22} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className="border border-gray-700 p-2 rounded-full"
                    >
                        <Instagram size={22} />
                    </a>
                </div>
        </div>
    </div>
  )
}

export default HeroSection