const About = () => {
    
    return (
        <div id='about'>
            <h1>About Me</h1>
            <div className="about-container">

                <div className="profile-info">
                    <p className="profile-p1">I am a full-Stack software engineer with a strong background in research and education. I wrote my first line of code 2 years ago and haven't stopped since. A year and a half later, I officially transitioned to a software engineering career by graduating from General Assembly's software engineering track.</p>
                    <p className="profile-p2">As an engineer, I'm leveraging a diverse set of skills to find creative and elegant digital solutions. I'm enjoying learning modern technologies to build responsive, scalable and, user-friendly applications. I'm passionate about web development and cloud engineering and look forward to continuing my growth in this exciting industry.</p>
                </div>
                
                
                <div className='profile-container'>
                    <div className="avatar-div"></div>
                    <div className="avatar-overlay"></div> 
                </div>
            </div>
        </div>
    )
}

export default About