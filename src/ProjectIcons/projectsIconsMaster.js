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
import {ReactComponent as Materialize} from '../../src/styles/skillsIcons/Materialize.svg';
import {ReactComponent as Bootstrap} from '../../src/styles/skillsIcons/Bootstrap.svg';
import {ReactComponent as TailwindCSS} from '../../src/styles/skillsIcons/Tailwind-CSS.svg';
import {ReactComponent as Vue} from '../../src/styles/skillsIcons/Vue.js.svg';
import {ReactComponent as Vuetify} from '../../src/styles/skillsIcons/Veutify.svg';
import {ReactComponent as D3JS} from '../../src/styles/skillsIcons/D3.js.svg';
import {ReactComponent as Figma} from '../../src/styles/skillsIcons/Figma.svg';

// Backend
import {ReactComponent as MongoDB} from '../../src/styles/skillsIcons/MongoDB.svg';
import {ReactComponent as NodeJS} from '../../src/styles/skillsIcons/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/skillsIcons/PostgresSQL.svg';
import {ReactComponent as Postman} from '../../src/styles/skillsIcons/Postman.svg';
import {ReactComponent as MongooseJS} from '../../src/styles/skillsIcons/Mongoose.js.svg';
import {ReactComponent as SQLAlchemy} from '../../src/styles/skillsIcons/SQLAlchemy.svg';
import {ReactComponent as Sequelize} from '../../src/styles/skillsIcons/Sequelize.svg';
import {ReactComponent as Express} from '../../src/styles/skillsIcons/Express.svg';
import {ReactComponent as Flask} from '../../src/styles/skillsIcons/Flask.svg';
import {ReactComponent as Pandas} from '../../src/styles/skillsIcons/Pandas.svg';

// databases, devops, testing...
import {ReactComponent as Vercel} from '../../src/styles/skillsIcons/Vercel.svg';
import {ReactComponent as AWS} from '../../src/styles/skillsIcons/AWS.svg';
import {ReactComponent as Cypress} from '../../src/styles/skillsIcons/Cypress.svg';
import {ReactComponent as Jest} from '../../src/styles/skillsIcons/Jest.svg';
import {ReactComponent as Heroku} from '../../src/styles/skillsIcons/Heroku.svg';


const Skills = () => {
	return (
		<div className="tech-container">
				<JavaScript />

				<Python />

				<CSS3 />
				<HTML5 />
				<ReactJS />
				<Redux />

				<MaterialUI />

				<Materialize />

				<Bootstrap />

				<TailwindCSS />

				<Vue />
				<Vuetify />

				<D3JS />
				<Figma />
				<Sass />

				<Express />

				<MongoDB />
	
				<MongooseJS />
		
				<PostgreSQL />
				
				<Sequelize />
			
				<Flask />

				<SQLAlchemy />
				
				<Postman />
	
				<Pandas />

				<AWS />
				<Cypress />
	
				<Jest />
				<Heroku />

				<Vercel />
		</div>
	)
}

export default Skills;