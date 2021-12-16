import { ProjectData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects">
            <h1>Some projects I enjoyed building</h1>
            <div>
                {
                    ProjectData.map((project) => (
                        <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} link={project.link} technologies={project.technologies} subtitle={project.subtitle}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects