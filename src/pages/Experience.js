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
            <div className='experience-container'>         
                <nav onClick={(e) => (e.target.id >= 1 && e.target.id <= 10) && handleClick(e)}>
                    <h1>Software Engineering</h1>
                    <div>
                        <Link to={`/experience/1`}><p id={1}>Full time</p></Link>
                        <Link to={`/experience/2`}><p id={2}>Internship</p></Link>
                        <Link to={`/experience/3`}><p id={3}>Freelance</p></Link>
                    </div>
                    <h1>Research</h1>    
                    <div>
                        <Link to={`/experience/4`}><p id={4}>USDA</p></Link>
                        <Link to={`/experience/5`}><p id={5}>Research Foundation in Tropical Diseases</p></Link> 
                    </div>
                    <h1>Leadership</h1>    
                    <div>
                        <Link to={`/experience/6`}><p id={6}>Executive DEI Council</p></Link>
                        <Link to={`/experience/7`}><p id={7}>2 x ERG Leader</p></Link>  
                    </div>
                    <h1>Volunteer</h1>    
                    <div>
                        <Link to={`/experience/8`}><p id={8}>Ada Developers Academy</p></Link>
                        <Link to={`/experience/9`}><p id={9}>Shelter in Code</p></Link>
                        <Link to={`/experience/10`}><p id={10}>Pacific Science Center</p></Link>
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