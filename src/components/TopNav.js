import { useState, useEffect } from 'react'


const TopNav = () => {

    const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
    })

    const detectSize = () => {
    detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
        window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <div className="top-nav">
            <div className="top-nav-wrap">
                <a href="/">
                    <div className='top-left-nav'>
                        {
                        windowDimension.winWidth >= 450 ?
                        <img src="https://i.ibb.co/HPvd2c6/Screen-Shot-2021-12-09-at-10-29-23-AM-copy.png" alt="owl"/>
                        :
                        <img src="https://i.ibb.co/XSQRppT/Screen-Shot-2021-12-09-at-10-33-34-AM-copy-2.png" alt="owl"/>
                        }
                    </div>
                </a>
                <nav className='top-right-nav'>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <a href="https://drive.google.com/file/d/1vsehuFtOWocfYJI4TDIYDiI5lG-VR2o-/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </nav>
            </div>
        </div>
    )
}

export default TopNav