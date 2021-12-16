const ProjectCard = ({title, description, image, link, technologies, github}) => {


    return (
        <div className="project-card">
                <div className="project-wrapper">
                    <img src={image} alt="project screenshot" />

                    <a href={link} target="_blank" rel="noreferrer">
                        <div className="project-details">
                            Click me to learn more
                        </div>            
                    </a>
                </div>
        </div>
    )
}
export default ProjectCard