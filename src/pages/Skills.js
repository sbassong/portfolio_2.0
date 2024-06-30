import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/skillsIcons/JavaScript.svg';
import {ReactComponent as Python} from '../../src/styles/skillsIcons/Python.svg';

// Frontend
import {ReactComponent as ReactJS} from '../../src/styles/skillsIcons/React.svg';
import {ReactComponent as Redux} from '../../src/styles/skillsIcons/Redux.svg';
import {ReactComponent as Sass} from '../../src/styles/skillsIcons/Sass.svg';
import {ReactComponent as HTML5} from '../../src/styles/skillsIcons/HTML5.svg';
import {ReactComponent as CSS3} from '../../src/styles/skillsIcons/CSS3.svg';
import {ReactComponent as MaterialUI} from '../../src/styles/skillsIcons/Material-UI.svg';
import {ReactComponent as TailwindCSS} from '../../src/styles/skillsIcons/Tailwind-CSS.svg';
import {ReactComponent as Vue} from '../../src/styles/skillsIcons/Vue.js.svg';
import {ReactComponent as Figma} from '../../src/styles/skillsIcons/Figma.svg';

// Backend
import {ReactComponent as MongoDB} from '../../src/styles/skillsIcons/MongoDB.svg';
import {ReactComponent as NodeJS} from '../../src/styles/skillsIcons/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/skillsIcons/PostgresSQL.svg';
import {ReactComponent as Express} from '../../src/styles/skillsIcons/Express.svg';
import {ReactComponent as Flask} from '../../src/styles/skillsIcons/Flask.svg';
import {ReactComponent as Pandas} from '../../src/styles/skillsIcons/Pandas.svg';
import {ReactComponent as Django} from '../../src/styles/skillsIcons/Django.svg';

// databases, devops, testing...
import {ReactComponent as Vercel} from '../../src/styles/skillsIcons/Vercel.svg';
import {ReactComponent as AWS} from '../../src/styles/skillsIcons/AWS.svg';
import {ReactComponent as Cypress} from '../../src/styles/skillsIcons/Cypress.svg';
import {ReactComponent as Jest} from '../../src/styles/skillsIcons/Jest.svg';
import {ReactComponent as Heroku} from '../../src/styles/skillsIcons/Heroku.svg';


const Skills = () => {
	return (
		<div id="skills" className="page">
			<div className='skills-wrap'>

				<h2 className='first-h2'>Frontend</h2>
				<div className="skills-container">
					<div className="skill-box">
						<JavaScript />
						JavaScript
					</div>
					<div className="skill-box">
						<ReactJS />
						React
					</div>
					<div className="skill-box">
						<Redux />
						Redux
					</div>
					<div className="skill-box">
						<Vue />
						Vue
					</div>
					<div className="skill-box">
						<MaterialUI />
						MaterialUI
					</div>
					<div className="skill-box">
						<TailwindCSS />
						Tailwind
					</div>
						<div className="skill-box">
						<HTML5 />
						HTML5
					</div>
					<div className="skill-box">
						<CSS3 />
						CSS3
					</div>
					<div className="skill-box">
						<Sass />
						Sass
					</div>
					<div className="skill-box">
						<Figma />
						Figma
					</div>
				</div>

				<h2>Backend & Databases</h2>
				<div className="skills-container">
					<div className="skill-box">
						<NodeJS />
						NodeJS
					</div>
					<div className="skill-box">
						<Python />
						Python
					</div>
					<div className="skill-box">
						<Express />
						Express
					</div>
					<div className="skill-box">
						<Flask />
						Flask
					</div>
					<div className="skill-box">
						<Django />
						Django
					</div>
					<div className="skill-box">
						<MongoDB />
						MongoDB
					</div>
					<div className="skill-box">
						<PostgreSQL />
						Postgres
					</div>
					<div className="skill-box">
						<Pandas />
						Pandas
					</div>
				</div>

				<h2>Cloud, Testing, DevOps</h2>
				<div className="skills-container">
					<div className="skill-box">
						<AWS />
						AWS
					</div>
					<div className="skill-box">
						<Cypress />
						Cypress
					</div>
					<div className="skill-box">
						<Jest />
						Jest
					</div>
					<div className="skill-box">
						<Heroku />
						Heroku
					</div>
					<div className="skill-box">
						<Vercel />
						Vercel
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills;