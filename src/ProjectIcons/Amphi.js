import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as ReactJS} from '../../src/styles/samTechStack/React.svg';
import {ReactComponent as CSS3} from '../../src/styles/samTechStack/CSS3.svg';
import {ReactComponent as MongoDB} from '../../src/styles/samTechStack/MongoDB.svg';
import {ReactComponent as NodeJS} from '../../src/styles/samTechStack/Node.js.svg';
import {ReactComponent as MongooseJS} from '../../src/styles/samTechStack/Mongoose.js.svg';
import {ReactComponent as Express} from '../../src/styles/samTechStack/Express.svg';


const Amphi = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<NodeJS className='tech-item'/>
			<CSS3 className='tech-item'/>
			<ReactJS className='tech-item'/>
			<Express className='tech-item'/>
			<MongoDB className='tech-item'/>
			<MongooseJS className='tech-item' />
		</div>
	)
}

export default Amphi;