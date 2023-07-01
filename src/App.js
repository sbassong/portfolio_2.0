import './styles/App.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import LeftSideNav from './components/LeftSideNav';
import TopNav from './components/TopNav';

const overlay = (
  <div className="landing-overlay">
    <img src="https://i.ibb.co/8jwxM2c/Screen-Shot-2021-12-09-at-10-33-34-AM-copy.png" alt=""className="owl-overlay"/>
  </div>
);

const configs = {
  animate: true,
  clickDismiss: true,
  escapeDismiss: true,
  contentClass: "emailOverlayWrapper"
}

function App() {
  const [rendered, setRendered] = useState(overlay);
  const [isContactForm, toggleContactForm] = useState(false);
  const [isOpen, toggleIsOpen] = useState(false);


  const closeOverlay = () => toggleIsOpen(false);
  
  const current = (
    <div className="App">
      <TopNav />
      <main id="main">
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/experience/*' element={<Experience/>} />
          <Route exact path='/skills' element={<Skills/>} />
        </Routes>
      </main>
      <LeftSideNav toggleIsOpen={toggleIsOpen}/>
    </div>
  );

  // for landing animation
  useEffect(() => {
    const timer = setTimeout(() => setRendered(current), 1000);
    return () => clearTimeout(timer);
  });

  return rendered;
}

export default App;