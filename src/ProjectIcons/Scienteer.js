import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as Python} from '../../src/styles/samTechStack/Python.svg';
import {ReactComponent as CSS3} from '../../src/styles/samTechStack/CSS3.svg';
import {ReactComponent as Vue} from '../../src/styles/samTechStack/Vue.js.svg';
import {ReactComponent as NodeJS} from '../../src/styles/samTechStack/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/samTechStack/PostgresSQL.svg';
import {ReactComponent as Express} from '../../src/styles/samTechStack/Express.svg';
import {ReactComponent as Flask} from '../../src/styles/samTechStack/Flask.svg';
import {ReactComponent as AWS} from '../../src/styles/samTechStack/AWS.svg';


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