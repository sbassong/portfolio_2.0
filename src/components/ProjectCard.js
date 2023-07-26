import React, { useEffect, useState } from 'react';
import AgileUX from '../ProjectIcons/AgileUX';
import Amphi from '../ProjectIcons/Amphi';
import Gverse from '../ProjectIcons/Gverse';
import Scienteer from '../ProjectIcons/Scienteer';
import Portfolio1 from '../ProjectIcons/Portfolio-1';
import ShopifyCRUD from '../ProjectIcons/ShopifyCrud';


const ProjectCard = ({project}) => {
	const [stack, setStack] = useState(null);

	const goToDemo = () => `location.href='${project.link}'`

	useEffect(() => {
		if (project.id === 1) setStack(<Gverse id="project-card-techs" />);
		else if (project.id === 2) setStack(<AgileUX id="project-card-techs" />);
		else if (project.id === 3) setStack(<Amphi id="project-card-techs" />);
		else if (project.id === 4) setStack(<Portfolio1 id="project-card-techs" />);
		else if (project.id === 5) setStack(<Scienteer id="project-card-techs" />);
		else if (project.id === 6) setStack(<ShopifyCRUD id="project-card-techs" />);
	}, [project.id])

	return (
		<div className="project-card">
			<a href={project.link} rel="noreferrer" target="_blank">
				<div className="project-img-wrapper" onClick={goToDemo}>
					<img src={project.image} alt="project screenshot" />
				</div>
			</a>

			<div className="project-details">
				<div id='project-card-title'>{project.title}</div>
				{stack}
				{<div id="project-card-description">
					<div className='inner'>
						{project.description}
						{ <div className="project-card-buttons">
							<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
							<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
						</div>}
					</div>
				</div>}

				{ <div className="project-card-buttons">
					<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
					<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
				</div>}
			</div>
		</div>
	)
}
export default ProjectCard

