import React  from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin} from "react-icons/ai";

const TopLeftSideNav = () => {

	return (
		<nav className='top-left-side-nav'>
			<a href="https://www.linkedin.com/in/sambassong/" rel="noreferrer" target="_blank"><AiOutlineLinkedin /></a>
			<a href="https://github.com/sbassong" rel="noreferrer" target="_blank"><VscGithubAlt /></a>
		</nav>
	)
}

export default TopLeftSideNav;