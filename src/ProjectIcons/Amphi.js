import React from 'react';

// Languages
import {ReactComponent as JavaScript} from '../../src/styles/skillsIcons/JavaScript.svg';
import {ReactComponent as ReactJS} from '../../src/styles/skillsIcons/React.svg';
import {ReactComponent as CSS3} from '../../src/styles/skillsIcons/CSS3.svg';
import {ReactComponent as MongoDB} from '../../src/styles/skillsIcons/MongoDB.svg';
import {ReactComponent as NodeJS} from '../../src/styles/skillsIcons/Node.js.svg';
import {ReactComponent as MongooseJS} from '../../src/styles/skillsIcons/Mongoose.js.svg';
import {ReactComponent as Express} from '../../src/styles/skillsIcons/Express.svg';


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