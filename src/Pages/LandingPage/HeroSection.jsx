export default function HeroSection(){
    return(
        <section id="hero" className="hero"> 
            <div className="hero--box">
                <div className="hero--content">
                    <p className="hero--oppening sub--title">Hey, I'm Luara!</p>
                    <h1 className="hero--title">Software Developer</h1>
                    <p className="hero--description sub--title">
                    Currently focused on React, but still exploring other technologies 
                    <br />
                    and frameworks that catch my interest! if you're looking for 
                    <br />
                    a developer to add to your team, I'd love to hear from you!
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