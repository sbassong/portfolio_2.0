const ProjectPage= ({title, description, link, technologies, github, handleClicked}) => {


    return (
        <div className="project-page">
          <div onClick={handleClicked} className="close-page">X</div>
          <div className="details-cont">
            <h1 className="title">{title}</h1>
            <h2 className='technologies'>{technologies}</h2>
            <p className='description'>{description}</p>
            <div className="links-cont">
              <a href={link} rel="noreferrer" target="_blank" className="">Demo</a>
              <a href={github} rel="noreferrer" target="_blank" className="">Github</a>
            </div>
          </div>            
        </div>
    )
}
export default ProjectPage