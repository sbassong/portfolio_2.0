import { useState } from "react";
import ProjectPage from "../pages/ProjectPage"
import Overlay from "react-overlay-component";

const ProjectCard = ({project}) => {
    const [isOpen, toggleIsOpen] = useState(false)

    const configs = {
        animate: true,
        clickDismiss: true,
        escapeDismiss: true,
        contentClass: "overlay-wrapper"
    }

    return (
        <div className="project-card ">
            <div className="project-wrapper" onClick={() => toggleIsOpen(true)}>
                <img src={project.image} alt="project screenshot" />
                <div className="project-details"></div> 
            </div>

            
                <Overlay className="" configs={configs} isOpen={isOpen} closeOverlay={() => toggleIsOpen(false)} >
                    <ProjectPage title={project.title} description={project.description} image={project.image} link={project.link} technologies={project.technologies} subtitle={project.subtitle}/> 
                </Overlay>
        </div>
    )
}
export default ProjectCard
