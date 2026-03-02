import React, { useState } from "react";
import Header from "../Component/Header.jsx";
import CardMovies from "../Component/CardMovies/index.jsx";
import { Container } from "../styles/Home.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [search, setSearch] = useState("");

  const genresList = [
    "Ação",
    "Drama",
    "Romance",
    "Comédia",
    "Ficção científica",
    "Suspense",
  ];

  return (
    <Container>
      <Header />

      <div className="container-search">
        <h1>Transmitir, alugar e possuir</h1>
        <p>
          Explore milhares de filmes. Alugue por 48 horas ou adquira acesso
          permanente.
        </p>

        <div className="search-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

          <input
            type="text"
            className="input-search"
            placeholder="Pesquisar filmes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="containe-btns-filter">
        <div className="btns-filter">
          <button
            className={`btn-filter ${selectedGenre === null ? "active" : ""}`}
            onClick={() => setSelectedGenre(null)}
          >
            All
          </button>

          {genresList.map((genre) => (
            <button
              key={genre}
              className={`btn-filter ${
                selectedGenre === genre ? "active" : ""
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <CardMovies selectedGenre={selectedGenre} search={search} />
    </Container>
  );
}

export default Home;
