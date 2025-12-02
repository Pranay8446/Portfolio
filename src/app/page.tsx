import AboutSection from "@/components/AboutSection"
import GetInTouch from "@/components/GetInTouch"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProjectSection from "@/components/ProjectSection"

const page = () => {
  return (
    <div 
    className="h-auto" 
    > 
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <GetInTouch />
    </div>
  )
}

export default page