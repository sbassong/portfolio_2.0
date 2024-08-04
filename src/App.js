import './styles/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import LeftSideNav from './components/LeftSideNav';
import TopNav from './components/TopNav';


function App() {
  console.log('running')
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;