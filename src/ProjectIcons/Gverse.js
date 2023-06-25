import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as ReactJS} from '../../src/styles/samTechStack/React.svg';
import {ReactComponent as CSS3} from '../../src/styles/samTechStack/CSS3.svg';
import {ReactComponent as NodeJS} from '../../src/styles/samTechStack/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/samTechStack/PostgresSQL.svg';
import {ReactComponent as Express} from '../../src/styles/samTechStack/Express.svg';

const Gverse = () => {
	return (
		<div className="skills-container">
			<JavaScript />
			<CSS3 />
			<NodeJS />
			<ReactJS />
			<Express />
			<PostgreSQL />
		</div>
	)
}

export default Gverse;