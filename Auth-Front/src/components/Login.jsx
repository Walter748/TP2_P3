import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Importa el hook useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gmail, password }),
      });

      if (response.ok) {
        navigate('/');
      }

    } catch (error) {
      alert('Error iniciando sesión: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Inicio de Sesión</h2>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">Iniciar Sesión</button> 
          <p className="register-text">¿Todavía no tienes una cuenta?  <Link to='/register'>Presiona aquí</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;