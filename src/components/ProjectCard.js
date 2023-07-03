import React from 'react';
import { useState } from "react";
import AgileUX from '../ProjectIcons/AgileUX';
import Amphi from '../ProjectIcons/Amphi';
import Gverse from '../ProjectIcons/Gverse';
import Scienteer from '../ProjectIcons/Scienteer';

const ProjectCard = ({project}) => {
	const [stack, setStack] = useState(null);

	useState(() => {
		if (project.id === 1) setStack(<AgileUX id="project-card-techs" />);
		else if (project.id === 2) setStack(<Gverse id="project-card-techs" />);
		else if (project.id === 3) setStack(<Amphi id="project-card-techs" />);
		else if (project.id === 4) setStack(<Scienteer id="project-card-techs" />);
	}, [])

	return (
		<div className="project-card">
			<div className="project-wrapper">
				<img src={project.image} alt="project screenshot" />
			</div>
			<div id='project-card-title'>{project.title}</div>
			{stack}
			<div className="project-details">
				<div id="project-card-description">{project.description}</div>
			</div>
			<div className="links-cont">
				<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
				<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
			</div>
		</div>
	)
}
export default ProjectCard
