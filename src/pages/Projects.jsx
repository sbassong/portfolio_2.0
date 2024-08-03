import React from 'react';
import { professionalProjectsData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects" className="page">
            <div className='project-cards-container'>
                { professionalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>
        </div>
    )
    
}

export default Projects;