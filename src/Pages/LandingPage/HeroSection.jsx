export default function HeroSection(){
    return(
        <section id="hero" className="hero"> 
            <div className="hero--box">
                <div className="hero--content">
                    <p className="hero--oppening sub--title">Hey, I'm Luara!</p>
                    <h1 className="hero--title">Software Developer</h1>
                    <p className="hero--description sub--title">
                    Currently focused on React, but still exploring other technologies 
                    and frameworks that catch my interest! If you're looking for 
                    a developer to add to your team, I'd love to hear from you!
                    </p>
                </div>
                <button className="btn btn-outline"> Get in touch with me </button>
            </div>
            <div className="hero--img">
                <img src="./imgs/profile/profile-lightgray.png" alt="Oppenin Section"/>
            </div>
        </section>
    );
};