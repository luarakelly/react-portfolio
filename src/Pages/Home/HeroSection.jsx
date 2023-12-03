export default function HeroSection(){
    return(
        <section id="hero" className="hero"> 
            <div className="hero--box">
                <div className="hero--content">
                    <p className="hero--oppening">Hey, I'm Luara</p>
                    <h1 className="hero--title">Software Developer</h1>
                    <p className="hero--description">
                    ICT enthusiast, eager to make an impact through technology! 
                    <br /> 
                    Currently working with React.js and Django.
                    </p>
                </div>
                <button className="btn btn-outline"> Connect with Me</button>
            </div>
            <div className="hero--img">
                <img src="./imgs/profile-lightgray.jpg" alt="Oppenin Section"/>
            </div>
        </section>
    );
};