import React, { } from 'react';
import { NavLink } from 'react-router-dom';


const TopNav = ({windowDimension}) => {
    
	return (
		<div className="top-nav">
			<div className="top-nav-wrap">
				<NavLink className='top-left-nav' to='/'>
					<img src="https://i.ibb.co/HPvd2c6/Screen-Shot-2021-12-09-at-10-29-23-AM-copy.png" alt="owl"/>
				</NavLink>
				<nav className='top-right-nav'>
					<NavLink to='/' activeClassName="active">Home</NavLink>
					<NavLink to='/projects' activeClassName="active">Projects</NavLink>
					<NavLink to='/experience' activeClassName="active">Experience</NavLink>
					<NavLink to='/skills' activeClassName="active">Skills</NavLink>
					<a href="https://drive.google.com/file/d/1J122vv_P2wXVVKWlmMXXXcH8u0V9YSi8/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
				</nav>
			</div>
		</div>
	)
}

export default TopNav