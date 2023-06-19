import React from 'react';
import { professionalProjectsData, personalProjectsData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects" className="page">
            <h2>Professional projects</h2>
            <div>
                { professionalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>
            <h2>Personal projects</h2>
            <div>
                { personalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>
        </div>
    )
    
}

export default Projects;