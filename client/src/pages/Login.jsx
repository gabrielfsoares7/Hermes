import React from "react";
import { Container } from "../styles/Login";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Header from "../components/Header";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <Container>
      <div className="container-login">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Acesse sua conta</h1>
            <div className="input-field">
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setUsername(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="senha"
                onChange={(e) => setPassord(e.target.value)}
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>

            <div className="recall-forget">
              <label>
                {" "}
                <input type="checkbox" />
                Lembre de mim
              </label>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>

            <div className="Signup-link">
              <p>
                Não tem uma conta? <a href="#">Registrar</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
