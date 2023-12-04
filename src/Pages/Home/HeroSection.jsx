export default function HeroSection(){
    return(
        <section id="hero" className="hero"> 
            <div className="hero--box">
                <div className="hero--content">
                    <p className="hero--oppening sub--title">Hey, I'm Luara!</p>
                    <h1 className="hero--title">Software Developer</h1>
                    <p className="hero--description sub--title">
                    ICT enthusiast, eager to make an impact through technology! 
                    <br /> 
                    Currently working with React.js and Django.
                    </p>
                </div>
                <button className="btn btn-outline"> Get in touch with me </button>
            </div>
            <div className="hero--img">
                <img src="./imgs/profile/profile-lightgray.jpg" alt="Oppenin Section"/>
            </div>
        </section>
    );
};