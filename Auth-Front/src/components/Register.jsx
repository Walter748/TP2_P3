import React from 'react'
import '../styles/register.css';
import addCV from '../assets/img.png'
import { useState } from 'react';

function Register({ setUser, setShowLogin }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cv, setCv] = useState(null);
  const [error, setError] = useState(false);

  const handleNameChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCvChange = (e) => setCv(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === '' || email === '' || password === '') {
      setError(true);
      return;
    }

    const newUser = [nombre, email, password, cv];
    console.log('Nuevo Usuario:', newUser);

    setUser(newUser);

    setNombre('');
    setEmail('');
    setPassword('');
    setCv(null);
    setError(false);
  };

  return (
    <div className='r-container'>
      <span className='title'>Register</span>
      <span className='subtitle'>Registro</span>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese su nombre'
          value={nombre}
          onChange={handleNameChange}
        />
        <input
          type='email'
          placeholder='Ingrese e-mail'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type='password'
          placeholder='Ingrese contraseña'
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type='file'
          id='file'
          style={{ display: 'none' }}
          onChange={handleCvChange}
        />
        <label htmlFor='file'>
          <img src={addCV} alt='Cv' />
          <span>Ingresa Curriculum Vitae</span>
        </label>
        <button type='submit'>Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>Por favor, completa todos los campos.</p>}
      <p>¿Tienes una cuenta? 
        <button onClick={() => setShowLogin(true)}>Inicia sesión</button>
      </p>
    </div>
  );
}

export default Register;
