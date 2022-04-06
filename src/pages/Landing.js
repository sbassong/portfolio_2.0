import React from "react";
import Typewriter from 'typewriter-effect/'

const typewriter = (
  <div className="landing-wrapper" >
      <div className="rolling-header">
          <Typewriter 
              options={{ strings: [
              'mission-driven',
              'collaborative',
              'growth-minded',
              'motivated',
              'solution-oriented',
              ],
              autoStart: true,
              loop: true,
              delay: 15,
              deleteSpeed: 16,
              cursor: ''
              }}
          />
      </div>          
  </div>
)

const Landing = () => {

  return (
    <div id='landing' className="page">
      <div className="land-intro" >
        <h1 className="land-h1-1">Hi, I'm Sam.</h1>
        <h1 className="land-h1-2">I build <span className="teal">equity-minded and accessible</span> technologies.</h1>
        <p>I am a <span className="teal">{typewriter}</span> software engineer passionate about building a better, more inclusive world with technology. Currently, I'm enjoying applying Geospatial Information to build everything location as a <strong>Jr. Software Engineer</strong> @&nbsp;<a href="https://www.locana.co/" target="_blank" rel="noreferrer" className="teal">Locana</a>. </p>
      </div>
    </div>
  )
}

export default Landing