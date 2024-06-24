import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Header from './Header.jsx'; // Cambiado de Home a Header
import NavBar from './components/NavBar'; // Asumiendo que este es tu componente NavBar

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
