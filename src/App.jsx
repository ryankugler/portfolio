import React from 'react'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import ProfilePhoto from './components/ProfilePhoto';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <div className='pb-10 mb-1'>
        <span>
          <Intro />
          {/* <ProfilePhoto/> */}
        </span>
      </div>
      
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
