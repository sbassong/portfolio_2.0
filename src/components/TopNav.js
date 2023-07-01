import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import TopLeftSideNav from './TopLeftSideNav';
import ProfileMenu from './ProfileMenu';

const TopNav = () => {
	return (
		<div className="top-nav">
			<div className="top-nav-wrap">

				<NavLink className='top-left-nav' to='/'>
					<img src="https://i.ibb.co/HPvd2c6/Screen-Shot-2021-12-09-at-10-29-23-AM-copy.png" alt="owl"/>
				</NavLink>

				<ProfileMenu />

				<TopLeftSideNav />

				<nav className='top-right-nav'>
					<NavLink to='/' className='no-display' activeClassName="active">Home</NavLink>
					<NavLink to='/projects' className='no-display' activeClassName="active">Projects</NavLink>
					<NavLink to='/experience' className='no-display' activeClassName="active">Experience</NavLink>
					<NavLink to='/skills' className='no-display' activeClassName="active">Skills</NavLink>
					<a className='resume-link' href="https://drive.google.com/file/d/1W_Wi-KsSsq-5V3e1QSN2E-kF--PSFv7z/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
				</nav>
			</div>
		</div>
	)
}

export default TopNav;