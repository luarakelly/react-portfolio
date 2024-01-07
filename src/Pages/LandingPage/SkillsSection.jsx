import data from '../../data/skills.json';

export default function Skills(){
    return(
        <section className='skills' id='skills'>
            <div className='skills--container'>
                <p className='section--title'>My Skills</p>
            </div>
            {/*Thecnical skills*/}
            <div className='skills--box'>
                <h2 className='skills--box--title'>Technical Skills</h2>
                <table className='skills--content'>
                <tbody>
                    <tr>
                        <td><h3>Frontend</h3></td>
                        <td className='skills--icon'>
                            {data?.skills['front-end']?.map((skill, index)=>(
                                <img  key= {index} className='icon' src={skill.src} alt={skill.title}/>  
                            ))}
                        </td>                 
                    </tr>
                    <tr>
                        <td><h3>Backend</h3></td>
                        <td className='skills--icon'>
                        {data?.skills['back-end']?.map((skill, index)=>(
                            <img key= {index} className='icon' src={skill.src} alt={skill.title}/>  
                        ))}
                        </td>                 
                    </tr>
                    <tr>
                        <td><h3>DevOps</h3></td>
                        <td className='skills--icon'>
                        {data?.skills['dev-ops']?.map((skill, index)=>(
                            <img key= {index} className='icon' src={skill.src} alt={skill.title}/>                          
                        ))}
                        </td>                 
                    </tr>
                </tbody>
                </table>
            </div>
        </section>
    );
};