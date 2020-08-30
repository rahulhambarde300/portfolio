import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const scrollTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
          'scrollbar-color': "#86c232 #000"
        },
      }
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={scrollTheme}>
      <div className='App'
            style={{ 
              background : '#222629',
              }}>
        <Header />
        <Home/>
      </div>
    </ThemeProvider>
      
  );
}

export default App;
