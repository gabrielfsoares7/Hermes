import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import "./Login.css";


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + username + " - " + password);
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse sua conta</h1>
        <div className="input-field"><input type='email' placeholder="E-mail"
          onChange={(e) => setUsername(e.target.value)} />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
        <div className="input-field"><input type='password' placeholder="senha"
          onChange={(e) => setPassord(e.target.value)} />
          <FontAwesomeIcon icon={faLock} className="icon" />
        </div>

        <div className='recall-forget'>
          <label> <input type="checkbox" />
            Lembre de mim
            
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>

        <div className='Signup-link'>
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>

  )
}

export default Login
