import { ProjectData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects">
            <h1>Featured Projects</h1>
            <p>Some projects I loved building. Select a card to learn more!</p>
            <div>
                {
                    ProjectData.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects