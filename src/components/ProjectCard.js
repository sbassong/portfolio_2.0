import React from 'react';
import { useState } from "react";
import ProjectPage from "../pages/ProjectPage"
import Overlay from "react-overlay-component";

const ProjectCard = ({project}) => {
	const [isOpen, toggleIsOpen] = useState(false)

	const configs = {
		animate: true,
		clickDismiss: true,
		escapeDismiss: true,
		contentClass: "overlay-content overlay-wrapper "
	}

	return (
		<div className="project-card">
			<div className="project-wrapper" onClick={() => toggleIsOpen(true)}>
				<img src={project.image} alt="project screenshot" />
			</div>

				<div id='project-card-title'>{project.title}</div>
			<div className="project-details" onClick={() => toggleIsOpen(true)}>
				<div id="project-card-description">{project.description}</div>
				<div id="project-card-techs">{project.technologies}</div> 
			</div>

			<div className="links-cont">
				<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
				<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
			</div>
		</div>
	)
}
export default ProjectCard
