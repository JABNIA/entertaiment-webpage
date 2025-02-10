import { useState } from "react";
import SingleMovie from "./SingleMovie";
import { Movie, MoviesProps } from "./types";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import useEntertaimentContext from "../hooks/Context";

function MovieDisplay({movies} : MoviesProps) {
  const context = useEntertaimentContext()
  const search = useOutletContext<string>()
  const [displayMovies, setDisplayMovies] = useState<Movie[]>( movies );
  const moviesToDisplay = search === "" ? displayMovies : displayMovies.filter(movie => movie.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <MoviesContainer>
      {moviesToDisplay.map((element) => (
        <SingleMovie
          key={element.title}
          movie={element}
          setMovies={context.setMovies}
          setDisplayMovies={setDisplayMovies}
        />
      ))}
    </MoviesContainer>
  );
}

export default MovieDisplay;


export const MoviesContainer = styled.section`
  max-width: 1240px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 40px 32px;

  @media (max-width: 1440px) {
    gap: 29px;
    padding: 24px auto;
  }
  
  @media (max-width: 768px) {
    max-width: 343px;
    gap: 15px;
    padding: 24px auto;
    margin: 40px auto 0;
  }
`