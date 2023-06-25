import React from "react";

const Landing = () => {

  return (
    <div id='landing' className="page">
      <div className="about-container">
        <div className="land-intro" >
          <h1 className="land-h1-1">Hello there, I'm Sam.</h1>
          <h1 className="land-h1-2">I build <span className="teal">scalable, ux-minded</span> applications that bring your vision to life.</h1>
          <p>A full-stack software engineer passionate about building inclusive and accessible technologies. I'm currently enjoying applying Geospatial Information Systems to build everything location as a <strong>Software Engineer</strong> @&nbsp;<a href="https://www.locana.co/" target="_blank" rel="noreferrer" className="teal">Locana</a>. </p>
        </div>
        <div className='profile-container'>
          <div className="avatar-div">
            <div className='avatar-overlay' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;