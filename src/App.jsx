import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skill'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Skill></Skill>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;