import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Description from './components/Description/Description';
import CourseProgram from './components/CourseProgram/CourseProgram';
import OurTeam from './components/OurTeam/OurTeam';
import Price from './components/Price/Price';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
         <About/>
        <Description/>
        <CourseProgram/> 
        <OurTeam/>
         <Slider/>
      </main>
      <footer>
        <Price/>
      </footer>
    </div>
  );
}

export default App;
