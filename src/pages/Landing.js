import React from "react";

const Landing = () => {

  return (
    <div id='landing' className="page">
      <div className="about-container">
        <div className='profile-container'>
          <div className="avatar-div">
            <div className='avatar-overlay' />
          </div>
        </div>
        <div className="land-intro" >
          <p className="landing-greeting teal">
            Sam Bassong <br/><span style={{color: 'rgb(170, 165, 165)'}}>Software Engineer</span>
          </p>
          <p className="landing-brand">
            I turn great ideas into <span className="teal">scalable, </span><br/><span className="teal"> market-ready </span>solutions that deliver<br/><span className="teal"> secure, user-minded </span>digital experiences. 
          </p>
          <p className="landing-blurb">
            A scientist turned developer, I use polished professional skills <br/>and technical proficiency to positively impact teams' delivery goals. <br/>Currently, I'm enjoying building GIS and mapping-based apps at<a href="https://www.locana.co/" target="_blank" rel="noreferrer" className="teal"> Locana </a><br/> but I'm always open to new challenges. Let's chat, we just might be a great fit!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;