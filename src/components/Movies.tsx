import useEntertaimentContext from "../hooks/Context"
import MovieDisplay from "./MovieDisplay";

function Movies() {
  const context = useEntertaimentContext()
  const movies = context.movies.filter(movie => movie.category === "Movie")
  console.log(movies);

  return (
      <MovieDisplay movies={movies}/> 
    )
}

export default Movies
