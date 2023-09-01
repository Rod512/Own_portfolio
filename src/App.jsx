import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skill'
import About from './components/About'


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Skill></Skill>
      <About></About>

    </>
  );
};

export default App;