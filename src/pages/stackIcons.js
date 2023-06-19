import React from 'react';
import { skillsData } from "../data";
import SkillCard from "../components/SkillCard";

// Frontend
import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as ReactJS} from '../../src/styles/samTechStack/React.svg';
import {ReactComponent as Redux} from '../../src/styles/samTechStack/Redux.svg';
import {ReactComponent as Sass} from '../../src/styles/samTechStack/Sass.svg';
import {ReactComponent as HTML5} from '../../src/styles/samTechStack/HTML5.svg';
import {ReactComponent as CSS3} from '../../src/styles/samTechStack/CSS3.svg';
import {ReactComponent as MaterialUI} from '../../src/styles/samTechStack/Material-UI.svg';
import {ReactComponent as Materialize} from '../../src/styles/samTechStack/Materialize.svg';
import {ReactComponent as Bootstrap} from '../../src/styles/samTechStack/Bootstrap.svg';
import {ReactComponent as TailwindCSS} from '../../src/styles/samTechStack/Tailwind-CSS.svg';
import {ReactComponent as Vue} from '../../src/styles/samTechStack/Vue.js.svg';
import {ReactComponent as Vuetify} from '../../src/styles/samTechStack/Veutify.svg';
import {ReactComponent as D3JS} from '../../src/styles/samTechStack/D3.js.svg';
import {ReactComponent as Figma} from '../../src/styles/samTechStack/Figma.svg';


// Backend
import {ReactComponent as Python} from '../../src/styles/samTechStack/Python.svg';
import {ReactComponent as MongoDB} from '../../src/styles/samTechStack/MongoDB.svg';
import {ReactComponent as NodeJS} from '../../src/styles/samTechStack/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/samTechStack/PostgresSQL.svg';
import {ReactComponent as Postman} from '../../src/styles/samTechStack/Postman.svg';
import {ReactComponent as MongooseJS} from '../../src/styles/samTechStack/Mongoose.js.svg';
import {ReactComponent as SQLAlchemy} from '../../src/styles/samTechStack/SQLAlchemy.svg';
import {ReactComponent as Sequelize} from '../../src/styles/samTechStack/Sequelize.svg';
import {ReactComponent as Express} from '../../src/styles/samTechStack/Express.svg';
import {ReactComponent as Flask} from '../../src/styles/samTechStack/Flask.svg';
import {ReactComponent as Pandas} from '../../src/styles/samTechStack/Pandas.svg';


// databases, devops, testing...
import {ReactComponent as Vercel} from '../../src/styles/samTechStack/Vercel.svg';
import {ReactComponent as AWS} from '../../src/styles/samTechStack/AWS.svg';
import {ReactComponent as Cypress} from '../../src/styles/samTechStack/Cypress.svg';
import {ReactComponent as Jest} from '../../src/styles/samTechStack/Jest.svg';
import {ReactComponent as Heroku} from '../../src/styles/samTechStack/Heroku.svg';


const Skills = () => {
	return (
		<div id="skills" className="page">
			<h1>Stack</h1>
			<p>Techs I enjoy using regularly</p>
			<h2>Languages</h2>
			<div className="skills-container">
				{
					skillsData && skillsData.filter(skill => skill.type === "languages").map((skill, index) => (
						<SkillCard key={index} title={skill.title} photo={skill.photo} />
					))
				}
			</div>

			<h2>Frontend</h2>
			<div className="skills-container">
				{
					skillsData && skillsData.filter(skill => skill.type === "frontend").map((skill, index) => (
						<SkillCard key={index} title={skill.title} photo={skill.photo} />
					))
				}
			</div>

			<h2>Backend &amp; Databases</h2>
			<div className="skills-container">
				{
					skillsData && skillsData.filter(skill => skill.type === "backend").map((skill, index) => (
						<SkillCard key={index} title={skill.title} photo={skill.photo} />
					))
				}
			</div>
		</div>
	)
}

export default Skills