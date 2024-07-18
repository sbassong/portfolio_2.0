import './styles/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import LeftSideNav from './components/LeftSideNav';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <main id="main">
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='projects' element={<Projects />} />
          <Route exact path='stack' element={<Skills />} />
        </Routes>
      </main>
      <LeftSideNav/>
    </div>
  );
}

export default App;