import project from "@/data/project.json"
import Link from "next/link"

const ProjectSection = () => {
  
  return (
    <div
    id="projects"
     className="flex justify-center items-center p-5 flex-col">
      <div>
        <h1 className="text-4xl font-semibold md:mt-25 mb-5">My Project</h1>
      </div>
      <div className="h-auto flex flex-col md:grid md:grid-cols-2 gap-4 m-2 md:w-85/100">


        {project.map((elem) => (
          <div
            key={elem.title}
           className="h-full border border-gray-700 p-6">

            <div className="bg-red-400 h-45 md:h-60 w-full">
                <img src={elem.image} alt={elem.title} 
                  className="h-full w-full bg-cover hover:scale-105 transition-all"
                />
            </div>

            <div className="my-2">
              <h1 className="text-2xl font-medium">{elem.title}</h1>
              <p className="text-lg text-gray-400">{elem.description}</p>
            </div>

            <div className="flex gap-4 flex-wrap mb-3">

              {elem.techStack.map((elem) => (
              <span key={elem} className="px-3 rounded-2xl py-1 border border-gray-100 min-w-5">
                {elem}
              </span>
              ))}
              
            </div>

            <Link href={elem.link} target="_blank"
            className="mt-3 border border-gray-200 px-3 py-1 rounded-2xl"
            >
              preview
            </Link>

          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link href={"/projects"} 
        className="border border-gray-400 px-3 py-1 text-sm rounded-full md:text-base md:py-2 md:px-4"
        >
          View all project
        </Link>
      </div>
    </div>
  )
}

export default ProjectSection