import React from "react";
import SearchBar from "../NavBar/SearchBar";
import style from "./Nav.module.css"
import About from "../About/About";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }){
    return(
        <div className={style.NavBar}>
            <NavLink to={"/Home"}>Home</NavLink>
             <NavLink to={"/About"}>About</NavLink>
             <NavLink to={"/favorites"}>Favorites</NavLink>
             <SearchBar onSearch={onSearch} ></SearchBar>
        </div>
    )
}