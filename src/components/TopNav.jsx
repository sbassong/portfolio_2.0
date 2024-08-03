import React from 'react';
import { NavLink } from 'react-router-dom';
import TopLeftSideNav from './TopLeftSideNav';
import ProfileMenu from './ProfileMenu';

const TopNav = () => {
	console.log('topnav')
	return (
		<div className="top-nav">
			<div className="top-nav-wrap">
				<NavLink className='top-left-nav' to='/'>
					<img src="https://i.ibb.co/HPvd2c6/Screen-Shot-2021-12-09-at-10-29-23-AM-copy.png" alt="owl"/>
				</NavLink>
				<ProfileMenu />
				<TopLeftSideNav />
				<nav className='top-right-nav'>
					<NavLink to='/' className='no-display' activeclassname="active">Home</NavLink>
					<NavLink to='/projects' className='no-display' activeclassname="active">Projects</NavLink>
					<NavLink to='/stack' className='no-display' activeclassname="active">Stack</NavLink>
					<a className='resume-link' href="https://drive.google.com/file/d/1dhW0c8XGQcZjFCdnmXCUZ8VX3BVATUzo/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
				</nav>
			</div>
		</div>
	)
}

export default TopNav;
