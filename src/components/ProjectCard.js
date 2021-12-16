const ProjectCard = ({title, description, image, link, technologies, github}) => {


    return (
        <div className="project-card">
                <div className="project-wrapper">
                    <img src={image} alt="project screenshot" />

                    <a href={link} target="_blank" rel="noreferrer">
                        <div className="project-details">
                            Click Me!
                        </div>            
                    </a>
                </div>
        </div>
    )
}
export default ProjectCard