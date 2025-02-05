import styled from 'styled-components';
import { SingleMovieProps } from './types';
import useScreenSize from '../hooks/ScreenSize';

function SingleMovie({movie, setMovies, setDisplayMovies}: SingleMovieProps) {
  const screen = useScreenSize()
  
    function handleSetBookmark(){
        setMovies(curr => curr.map(element => element.title === movie.title ? {...element, isBookmarked: true} : element))
        setDisplayMovies(curr => curr.map(element => element.title === movie.title ? {...element, isBookmarked: true} : element))
    }

    function handleRemoveBookmark(){
        setMovies(curr => curr.map(element => element.title === movie.title ? {...element, isBookmarked:false} : element))
        setDisplayMovies(curr => curr.map(element => element.title === movie.title ? {...element, isBookmarked:false} : element))
    }

    

    return (
    <MovieContainer>
        <img src={`${movie.thumbnail.regular[screen.width >= 768 ? "large" : screen.width >= 375 ? "medium" : "small" ]}`} alt={movie.title} />
        <p>{movie.year} • {movie.category} • {movie.rating}</p>
        <p className='title'>{movie.title}</p>
        {
            movie.isBookmarked 
            ?
            <div className='bookmark' onClick={handleRemoveBookmark}>
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>
            </div>
            :
            <div className='bookmark' onClick={handleSetBookmark}>
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
            </div>
        }
    </MovieContainer>
)
}

export default SingleMovie;


const MovieContainer = styled.div`
    position: relative;
    width: 280px;
    height: 226px;

    img {
        width: 280px;
        height: 174px;
        border-radius: 8px;
    }

    .bookmark {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        padding: 9px 10px;
        border-radius: 50%;
        background-color: rgba(12, 14, 24, 0.51);
    }

    .bookmark:hover{
        background-color: #FFFFFF;    
        fill: #000000;
    }
`