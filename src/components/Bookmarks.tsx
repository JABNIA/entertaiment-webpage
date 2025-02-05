import styled from "styled-components";
import useEntertaimentContext from "../hooks/Context";
import MovieDisplay from "./MovieDisplay";

function Bookmarks() {
  const context = useEntertaimentContext();
  const BookmarkedMovies = context.movies.filter(movie => movie.isBookmarked && movie.category === "Movie");
  const BookmarkedTvSeries = context.movies.filter(movie => movie.isBookmarked && movie.category === "TV Series");

  return (
    <BookmarksContainer>
        {
          BookmarkedMovies.length === 0 
        ?
        null
        :
        <>
          <h2>Bookmarked Movies</h2>
          <MovieDisplay movies={BookmarkedMovies} />
        </>
        }
        {
          BookmarkedTvSeries.length === 0
          ?
          null
          :
          <>
            <h2>Bookmarked TV Series</h2>
            <MovieDisplay movies={BookmarkedTvSeries} />
          </>
        }
    </BookmarksContainer>
  )
}

export default Bookmarks


const BookmarksContainer = styled.section`
  width: 1240px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;
  margin: 40px 32px;
`