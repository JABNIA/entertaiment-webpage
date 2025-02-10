import styled from "styled-components";
import { useEffect, useRef} from "react";
import { SingleMovieProps } from "./types";
import useScreenSize from "../hooks/ScreenSize";
import useEntertaimentContext from "../hooks/Context";

function Trending() {
  const context = useEntertaimentContext()
  const trendingMovies = context.movies.filter((movie) => movie.isTrending);
  const trendingContainer = useRef<HTMLDivElement>(null);

  const scroll = (event: WheelEvent) => {
    if (trendingContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        trendingContainer.current;

      if (
        (event.deltaY < 0 && scrollLeft > 0) ||
        (event.deltaY > 0 && scrollLeft + clientWidth < scrollWidth)
      ) {
        event.preventDefault();
        trendingContainer.current.scrollLeft += event.deltaY * 2;
      }
    }
};

    useEffect(() => {
      const container = trendingContainer.current;

      if (container) {
        container.addEventListener("wheel", scroll as EventListener, {
          passive: false,
        });
      }

      return () => {
        if (container) {
          container.removeEventListener("wheel", scroll as EventListener);
        }
      };
    }, []);


  return (
    <TrendingWrapper ref={trendingContainer}>
      {trendingMovies.map((trend) => (
        <SingleTrendingMovie key={trend.title} movie={trend} setMovies={context.setMovies} setDisplayMovies={() => trendingMovies}/>
      ))}
    </TrendingWrapper>
  );
}

function SingleTrendingMovie({movie, setMovies}: SingleMovieProps) {
    const screen = useScreenSize()

    function handleSetBookmark(){
      setMovies(curr => curr.map(element => element.title === movie.title ? {...element, isBookmarked: true} : element))
  }

  function handleRemoveBookmark(){
      setMovies(curr => curr.map(element => element.title === movie.title ? {...element, isBookmarked:false} : element))
  }


    return (
        <TrendingMovieContainer>
          {movie.thumbnail.trending ? 
            <img src={movie.thumbnail.trending[`${screen.width > 768 ? "large" : "small"}`]} alt={movie.title} />
              :
            null
          }
          <div className="info-wrapper">
            <p className="info">{movie.year} • {movie.category} • {movie.rating}</p>
            <p className="title">
              {movie.title}
            </p>
          </div>
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
        </TrendingMovieContainer>
    )
}



export default Trending;

const TrendingWrapper = styled.section`
  width: 1240px;
  height: 230px;
  display: flex;
  overflow: auto;
  gap: 40px;
  margin: 25px 32px;
  -ms-overflow-style: none;
  scrollbar-width: none;  
  scroll-behavior: smooth;

  @media (max-width: 1440px) {
  }
  
  @media (max-width: 768px) {
  width: 90vw;
  height: 140px;
  gap: 16px;
  margin: 25px 16px;

  }
`


const TrendingMovieContainer = styled.div`
    position: relative;
    width: 470px;
    height: 230px;
    
    img{
      width: 470px;
      height: 230px;
      border-radius: 8px;
    }

    .info {
      width: 150px;
      height: 19px;
    }

    .title {
      font-family: Outfit;
      font-size: 24px;
      font-weight: 400;
      line-height: 30.24px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    .info-wrapper {
      position: absolute;
      left: 24px;
      bottom: 24px;
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

    @media (max-width: 768px) {
      width: 240px;
      height: 140px;
      margin: 0;

      img {
        width: 240px;
        height: 140px;
        border-radius: 8px;
      }

      .info {
        width: 150px;
        height: 19px;
      }

      .title {
        width: 91px;
        height: 19px;
        font-size: 15px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }

      .info-wrapper {
        position: absolute;
        left: 16px;
        bottom: 16px;
        font-family: Outfit;

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
    }
`