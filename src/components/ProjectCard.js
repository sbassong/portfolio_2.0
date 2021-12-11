const ProjectCard = ({title, description, image, link, technologies, github}) => {


    return (
        <div className="project-card">
                <div className="project-wrapper">
                    <img src={image} alt="project screenshot" />

                    <a href={link} target="_blank" rel="noreferrer">
                        <div className="project-details">
                            <h1>{title}</h1>
                            <h2 className="">
                                <a href={link} key={image} rel="noreferrer" target="_blank" className="">Live site </a>
                                | 
                                <a href={github} key={image} rel="noreferrer" target="_blank" className=""> Github repo</a>
                            </h2>
                            <h2 className='technologies'>{technologies}</h2>
                            <p className='description'>{description}</p>
                        </div>            
                    </a>
                </div>
        </div>
    )
}
export default ProjectCard