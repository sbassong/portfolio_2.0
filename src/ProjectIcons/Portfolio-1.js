import React from 'react';
import {ReactComponent as TailwindCSS} from '../../src/styles/samTechStack/Tailwind-CSS.svg';
import {ReactComponent as JavaScript} from '../../src/styles/samTechStack/JavaScript.svg';
import {ReactComponent as HTML5} from '../../src/styles/samTechStack/HTML5.svg';
import {ReactComponent as CSS3} from '../../src/styles/samTechStack/CSS3.svg';

const Portfolio1 = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<TailwindCSS className='tech-item'/>
			<CSS3 className='tech-item'/>
			<HTML5 className='tech-item'/>
		</div>
	)
}

export default Portfolio1;