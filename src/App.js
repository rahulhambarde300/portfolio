import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';


function App() {
  return (
      <div className="App" style={{ background : '#222629'}}>
        <Header />
        <Home/>
      </div>
  );
}

export default App;
