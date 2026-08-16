import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Prakash A. All rights reserved.</p>
      </footer>
    </>
  );
}
