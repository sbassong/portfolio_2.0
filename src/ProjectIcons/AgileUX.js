import React from 'react';

import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as HTML5} from '../../src/styles/samTechStack/HTML5.svg';
import {ReactComponent as CSS3} from '../../src/styles/samTechStack/CSS3.svg';

const AgileUX = () => {
	return (
		<div className="skills-container">
			<JavaScript />
			<CSS3 />
			<HTML5 />
		</div>
	)
}

export default AgileUX;