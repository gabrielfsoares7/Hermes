import React from "react";
import Header from "../Component/Header.jsx";
import CardMovies from "../Component/CardMovies/index.jsx";
import { Container } from "../styles/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


// import Navbar from "../components/Navbar";

function Home() {
  return (
    <Container>
      <Header />
      <div className="container-search">
        <h1>Transmitir, alugar e possuir</h1>
        <p>
          Explore milhares de filmes. Alugue por 48 horas ou adquira acesso permanente.
        </p>
        <div className="search-wrapper">
           <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input
          type="text"
          className="input-search"
          placeholder= "Pesquisar filmes..."
        /></div>
      </div>
      <div className="containe-btns-filter">
        <div className="btns-filter">
          <button className="btn-filter active">All</button>
          <button className="btn-filter">Ação</button>
          <button className="btn-filter">Drama</button>
          <button className="btn-filter">Romance</button>
          <button className="btn-filter">Comédia</button>
          <button className="btn-filter">Ficção científica</button>
          <button className="btn-filter">Suspense</button>
        </div>
      </div>
      <CardMovies />
      {/* <Navbar />  */}
    </Container>
  );
};
export default Home;
