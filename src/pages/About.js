import React from 'react';

const About = () => {
    
    return (
        <div id='about' className="page">
            <h1>About Me</h1>
            <div className="about-container">
                <div className='profile-container'>
                    <div className="avatar-div"></div>
                    <div className="avatar-overlay"></div> 
                </div>

                <div className="profile-info">
                    <p className="profile-p1">I'm a software engineer with a biomedical research and teaching background. I wrote my first line of code 2 years ago and haven't stopped since. What began as a hobby soon turned into an active interest and I resolved to transition into tech by completing General Assembly's fast-paced software engineering immersive.</p>
                    <p className="profile-p2">As an engineer, I'm capitalizing on a diverse set of skills to craft creative and elegant digital solutions. I'm enjoying learning modern technologies to build responsive, scalable, and user-friendly applications. I'm passionate about full stack development and cloud engineering and I am excited to continue growing in my new career.</p>
                </div>
            </div>
        </div>
    )
}

export default About