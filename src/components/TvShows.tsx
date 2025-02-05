import useEntertaimentContext from "../hooks/Context";
import MovieDisplay from "./MovieDisplay";

function TvShows() {
  const context = useEntertaimentContext()
  const movies = context.movies.filter(movie => movie.category === "TV Series")
  console.log(movies);

  return (
    <MovieDisplay movies={movies}/> 
  )
}

export default TvShows;
