import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/skillsIcons/JavaScript.svg';
import {ReactComponent as Python} from '../../src/styles/skillsIcons/Python.svg';
import {ReactComponent as CSS3} from '../../src/styles/skillsIcons/CSS3.svg';
import {ReactComponent as Vue} from '../../src/styles/skillsIcons/Vue.js.svg';
import {ReactComponent as NodeJS} from '../../src/styles/skillsIcons/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/skillsIcons/PostgresSQL.svg';
import {ReactComponent as Express} from '../../src/styles/skillsIcons/Express.svg';
import {ReactComponent as Flask} from '../../src/styles/skillsIcons/Flask.svg';
import {ReactComponent as AWS} from '../../src/styles/skillsIcons/AWS.svg';


const Scienteer = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<Python className='tech-item'/>
			<CSS3 className='tech-item'/>
			<Vue className='tech-item'/>
			<NodeJS className='tech-item'/>
			<Express className='tech-item'/>
			<PostgreSQL className='tech-item'/>
			<Flask className='tech-item'/>
			<AWS className='tech-item'/>
		</div>
	)
}

export default Scienteer;