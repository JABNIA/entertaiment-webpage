
export type Movie = {
    title: string,
    thumbnail: {
      trending?: {
        small: string, 
        large: string,
      },
      regular: {
        small: string,
        medium: string,
        large: string,
      }
    },
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
  } 

 export interface MoviesProps {
    movies: Movie[],
 }

  export interface SingleMovieProps{
    movie: Movie,
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>,
    setDisplayMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

export interface contextProps {
  movies: Movie[],
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>

}