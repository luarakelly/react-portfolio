
export default function About() {
    return (
        <section id="AboutSection" className="about--me">
            <div>
                <br />
                <h2 className='skills--box--title'>About Me</h2>
            </div>
            
            <div className="skills--content2">
                <div className='skills--card'>
                    <h3 className='text-lg'>Cross-Industry Experience</h3>
                    <p className='text-md'>Before web deveopment, I was a microbiologist and teacher. My backgroung contributed with my communication and team work skills. </p>
                </div>
                <div className='skills--card'>
                    <h3 className='text-lg'>Languages Knowledge levels</h3>
                    <p className='text-md'>I have fluent English, Intermediate Spanish and Basic Finnish. My native language in Portuguese.</p>
                </div>
            </div>
            <div className='profile-photo-box'>
                <img className='profile-photo' src="./imgs/profile/profile.jpg" alt="Profile pic" />
            </div>
            <div className="skills--content2">
                <div className='skills--card'>
                    <h3 className='text-lg'>Full-Stack Familiarization</h3>
                    <p className='text-md'>As a researcher by nature, for me it is important to know all sides of the application development process. That is why, I am always willing to learn new technologies.</p>
                </div>
                <div className='skills--card'>
                    <h3 className='text-lg'>Hobbies</h3>
                    <p className='text-md'>I am quite active person, enjoy outside activities and sports related, such as mountain biking, rollerblading, hiking, and climbing.</p>
                </div>
            </div>
        </section>
    );
}
