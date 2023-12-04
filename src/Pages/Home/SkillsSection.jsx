import data from '../../data/index.json';

export default function Skills(){
    return(
        <section className='skills' id='skills'>
            <div className='portfolio-container'>
                <p className='sub--title'>My Skills</p>
                <h2 className=''>Thechnical Skills</h2>
            </div>
            {// Thecnical skills
            }
            <div className='skills--box'>
                <div className='skills--content'>
                <h3>Frontend</h3>
                <div className='skills--card'>
                    {data?.skills['front-end']?.map((skill, index)=>(
                        <div key= {index} className='skills--end'>
                            <div className="skill--icon">
                                <img className="icon" src={skill.src} alt={skill.title}/>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <div className='skills--content'>
                <h3>Backend</h3>
                <div className='skills--card'>
                    {data?.skills['back-end']?.map((skill, index)=>(
                        <div key= {index} className='skills--end'>
                            <div className="skill--icon">
                                <img className="icon" src={skill.src} alt={skill.title}/>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <div className='skills--content'>
                <h3>DevOps</h3>
                <div className='skills--card'>
                    {data?.skills['dev-ops']?.map((skill, index)=>(
                        <div key= {index} className='skills--end'>
                            <div className="skill--icon">
                                <img className="icon" src={skill.src} alt={skill.title}/>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            {// Other skills
            }
            <div>
                <h2 className=''>Other Skills</h2>
            </div>
        </section>
    );
};