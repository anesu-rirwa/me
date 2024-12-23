import AboutMe from "@/components/about-me/index";
import LandingPage from "@/components/landing-page/index";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projects/index";
import ContactMe from "@/components/contact-me/index";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      
      <div>
        <LandingPage />
      </div>
      
      <div>
        <AboutMe />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <ContactMe />
      </div>
    </div>
  );
}
