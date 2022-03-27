import { professionalProjectsData, personalProjectsData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects" className="page">
            <h1>Featured Projects</h1>
            <p>Appplications I loved building. Click cards to learn more!</p>

            <h2>Professional projects</h2>
            <div>
                { professionalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>

            <h2>Passion projects</h2>
            <div>
                { personalProjectsData.map((project) => <ProjectCard key={project.id} project={project}/>) }
            </div>
        </div>
    )
    
}

export default Projects