import { useEffect, useState } from 'react';
import './styles/App.css';
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import SideNav from './components/SideNav'
import TopNav from './components/TopNav';


const overlay = (
  <div>
      <div className="landing-overlay">
        <img src="https://i.ibb.co/8jwxM2c/Screen-Shot-2021-12-09-at-10-33-34-AM-copy.png" alt=""className="owl-overlay"/>
      </div>
  </div>
)

const current = (
  <div className="App">
    <TopNav />
    <div className="bottom-app">
      <SideNav />
      <main id="main">
        <Landing/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>  
  </div>
)


function App() {
  const [rendered, setRendered] = useState(overlay)
  
  useEffect(() => {
    const timer = setTimeout(() => setRendered(current), 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    rendered
  );
}

export default App;