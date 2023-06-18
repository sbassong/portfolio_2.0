import React, { useState } from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import { ExperienceData } from '../data.js';
import ExperienceCard from '../components/ExperienceCard';
import {ReactComponent as UpArrowIcon} from '../../src/styles/icons/up-arrow.svg';
import {ReactComponent as DownArrowIcon} from '../../src/styles/icons/down-arrow.svg';
import {ReactComponent as PinaIcon} from '../../src/styles/icons/pinia-logo.svg';

const activeBlue = {color: '#52cdfe'};
const defaultGray = {color: 'rgb(170, 165, 165)'};
const secondaryWhite = {color: 'white'};
const activeIcon = {fill: '#52cdfe'};
const defaultIcon = {fill: 'rgb(170, 165, 165)'};

const Experience = () => {
    const [clickedJob, setClickedJob] = useState(ExperienceData[0]);
    const [clicked, toggleClicked] = useState(false);
    const [isEngineering, toggleIsEngineering] = useState(true);
    const [isPreviousWork, toggleIsPrevious] = useState(false);
    const [activeJobId, setActiveJobId] = useState(1);

    
    const handleEngineeringWork = (e) => {
        const devCareer = document.getElementById("engineering-positions");
        if (e?.target === devCareer) toggleIsEngineering(!isEngineering);
    };
    
    const handlePreviousWork = (e) => {
        const previousCareer = document.getElementById("previous-positions");
        if (e?.target === previousCareer) toggleIsPrevious(!isPreviousWork);
    };

    const handleEngineeringArr = (e) => {
        const engIcon = document.querySelector(".eng-icon");
        if (e?.target === engIcon) toggleIsEngineering(!isEngineering);
    };

    const handlePreviousArr = (e) => {
        const prevIcon = document.querySelector(".prev-icon");
        if (e?.target === prevIcon) toggleIsPrevious(!isPreviousWork);
    };
    
    
    const handleClickPosition = (e) => {;
        if (e?.type === "click") {
            setClickedJob(ExperienceData[e.target.id-1 ]);
            toggleClicked(true);
            setActiveJobId(parseInt(e.target.id));
        }
    };

    // optional guided tour? maybe with a lighter tone?


    return (
        <div id="experience" className="page" >
            <h1>Experience</h1>
            <p>Workplaces where I've made an impact</p>
            <div className='experience-container'>
                <div className='positions-container'>
                    <nav>
                        <h2 
                            id="engineering-positions"
                            style={isEngineering ? activeBlue : defaultGray}
                            onClick={handleEngineeringWork}
                        >   
                            Software Engineering
                            {isEngineering
                                ? <UpArrowIcon className='eng-icon' onClick={handleEngineeringArr} style={isEngineering ? activeIcon : defaultIcon} /> 
                                : <DownArrowIcon className='eng-icon' onClick={handleEngineeringArr} style={isEngineering ? activeIcon : defaultIcon} />
                            }
                        </h2>
                        { isEngineering && 
                            <div onClick={(e) => (e.target.id > 0 && e.target.id <= 2) && handleClickPosition(e)}>
                                <NavLink to={'/experience/1'}>
                                    <p id={1} style={activeJobId === 1 ? secondaryWhite : defaultGray}>
                                        {/* {activeJobId === 1 &&} */}
                                        Locana
                                    </p>
                                </NavLink>
                                <NavLink to={`/experience/2`}>
                                    <p id={2} style={activeJobId === 2 ? secondaryWhite : defaultGray}>Center Centre</p>
                                </NavLink>
                            </div>
                        }
                    </nav>

                    <nav>
                        <h2
                            id="previous-positions"
                            style={isPreviousWork ? activeBlue : defaultGray}
                            onClick={handlePreviousWork}
                        >
                            Previous Work
                            {isPreviousWork
                                ? <UpArrowIcon className='prev-icon' onClick={handlePreviousArr} style={isPreviousWork ? activeIcon : defaultIcon} />
                                : <DownArrowIcon className='prev-icon' onClick={handlePreviousArr} style={isPreviousWork ? activeIcon : defaultIcon}/>
                            }
                        </h2>    
                        { isPreviousWork &&
                            <div onClick={(e) => (e.target.id > 3 && e.target.id <= 10) && handleClickPosition(e)}>
                                <NavLink to={`/experience/6`}>
                                    <p id={3} style={activeJobId === 3 ? secondaryWhite : defaultGray}>Rainier Prep Charter School</p>
                                </NavLink>
                                <NavLink to={`/experience/4`}>
                                    <p id={4} style={activeJobId === 4 ? secondaryWhite : defaultGray}>Washington State University</p>
                                </NavLink> 
                                <NavLink to={`/experience/5`}>
                                    <p id={5} style={activeJobId === 5 ? secondaryWhite : defaultGray}>Nevada State College</p>
                                </NavLink> 
                                <NavLink to={`/experience/9`}>
                                    <p id={6} style={activeJobId === 6 ? secondaryWhite : defaultGray}>Nevada State College</p>
                                </NavLink>   
                            </div>
                        }
                    </nav>
                </div>       
                
                {/* { (isEngineering || isPreviousWork) && <nav className='exp-cards-container'> */}
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