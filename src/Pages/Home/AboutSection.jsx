
export default function About() {
    return (
        <section id="AboutMe" className="about--me">
            <div className='about--me--img'>
                <br />
                <h2 className='skills--box--title'>About Me</h2>
            </div>
            <div className="skills--content2">
                <div className='skills--card'>
                <h3 className='text-lg'>Cros-Industry Experience</h3>
                    <p className='text-md'>Before web deveopment, I was a microbiologist and teacher. My backgroung contributed with my communicaion and team work skills. </p>
                </div>
                <div className='skills--card'>
                <h3 className='text-lg'>Languages Knowledge levels</h3>
                    <p className='text-md'>I have fluent English, Intermediate Spannish and Basic Finnish. My native language in Portuguese.</p>
                    </div>
                <div className=''>
                    {/* Content for the third card */}
                </div>
                <img className='profile-photo' src="./imgs/profile/profile.jpg" alt="Profile pic" />
                <div className='skills--card'>
                <h3 className='text-lg'>Full-Stack Familiarizarion</h3>
                    <p className='text-md'>As a researcher by nature, for me it is importante to khow all sides of the application development process. That is why, I am always willing to learn new technologies.</p>
                </div>
                <div className='skills--card'>
                <h3 className='text-lg'>Hobbies</h3>
                    <p className='text-md'>I am quite active person, enjoy outside activities and sports related, such as montain biking, rollerblading, hiking, and clibing.</p>
                </div>
            </div>
        </section>
    );
}
