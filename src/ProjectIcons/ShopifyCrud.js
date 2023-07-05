import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as NodeJS} from '../../src/styles/samTechStack/Node.js.svg';
import {ReactComponent as PostgreSQL} from '../../src/styles/samTechStack/PostgresSQL.svg';
import {ReactComponent as Express} from '../../src/styles/samTechStack/Express.svg';
import {ReactComponent as Sequelize} from '../../src/styles/samTechStack/Sequelize.svg';

const ShopifyCRUD = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<NodeJS className='tech-item'/>
			<Express className='tech-item'/>
			<PostgreSQL className='tech-item'/>
			<Sequelize className='tech-item'/>
		</div>
	)
}

export default ShopifyCRUD;