import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Navbar/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <Routes>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;