import styled from "styled-components";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import { EntertaimentContext } from "../hooks/Context";
import Data from "../data/data.json"
import { useEffect, useState } from "react";
import { Movie } from "./types";
import Search from "./Search";


const movieData = Data;

function Layout() {
  const [movies, setMovies] = useState<Movie[]>(movieData)
  const [movieName, setMovieName] = useState<string>("");
  const data = {movies: movies, setMovies:setMovies}
  

  useEffect(() => {
    
  }, [movies])

  return (
    <AppWrapper>
      <EntertaimentContext.Provider value = {data} >
      <Menu />
      <div>
        <Search movieName={movieName} setMovieName={setMovieName}/>
        <Outlet context={movieName}/>
      </div>
      </EntertaimentContext.Provider>
    </AppWrapper>
  )
}

export default Layout;


const AppWrapper = styled.div`
    width: 1440px;
    height: 100%;
    display: flex;
    color: #FFFFFF;
    margin: auto;

`