import React, { useEffect, useState } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import { muiOverrides } from '../styles/muiOverrides';
import AgileUX from '../ProjectIcons/AgileUX';
import Amphi from '../ProjectIcons/Amphi';
import Gverse from '../ProjectIcons/Gverse';
import Scienteer from '../ProjectIcons/Scienteer';

const CustomWidthTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
	))({
		[`& .${tooltipClasses.tooltip}`]: {
			maxWidth: 303,
		},
	});

const ProjectCard = ({project}) => {
	const [stack, setStack] = useState(null);
	const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

	useEffect(() => {
		if (project.id === 1) setStack(<AgileUX id="project-card-techs" />);
		else if (project.id === 2) setStack(<Gverse id="project-card-techs" />);
		else if (project.id === 3) setStack(<Amphi id="project-card-techs" />);
		else if (project.id === 4) setStack(<Scienteer id="project-card-techs" />);
	}, [])

	return (
		<div className="project-card">
			<div className="project-img-wrapper">
				<img src={project.image} alt="project screenshot" />
			</div>

			<div className="project-details">
				<div id='project-card-title'>{project.title}</div>
				{stack}
				<CustomWidthTooltip
					title={<div id="project-card-description">{project.description}</div>}
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					TransitionComponent={Fade}
					TransitionProps={{ timeout: 200 }}
				>
					{<div id="project-card-description">{project.description}</div>}
				</CustomWidthTooltip>

				{ <div className="project-card-buttons">
					<a href={project.link} rel="noreferrer" target="_blank" className="">Demo</a>
					<a href={project.github} rel="noreferrer" target="_blank" className="">Github</a>
				</div>}
			</div>
		</div>
	)
}
export default ProjectCard

