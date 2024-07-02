import './styles/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import LeftSideNav from './components/LeftSideNav';
import TopNav from './components/TopNav';

const overlay = (
  <div className="landing-overlay">
    <img src="https://i.ibb.co/8jwxM2c/Screen-Shot-2021-12-09-at-10-33-34-AM-copy.png" alt="loading overlay" className="owl-overlay"/>
  </div>
);

function App() {
  const current = (
    <div className="App">
      <TopNav />
      <main id="main">
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/stack' element={<Skills/>} />
        </Routes>
      </main>
      <LeftSideNav/>
    </div>
  );

  return current ? current : overlay;
}

export default App;