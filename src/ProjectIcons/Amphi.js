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
		<div className="skills-container">
			<JavaScript />
			<NodeJS />
			<CSS3 />
			<ReactJS />
			<Express />
			<MongoDB />
			<MongooseJS />
		</div>
	)
}

export default Amphi;