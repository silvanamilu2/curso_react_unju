import logo from './logo.svg';
import './App.css';
import React from 'react';
import Data from  "./data/data.json";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Character from "./components/Character.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";
import About from "./components/About.jsx";
import {Switch, Route} from "react-router-dom";
import CharacterInfo from './components/CharacterInfo';
import {useEffect} from "react";


function App() {
  useEffect( ()=> {
    console.log("El componente se monto")
  },[])

  return (
<>
    <NavBar/>

    <Switch>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/charDetail/:id">
        <CharacterInfo/>
      </Route>

      <Route path="/charDetail">
        <CharacterDetail/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="*">
        <h1>ERROR 404 NOT FOUND</h1>
      </Route>

  </Switch>
  </>
  );
}

export default App;
