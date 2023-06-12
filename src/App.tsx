// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Receiving from './Components/receiving';
import Show from './Components/show';

function App() {
  return (
    <div className="App">
      <h1>Employees</h1>
      <Receiving/>
      <br/>
      <br/>
      <Show/>
    </div>
  );
}

export default App;
