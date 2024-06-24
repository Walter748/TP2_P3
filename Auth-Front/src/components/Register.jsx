import React from 'react'

function Register() {
  return (
    <div className='r-container'>
     <span className='title'>Plus Chat</span> 
     <span className='subtitle'>Registro</span> 
     <form>
      <input type='text' placeholder='Digite o none'/>
      <input type='email' placeholder='Digite o e-mail'/>
      <input type='password' placeholder='Digite o '/>
      <input src='addCV' id='file' style={{display:'none'}} />
      <label htmlFor='file'>
      <img srr={addCV}alt='Cv'/> 
        <span>adiciona CV</span>

      </label>
      <button>Register</button>
     </form>  
     <p>Tenes una cuenta? Login</p>

    </div>
  )
}

export default Register
