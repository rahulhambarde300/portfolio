import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Back from './Images/Backgrounds/backgrounds-19.jpg'


function App() {
  return (
      <div className="App" style={{ background : '#222629' 
        }}>
        <Header />
        <Home/>
      </div>
  );
}

export default App;
