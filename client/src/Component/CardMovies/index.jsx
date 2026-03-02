import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { ContainerCard } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "a17c1ca19477abfdcb47c1e9f5b2d74c";

const CardMovies = ({ selectedGenre, search }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const moviesResponse = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: API_KEY,
              language: "pt-BR",
            },
          },
        );

        const genresResponse = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              api_key: API_KEY,
              language: "pt-BR",
            },
          },
        );

        setMovies(moviesResponse.data.results);
        setGenres(genresResponse.data.genres);
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    fetchData();
  }, []);

  const getGenreNames = (genreIds = []) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id))
      .filter(Boolean)
      .map((genre) => genre.name)
      .join(", ");
  };

  const getGenreIdByName = (name) => {
    const genre = genres.find((g) => g.name === name);
    return genre ? genre.id : null;
  };
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesGenre = selectedGenre
        ? movie.genre_ids.includes(getGenreIdByName(selectedGenre))
        : true;

      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesGenre && matchesSearch;
    });
  }, [movies, selectedGenre, search, genres]);

  return (
    <ContainerCard>
      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}

          <div className="Texts">
            <h1>{movie.title}</h1>

            <div className="info">
              <p className="genre">{getGenreNames(movie.genre_ids)}</p>

              <p className="averange">
                <FontAwesomeIcon icon={faStar} />
                {movie.vote_average.toFixed(1)}
              </p>

              <p className="price-alugar">Alugar: R$ 19,90</p>
              <p className="price-comprar">Comprar: R$ 50,90</p>
            </div>
          </div>
        </div>
      ))}
    </ContainerCard>
  );
};

export default CardMovies;
