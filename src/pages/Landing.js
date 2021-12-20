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
    <div id='landing'>
      <div className="land-intro" >
        <h1 className="land-h1-1">Hi, I'm Sam.</h1>
        <h1 className="land-h1-2">I build <span className="teal">equity-minded and accessible</span> technologies.</h1>
        <p>I am a <span className="teal">{typewriter}</span> full-stack software engineer specializing front-end design and development. Currently, I am focused on making awesomeness as a <span className="teal">Web Developer Intern</span> at <span className="teal">Center Centre-UIE</span>. </p>
      </div>
    </div>
  )
}

export default Landing