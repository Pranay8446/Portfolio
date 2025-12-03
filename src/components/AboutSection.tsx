import Image from "next/image";

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
    <div
        id="about"
        className="h-auto flex flex-col justify-center items-center m-4"
    >
        
        <div className="text-center p-5 md:w-2/3 ">
            <h1 className="text-4xl mb-5 mt-20 font-semibold md:mt-25">About me</h1>
            {data.map((elem) => (
                <p  key={elem.text}
                    className="m-3 text-lg"
                >
                    {elem.text}
                </p>
            ))}
        </div>
        <div className="flex justify-center items-center">
            <div className="grid md:flex  grid-cols-3 m-4 gap-17 justify-center items-center">
                <div className="h-10 w-10 text-5xl"><i className="ri-html5-fill"></i></div>
                <div className="h-10 w-10 text-5xl"><i className="ri-css3-fill"></i></div>
                <div className="h-10 w-10 text-5xl"><i className="ri-tailwind-css-fill"></i></div>
                <div className="h-10 w-10 text-5xl"><i className="ri-nextjs-fill"></i></div>
                <div className="h-10 w-10 text-5xl"><i className="ri-reactjs-fill"></i></div>
                <div className="h-10 w-10 text-5xl"><i className="ri-javascript-fill"></i></div>
                <div className="h-10 w-10 text-5xl"><i className="ri-nodejs-fill"></i></div>
            </div>
        </div>

    </div>
    
  )
}

export default AboutSection