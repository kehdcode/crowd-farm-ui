import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Courosel from './components/Courosel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Courosel />
      
      <h2>Hello World</h2>
      
    </div>
  );
}

export default App;
