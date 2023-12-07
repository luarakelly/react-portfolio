import HeroSection from "../LandingPage/HeroSection";
import Skills from "../LandingPage/SkillsSection";
import About from "../LandingPage/AboutSection";
import Projects from "../LandingPage/MainSection";
import Contact from "../LandingPage/ContactSection";
import Footer from "../LandingPage/Footer";

export default function Portfolio(){
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