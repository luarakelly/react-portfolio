import HeroSection from "../Home/HeroSection";
import Skills from "../Home/SkillsSection";
import About from "../Home/AboutSection";
import Projects from "../Home/MainSection";
import Contact from "../Home/ContactSection";
import Footer from "../Home/Footer";

export default function Home(){
    return(
        <>
            <HeroSection/>
            <Skills/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
};