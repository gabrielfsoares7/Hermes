import { useEffect, useState } from "react";
import axios from "axios";
import { ContainerCard } from "./style.js";


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
      <div>
        {movies.map((movie) => 
          <h1>{movie.title}</h1>
        )}
      </div>
    </ContainerCard>
  );
};

export default CardMovies;
