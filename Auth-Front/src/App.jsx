// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import header from './components/header.jsx'; // Asegúrate de usar 'Header' en lugar de 'header'

function App() {
  const [user, setUser] = useState([]);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='app-container'>
      {user.length === 0 ? (
        showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Register setUser={setUser} setShowLogin={setShowLogin} />
        )
      ) : (
        <header user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
