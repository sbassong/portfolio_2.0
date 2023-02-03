import React from 'react';
import { NavLink } from 'react-router-dom';


const TopNav = ({windowDimension}) => {
    
	return (
		<div className="top-nav">
			<div className="top-nav-wrap">
				<NavLink to='/'>
					<div className='top-left-nav'>
						{
						windowDimension.winWidth >= 600 ?
						<img src="https://i.ibb.co/HPvd2c6/Screen-Shot-2021-12-09-at-10-29-23-AM-copy.png" alt="owl"/>
						:
						<img src="https://i.ibb.co/XSQRppT/Screen-Shot-2021-12-09-at-10-33-34-AM-copy-2.png" alt="owl"/>
						}
					</div>
				</NavLink>
				<nav className='top-right-nav'>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/projects'>Projects</NavLink>
						<NavLink to='/experience'>Experience</NavLink>
						<NavLink to='/skills'>Skills</NavLink>
						<a href="https://drive.google.com/file/d/1KGL9tYGPJXXDZDP1IHXL2VhRHknnCzWZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
				</nav>
			</div>
		</div>
	)
}

export default TopNav