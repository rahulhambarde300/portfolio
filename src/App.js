import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';


function App() {
  return (
      <div className="App" style={{ background : 'linear-gradient(135deg, #09adb3 0%, #000 90%)100%'}}>
        <Header />
        <Home/>
      </div>
  );
}

export default App;
