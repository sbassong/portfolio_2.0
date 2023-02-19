import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const TopNav = ({windowDimension}) => {
    
	return (
		<div className="top-nav">
			<div className="top-nav-wrap">
				<NavLink to='/'>
					<div className='top-left-nav'>
						{windowDimension.winWidth >= 600 && <img src="https://i.ibb.co/HPvd2c6/Screen-Shot-2021-12-09-at-10-29-23-AM-copy.png" alt="owl"/>}
					</div>
				</NavLink>
				<nav className='top-right-nav'>
						<NavLink to='/' activeClassName="active">Home</NavLink>
						<NavLink to='/projects' activeClassName="active">Projects</NavLink>
						<NavLink to='/experience' activeClassName="active">Experience</NavLink>
						<NavLink to='/skills' activeClassName="active">Skills</NavLink>
						<a href="https://drive.google.com/file/d/1KGL9tYGPJXXDZDP1IHXL2VhRHknnCzWZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
				</nav>
			</div>
		</div>
	)
}

export default TopNav