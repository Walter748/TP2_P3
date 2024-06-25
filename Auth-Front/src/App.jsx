import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/home'
import VerPor from './pages/VerPor'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} />
        <Route path='/portafolio' element={<VerPor/>} />
      </Routes>
    </Router>
  );
}

export default App;