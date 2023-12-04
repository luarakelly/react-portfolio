import data from '../../data/index.json';

export default function Skills(){
    return(
        <section className='skills' id='skills'>
            <div className='portfolio-container'>
                <p className='section--title'>My Skills</p>
                <h2 className='skills--oppening'>Projects:</h2>
            </div>
            <div className='project--box'>
                {data?.projects?.map((project, index)=>(
                    <div key={index} className='project--content'>
                        <div className='project--card'>
                            <div className='project--card--img'>
                                <img src={project.src} alt="App" />
                            </div>
                            <dir className="project--card--info">
                                <h3 className='project--card--title'>{project.title}</h3>
                                <p className='project--card--description'>{project.description}</p>
                            </dir>
                        </div>
                    </div>
                ))};
            </div>
        </section>
    );
};