import { useEffect, useState } from "react";
import axios from "axios";
import { ContainerCard } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";


const CardMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      getMovies();
  }, [])
  const getMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "a17c1ca19477abfdcb47c1e9f5b2d74c",
        language: "pt-BR",
      },
    }).then(response => {
      setMovies(response.data.results);
    })
  };

  return (
    <ContainerCard>
        {movies.map((movie) => 
          <div key={movie.id}>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="Texts">
        <h1>{movie.title}</h1>
      <div className="info">
      <p>{movie.genres}</p>
      <p className="averange"><FontAwesomeIcon icon={faStar} /> {movie.vote_average.toFixed(1)}</p>
      <p className="price-alugar">Alugar: R$ 19,90</p>
      <p className="price-comprar">Comprar: R$ 50,90</p>
    </div>
      </div>
      
    </div>
        )}
    </ContainerCard>
  );
};

export default CardMovies;
