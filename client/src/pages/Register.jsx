import React from "react";
import { Container } from "../styles/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
    alert("Algo errado!");
    return;
}

    alert("Enviando os dados:" + nameusername + " - " + email + " - "  + password + " - " + confirmPassword );
  };


  return (
    <Container>
      <div className="container-register">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>
           
            <div className="input-field">
            <input type="name" placeholder="Nome" onChange={(e) => setUsername(e.target.value)}/>
            <FontAwesomeIcon icon={faUser} className="icon"/>
            </div>

            <div className="input-field">
              <input type="email" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)}/>
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            </div>

            <div className="input-field">
              <input type="password" placeholder="Senha" onChange={(e)=> setPassord(e.target.value)}/>
              <FontAwesomeIcon icon={faLock} className="icon"/>

            </div>

            <div className="input-field">
              <input type="password" placeholder="Confime a senha" onChange={(e)=> setPassord(e.target.value)}/>
              <FontAwesomeIcon icon={faLock} className="icon"/>

            </div>

            <div className="recall-forget">
              <label>
                {" "}
                <input type="checkbox"/>
                Li e concordo com os Termos e Condições.
              </label>
            </div>
            <button>Regristrar</button>


          </form>

        </div>
      </div>

    </Container>
  );
};

export default Register;
