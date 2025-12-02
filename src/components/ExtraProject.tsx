import extraProject from "@/data/extraProject.json"
import Link from "next/link"

const ExtraProject = () => {
  
  return (
    <div
     className="flex justify-center items-center p-5 flex-col">
    
        <div className="flex items-start w-85/100 md:mt-5">
            <div className="text-sm">
                <Link href={"/"} 
                className="text-gray-500"
                >
                    Home {'>'} 
                </Link>
                <span className="mx-1"> Project</span>
            </div>
        </div>
      <div>
        <h1 className="text-4xl font-semibold md:mt-10 mb-5">My Extra Project</h1>
      </div>
      <div className="h-auto flex flex-col md:grid md:grid-cols-3 gap-4 m-2 md:w-85/100">


        {extraProject.map((elem) => (
          <div
            key={elem.title}
           className="h-full border border-gray-700 p-6">

            <div className="bg-red-400 h-45 md:h-45 w-full">
                <img src={elem.image} alt={elem.title} 
                  className="h-full w-full bg-cover hover:scale-105 transition-all"
                />
            </div>

            <div className="my-2">
              <h1 className="text-xl font-medium">{elem.title}</h1>
              <p className="text-lg text-gray-400 md:text-sm">{elem.description}</p>
            </div>

            <div className="flex gap-4 flex-wrap mb-3">

              {elem.techStack.map((elem) => (
              <span key={elem} className="px-2 md:text-sm py-1 rounded-2xl border border-gray-800 min-w-5">
                {elem}
              </span>
              ))}
              
            </div>

            <Link href={elem.link} target="_blank"
            className="mt-3 border text-black bg-white font-medium border-gray-800 px-2 py-1 md:text-sm rounded-2xl"
            >
              Live Visit
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

export default ExtraProject