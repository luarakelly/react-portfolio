import data from '../../data/index.json';

export default function Skills(){
    return(
        <section className='skills' id='skills'>
            <div className='skills--container'>
                <p className='section--title'>My Skills</p>
            </div>
            {// Thecnical skills
            }
            <div className='skills--box'>
                <h2 className='skills--box--title'>Technical Skills</h2>
                <hr></hr>
                <br />
                <div className='skills--content'>
                    <h3>Frontend</h3>
                    {data?.skills['front-end']?.map((skill, index)=>(
                        <div key= {index} className='skills--icon'>
                            <img className='icon' src={skill.src} alt={skill.title}/>  
                        </div>
                    ))}
                
                    <h3>Backend</h3>
                    {data?.skills['back-end']?.map((skill, index)=>(
                        <div key= {index} className='skills--icon'>
                            <img className='icon' src={skill.src} alt={skill.title}/>  
                        </div>
                    ))}
               
                    <h3>DevOps</h3>
                    {data?.skills['dev-ops']?.map((skill, index)=>(
                        <div key= {index} className='skills--icon'>
                            <img className='icon' src={skill.src} alt={skill.title}/>  
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};