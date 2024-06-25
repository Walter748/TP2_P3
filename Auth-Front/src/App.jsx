import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx'
import Login from './components/Login.jsx';
import { Header } from './components/header.jsx'; 
import NavBar from './components/NavBar'; 

function App() {
  const [user, setUser] = useState([]);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='app-container'>
      <NavBar />

      <Router>
        <Routes>
          <Route path='/'>
            {user.length === 0 && showLogin ? (
              <Login setShowLogin={setShowLogin} />
            ) : (
              <Register setUser={setUser} setShowLogin={setShowLogin} />
            )}
          </Route>
          <Route path='/header'>
            <Header user={user} setUser={setUser} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
