import React, { useEffect, useState } from 'react';
import AgileUX from '../ProjectIcons/AgileUX';
import Amphi from '../ProjectIcons/Amphi';
import Gverse from '../ProjectIcons/Gverse';
import Scienteer from '../ProjectIcons/Scienteer';


const ProjectCard = ({project}) => {
	const [stack, setStack] = useState(null);

	useEffect(() => {
		if (project.id === 1) setStack(<AgileUX id="project-card-techs" />);
		else if (project.id === 2) setStack(<Gverse id="project-card-techs" />);
		else if (project.id === 3) setStack(<Amphi id="project-card-techs" />);
		else if (project.id === 4) setStack(<Scienteer id="project-card-techs" />);
	}, [project.id])

	return (
		<div className="project-card">
			<div className="project-img-wrapper">
				<img src={project.image} alt="project screenshot" />
			</div>

			<div className="project-details">
				<div id='project-card-title'>{project.title}</div>
				{stack}
				{<div id="project-card-description">
					<div className='inner'>
						{project.description}
						{ <div className="project-card-buttons">
							<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
							<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
						</div>}
					</div>
				</div>}

				{ <div className="project-card-buttons">
					<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
					<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
				</div>}
			</div>
		</div>
	)
}
export default ProjectCard

