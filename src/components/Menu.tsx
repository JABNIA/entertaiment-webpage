import styled from "styled-components"
import { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom";

const svgPaths = [
    {
        id: "",
        svg: <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"/></svg>
    }
    ,{
        id: "movies",
        svg: <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/></svg>        
    }
    ,
    {
        id: "tvseries",
        svg: <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"/></svg>
    }
     ,
    {
        id: "bookmarks",
        svg: <svg  width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/></svg>
    }
    ]



function Menu() {
  return (
    <MenuContainer>
        <div className="logo-container">
            <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747"/></svg>
        </div>
        <div className="menu-icons">
            {svgPaths.map(svg => <Icon key={svg.id} svg={svg.svg} pathName={svg.id}/>)}
        </div>
        <Avatar>
            <img src="./assets/image-avatar.png" alt="User Avatar" />
        </Avatar>    
    </MenuContainer>
  )
}

export default Menu;


function Icon({svg, pathName}:{svg:ReactNode, pathName:string}) {
    const path = useLocation()

  return (
    <li className={ path.pathname === `/${pathName}` ? "menu-item active" : "menu-item"} data-page={pathName}>
        <Link to={`/${pathName}`}>  
            {svg}
        </Link>
    </li>
  )
}



const MenuContainer = styled.div`
    width: 96px;
    height: 960px;
    margin: 32px 0 0 32px;
    background-color: #161D2F;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;

    .logo-container{
        margin: 35.41px 32.14px 74.99px 31.86px;
    }

    .menu-icons{
        display: flex;
        flex-direction: column;
        gap: 40px; 
    }

    .menu-item{
        fill: #5A698F;
        list-style: none;
    }

    .menu-item:hover {
        fill: #FC4747;
        cursor: pointer;
    }
    
    .active svg {
        fill: #FFFFFF;
    }

    @media (max-width:1440px){
        min-width: 375px;
        width: 95%;
        height: 72px;
        flex-direction: row;
        justify-content: space-between;
        margin: 23px 24px 0 25px; 
        
        .logo-container{
            margin: 24px 0 22.4px 24px; 
        }
        
        .menu-icons{
            display: flex;
            flex-direction: row;
            gap: 40px; 
        }
        
        .menu-item:hover svg {
            fill: #FC4747;
            cursor: pointer;
        }
    }
    @media (max-width:768px){
        width: 100vw;
        height: 72px;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        border-radius: 0%;
        }
`

const Avatar = styled.div`
    width: 40px;
    height: 40px;
    margin-top: 492px;
    border: 1px solid white;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    @media (max-width:1440px){
        width: 32px;
        height: 32px;
        margin: 21px 16px 19px 0;
    }
`