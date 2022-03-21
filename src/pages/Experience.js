import { Route, Routes, Link } from "react-router-dom"
import { useState } from "react"
import ExperienceCard from '../components/ExperienceCard'
import { ExperienceData } from '../data'

const Experience = () => {
    const [clickedJob, setClickedJob] = useState(ExperienceData[0])
    const [clicked, toggleClicked] = useState(false)
    
    const handleClick = async (e) => {
        await e 
        if (e.type === "click") {
            setClickedJob(ExperienceData[e.target.id - 1])
            toggleClicked(true)
        }
    }

    return (
        <div id="experience" >
            <h1>Experience</h1>
            <p>Workplaces where I've made an impact</p>
            <div className='experience-container'>         
                <nav onClick={(e) => (e.target.id >= 1 && e.target.id <= 11) && handleClick(e)}>
                    <h1>Software Engineer</h1>
                    <div>
                        <Link to={`/experience/1`}><p id={1}>Locana</p></Link>
                        <Link to={`/experience/2`}><p id={2}>Center Centre-UIE</p></Link>
                        <Link to={`/experience/3`}><p id={3}>General Assembly</p></Link>
                    </div>
                    <h1>Researcher</h1>    
                    <div>
                        <Link to={`/experience/4`}><p id={4}>Washington State University</p></Link>
                        <Link to={`/experience/5`}><p id={5}>Nevada State College</p></Link> 
                    </div>
                    <h1>Educator</h1>    
                    <div>
                        <Link to={`/experience/6`}><p id={6}>Rainier Prep - Full</p></Link>
                        <Link to={`/experience/7`}><p id={7}>Rainier Prep - Associate</p></Link>
                        <Link to={`/experience/8`}><p id={8}>University of Nevada, Reno</p></Link>  
                        <Link to={`/experience/9`}><p id={9}>Nevada State College</p></Link>  
                        <Link to={`/experience/10`}><p id={10}>City of Henderson</p></Link>  
                    </div> 
                </nav>
                
                <div className='exp-cards-container'>
                    {
                        !clicked
                        ? <ExperienceCard title={clickedJob.title} company={clickedJob.company} tenure={clickedJob.tenure} duties={clickedJob.duties}/>
                        : <Routes> <Route key={clickedJob.id} path={`/experience/${clickedJob.id}`} element={<ExperienceCard title={clickedJob.title} company={clickedJob.company} tenure={clickedJob.tenure} duties={clickedJob.duties}/>}/> </Routes>
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience