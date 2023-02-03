import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const LeftSideNav = () => {
	return (
		<nav className='side-nav'>
			<a href="https://www.linkedin.com/in/sambassong/" rel="noreferrer" target="_blank"><AiOutlineLinkedin /></a>
			<a href="https://github.com/sbassong" rel="noreferrer" target="_blank"><VscGithubAlt /></a>
			<a href="#contact"><MdOutlineEmail /></a>
		</nav>
	)
}

export default LeftSideNav;