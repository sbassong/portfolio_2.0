import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Landing from './pages/Landing';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LeftSideNav from './components/LeftSideNav';
import TopNav from './components/TopNav';

const overlay = (
  <div className="landing-overlay">
    <img src="https://i.ibb.co/8jwxM2c/Screen-Shot-2021-12-09-at-10-33-34-AM-copy.png" alt=""className="owl-overlay"/>
  </div>
);

function App() {
  const [rendered, setRendered] = useState(overlay);
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
  
  const current = (
    <div className="App">
      <TopNav windowDimension={windowDimension}/>
      <main id="main">
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/experience' element={<Experience/>} />
          <Route exact path='/skills' element={<Skills/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </main>
      <LeftSideNav />
    </div>
  );

  // handles setting viewport state on resizing
  useEffect(() => {
      window.addEventListener('resize', detectSize);
      return () => window.removeEventListener('resize', detectSize);
  }, [windowDimension])

  // for landing animation
  useEffect(() => {
    const timer = setTimeout(() => setRendered(current), 1000);
    return () => clearTimeout(timer);
  });

  return rendered;
}

export default App;