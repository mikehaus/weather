import React from 'react';
import CSS from 'csstype';
import './App.css';
import 'rsuite/dist/styles/rsuite-dark.css';
import Weather from './components/weather';
import { config } from './data/config'

const WEATHER_STYLES_MAIN: CSS.Properties = {
  width: '90vw - 56px',
  height: '90vh',
  overflowY: 'hidden',
  overflowX: 'hidden',
  position: 'absolute',
  left: '56px',
  right: '56px',
  top: '50px',
  bottom: '100',
  backgroundColor: '#1A1D24',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={WEATHER_STYLES_MAIN}>
          <Weather />
        </div>
      </header>
    </div>
  );
}

export default App;
