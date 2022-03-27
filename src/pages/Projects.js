import { professionalProjectsData, personalProjectsData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects">
            <h1>Featured Projects</h1>
            <p>Appplications I loved building. Click cards to learn more!</p>

            <h3>Professional projects</h3>
            <div>
                { professionalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>

            <h3>Passion projects</h3>
            <div>
                { personalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>
        </div>
    )
    
}

export default Projects