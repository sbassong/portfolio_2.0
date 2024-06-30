import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/skillsIcons/JavaScript.svg';
import {ReactComponent as ReactJS} from '../../src/styles/skillsIcons/React.svg';
import {ReactComponent as CSS3} from '../../src/styles/skillsIcons/CSS3.svg';
import {ReactComponent as NodeJS} from '../../src/styles/skillsIcons/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/skillsIcons/PostgresSQL.svg';
import {ReactComponent as Express} from '../../src/styles/skillsIcons/Express.svg';
import {ReactComponent as Sequelize} from '../../src/styles/skillsIcons/Sequelize.svg';

const Gverse = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<CSS3 className='tech-item'/>
			<NodeJS className='tech-item'/>
			<ReactJS className='tech-item'/>
			<Express className='tech-item'/>
			<PostgreSQL className='tech-item'/>
			<Sequelize className='tech-item'/>
			
		</div>
	)
}

export default Gverse;