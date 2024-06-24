import React from 'react';

function Login({ setShowLogin }) {
  return (
    <div className='r-container'>
      <span className='title'>Login</span>
      <span className='subtitle'>Acceso</span>
      <form>
        <input type='text' placeholder='Ingrese su Nombre'/>
        <input type='email' placeholder='Ingrese e-mail'/>
        <input type='password' placeholder='Crear Contraseña'/>
        <button>Acceder</button>
      </form>
      <p>Todavía no tienes una cuenta? 
        <button onClick={() => setShowLogin(false)}>Registrate</button>
      </p>
    </div>
  );
}

export default Login;
