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
          <Route path='/' exact element={<Landing />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/stack' exact element={<Skills />} />
        </Routes>
      </main>
      <LeftSideNav/>
    </div>
  );
}

export default App;