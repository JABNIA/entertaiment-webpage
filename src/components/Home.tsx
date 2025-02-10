import styled from "styled-components";
import Trending from "./Trending";
import useEntertaimentContext from "../hooks/Context";
import MovieDisplay from "./MovieDisplay";
import { useState } from "react";
import { Movie } from "./types";


function Home() {
  const context = useEntertaimentContext()
  const [movies] = useState<Movie[]>(context.movies)
  console.log("rerender happened")

  return (
    <MoviesSegment>
      <h2>trending</h2>
      <Trending />
      <h2>Recomended for you</h2>
      <MovieDisplay movies={movies}/>
    </MoviesSegment>  
  )
}

export default Home;


const MoviesSegment = styled.main`
  margin: 64px 0 0;

  h2{
    padding: 0 32px;
  }

  @media (max-width: 768px){
    h2{
      padding: 0 0 0 16px;
    }
  }
`


