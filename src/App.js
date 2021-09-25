import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Character from "./components/Character.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <CharacterDetail/>
    <About/>
  </div>
  );
}

export default App;
