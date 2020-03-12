import React from 'react';
import './App.css';
import './Mediaquery.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Courosel from './components/Courosel';
import Service from './components/Service';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Courosel />
      <Service />

      
    </div>
  );
}

export default App;
