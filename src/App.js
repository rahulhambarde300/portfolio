import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/ProfileComponent';
import Work from './components/WorkComponent';
import Contact from './components/ContactComponent';


function App() {
  return (
      <div className="App" style={{ background : 'linear-gradient(135deg, #09adb3 0%, #000 90%)100%'}}>
        <Header />
        <Home/>
      </div>
  );
}

export default App;
