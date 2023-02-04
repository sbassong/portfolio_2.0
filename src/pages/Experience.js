import React from 'react';
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { ExperienceData } from '../data.js';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
    const [clickedJob, setClickedJob] = useState(ExperienceData[0]);
    const [clicked, toggleClicked] = useState(false);
    
    const handleClick = async (e) => {;
        await e 
        console.log(clickedJob)
        console.log(e.target)
        if (e.type === "click") {
            setClickedJob(ExperienceData[e.target.id-1 ]);
            toggleClicked(true);
        }
        console.log(clickedJob)
    };

    return (
        <div id="experience" className="page" >
            <h1>Experience</h1>
            <p>Workplaces where I've made an impact</p>
            <div className='experience-container'>         
                <nav onClick={(e) => (e.target.id > 0 && e.target.id <= 10) && handleClick(e)}>
                    <h2>Software Engineer</h2>
                    <div>
                        <NavLink to={'/experience/1'}><p id={1}>Locana</p></NavLink>
                        <NavLink to={`/experience/2`}><p id={2}>Center Centre-UIE</p></NavLink>
                        <NavLink to={`/experience/3`}><p id={3}>General Assembly</p></NavLink>
                    </div>
                    <h2>Researcher</h2>    
                    <div>
                        <NavLink to={`/experience/4`}><p id={4}>Washington State University</p></NavLink>
                        <NavLink to={`/experience/5`}><p id={5}>Nevada State College</p></NavLink> 
                    </div>
                    <h2>Educator</h2>    
                    <div>
                        <NavLink to={`/experience/6`}><p id={6}>Rainier Prep - Full</p></NavLink>
                        <NavLink to={`/experience/7`}><p id={7}>Rainier Prep - Associate</p></NavLink>
                        <NavLink to={`/experience/8`}><p id={8}>University of Nevada, Reno</p></NavLink>  
                        <NavLink to={`/experience/9`}><p id={9}>Nevada State College</p></NavLink>  
                        <NavLink to={`/experience/10`}><p id={10}>City of Henderson</p></NavLink>  
                    </div> 
                </nav>
                
                <nav className='exp-cards-container'>
                    {
                        !clicked
                        ? <ExperienceCard title={clickedJob.title} company={clickedJob.company} tenure={clickedJob.tenure} duties={clickedJob.duties}/>
                        : <Routes>
                            <Route key={clickedJob.id} path={`${clickedJob.id}`} element={<ExperienceCard title={clickedJob.title} company={clickedJob.company} tenure={clickedJob.tenure} duties={clickedJob.duties}/>}/> 
                        </Routes>
                    }
                </nav>
            </div>
        </div>
    );
}

export default Experience;