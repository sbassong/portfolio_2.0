const About = () => {
    
    return (
        <div id='about'>
            <h1>Me</h1>
            <div className="about-container">

                <div className="profile-info">
                    <p>I am a full-Stack software engineer with a strong background in microbiology research and STEM education. I wrote my first line of code almost 2 years ago. What started as a hobby soon turned to active interest and I resolved to transition to a software engineering career. Two months ago, I made it official by complete the software engineering track at General Assembly.</p>
                    <p>For the past six months, I've been immersed in full-stack development. I'm having a blast continuously learning new technologies to build responsive, scalable, and user-focused applications. More recently, I was fortunate to land my first role in tech as as a <span className='teal'>Web Developer and Email Specialist Intern</span>. As a member of the Center Centre team, I am improving my skill while working towards a junior engineer role.</p>
                </div>
                
                <div className='profile-container'>
                    
                    <img  src="https://i.imgur.com/6kzf7GXm.jpg" alt="sam avatar"/>
                    <div className="avatar-overlay"></div> 
                    <div className="avatar-frame"></div> 
                </div>
            </div>
        </div>
    )
}

export default About