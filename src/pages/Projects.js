import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { professionalProjectsData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects" className="page">
            <Carousel
                className='projects-carousel'
                direction='1500'
                navButtonsAlwaysVisible={true}
                activeIndicatorIconButtonProps={{ style: { backgroundColor: '#52cdfe' }}}
                navButtonsProps={{style: {height:  '2.5rem', width: '2.5rem', marginTop: '-2rem'}}}
            >
                { professionalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </Carousel>
        </div>
    )
    
}

export default Projects;