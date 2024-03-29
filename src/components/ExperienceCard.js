import React from 'react';

const ExperienceCard = ({title, tenure, duties}) => {

	return (
		<div className="experience-card-wrapper">
			<h1>{title}</h1>
			<p>{tenure}</p>
			<ul>
				{
					duties.map((duty, index) => (
						<li key={index}> {duty} </li>
					))  
				}  
			</ul>
		</div>
	)
}
export default ExperienceCard