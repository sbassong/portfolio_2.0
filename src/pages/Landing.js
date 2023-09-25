/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
  ))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 400,
    backgroundColor: 'transparent',
  },
});

const catsPopup = <div className="cats-div" />;
const catsTooltip = (
  <CustomWidthTooltip title={catsPopup} placement='top' >
    <span className="teal cat-span">cats</span>
  </CustomWidthTooltip>
);

const mmjLink = <a href="https://open.spotify.com/artist/43O3c6wewpzPKwVaGEEtBM?si=cKPkjxp_TKe9tsZp7iESOA" target="_blank" rel="noreferrer" className="teal">My Morning Jacket</a>
const connectLink = <a href="https://www.linkedin.com/in/sambassong/" target="_blank" rel="noreferrer" className="teal">connect</a>
const locanaLink = <a href="https://locana.us/" target="_blank" rel="noreferrer" className="teal">Locana</a>
const centerLink = <a href="https://centercentre.com/" target="_blank" rel="noreferrer" className="teal">Center Centre</a>


const Landing = () => {

  return (
    <div id='landing' className="page">
      <div className="about-container">
        <div className='profile-container'>
          <div className="avatar-div">
          </div>
        </div>
        <div className="land-intro" >
          <div className="landing-title teal">
            Sam Bassong
          </div>
          <div className="landing-subtitle">
            Software Developer
          </div>
          <div className="landing-blurb">
            Once upon a time, I investigated ways to neutralize tiny bugs in a lab. Now, I turn great ideas into user-friendly, scalable software solutions. I started coding four years ago. Two years later, I completed an immersive SWE bootcamp. Since then, I've continued to polish and expand my skills, whether delivering on stakeholder products or translating some of my thoughts into side projects.
          </div>
          <div className="landing-blurb">
            As a software engineer at {locanaLink}, I collaborate across organizational levels and with customers to develop and maintain enterprise applications that leverage geospatial data and mapping technologies. Previously, I worked as a web developer at {centerLink}. I built client-facing landing and sales pages to support the company's UX programs.
          </div>
          <div className="landing-blurb">
            When not making magic on my IDE, I'm goofing around with my spouse and two {catsTooltip && catsTooltip}. If not, I might be camping, kayaking, baking, or jamming at a {mmjLink} (enjoy, you're welcome) concert.
          </div>
          <div className="landing-blurb">
            Always glad to {connectLink} with folks and discuss opportunities, code, science, or the human condition. Cheers!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;