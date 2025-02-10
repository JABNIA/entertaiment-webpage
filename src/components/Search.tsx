import { useLocation } from "react-router-dom";
import styled from "styled-components";


 function Search({movieName, setMovieName}: {movieName: string, setMovieName: React.Dispatch<React.SetStateAction<string>>}) {
  const location = useLocation();

  const placeholder = () => {
    if (location.pathname === "/") {
      return "Search for movies or TV series";
    } else if (location.pathname === "/movies") {
      return "Search for movies";
    } else if (location.pathname === "/tvseries") {
      return "Search for TV series";
    } else if (location.pathname === "/bookmarks") {
      return "Search for bookmarked shows";
    }
  };

  function handleSearch(name: string) {
    setMovieName(name);
  }

  return (
    <SearchBarWrapper>
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          fill="#FFF"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder()}
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        value={movieName}
      />
    </SearchBarWrapper>
  );
}

export default Search;

const SearchBarWrapper = styled.section`
  width: 1280px;
  height: 40px;
  margin: 32px 32px 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 32px;

  input {
    width: 321px;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: Outfit;
    font-size: 24px;
    font-weight: 400;
    line-height: 30.24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ffffff;
  }

  input::placeholder {
    font-family: Outfit;
    color: rgba(255, 255, 255, 0.49);
  }

  input:focus {
    border-bottom: 1px solid #5a698f;
  }

  @media (max-width: 1440px) {
    max-width: 1440px;
    margin: 32px 25px 0;
    gap: 24px;
  
    input{
        width: 128px;
      }

    input::placeholder {
    font-family: Outfit;
    color: rgba(255, 255, 255, 0.49);
  }
  }

  @media (max-width: 768px) {
    max-width: 257px;
    margin: 24px 16px 0;
    gap: 16px;   
    
      input{
        width: 214px;
      } 
      input::placeholder {
        font-family: Outfit;
        color: rgba(255, 255, 255, 0.49);
        font-family: Outfit;
        font-weight: normal;
        font-size: 16px;
        line-height: 20.16px;
        letter-spacing: 0px;

  }

  }
`;
