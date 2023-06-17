import React from 'react';
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { ExperienceData } from '../data.js';
import ExperienceCard from '../components/ExperienceCard';


const Experience = () => {
    const [clickedJob, setClickedJob] = useState(ExperienceData[0]);
    const [clicked, toggleClicked] = useState(false);
    const [isEngineering, toggleIsEngineering] = useState(true);
    const [isPreviousWork, toggleIsPrevious] = useState(false);
    
    const handleEngineeringWork = (e) => {
        const devCareer = document.getElementById("engineering-positions");
        if (e?.target === devCareer) toggleIsEngineering(!isEngineering);
    };

    const handlePreviousWork = (e) => {
        const previousCareer = document.getElementById("previous-positions");
        if (e?.target === previousCareer) toggleIsPrevious(!isPreviousWork);
    };
    
    const handleClickPosition = (e) => {;
        if (e?.type === "click") {
            setClickedJob(ExperienceData[e.target.id-1 ]);
            toggleClicked(true);
        }
    };

    return (
        <div id="experience" className="page" >
            <h1>Experience</h1>
            <p>Workplaces where I've made an impact</p>
            <div className='experience-container'>
                <div className='positions-container'>
                    <nav  className="job-positions">
                        <h2 id="engineering-positions" onClick={handleEngineeringWork} >Software Engineering</h2>
                        { isEngineering && 
                            <div onClick={(e) => (e.target.id > 0 && e.target.id <= 2) && handleClickPosition(e)}>
                                <NavLink to={'/experience/1'}><p id={1}>Locana</p></NavLink>
                                <NavLink to={`/experience/2`}><p id={2}>Center Centre</p></NavLink>
                            </div>
                        }
                    </nav>

                    <nav className="job-positions">
                        <h2 id="previous-positions" onClick={handlePreviousWork} >Previous Work</h2>    
                        { isPreviousWork &&
                            <div onClick={(e) => (e.target.id > 3 && e.target.id <= 10) && handleClickPosition(e)}>
                                <NavLink to={`/experience/6`}><p id={6}>Rainier Prep Charter School</p></NavLink>
                                <NavLink to={`/experience/4`}><p id={4}>Washington State University</p></NavLink> 
                                <NavLink to={`/experience/5`}><p id={5}>Nevada State College</p></NavLink> 
                                <NavLink to={`/experience/9`}><p id={9}>Nevada State College</p></NavLink>   
                            </div>
                        }
                    </nav>
                </div>       
                
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