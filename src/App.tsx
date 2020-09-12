import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-dark.css';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather text='SUH DUDE'/>
      </header>
    </div>
  );
}

export default App;
