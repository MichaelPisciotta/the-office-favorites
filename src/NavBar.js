import React from "react";
import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <nav>
            <NavLink exact to="/characters">Characters</NavLink>
            <br></br>
            <br></br>
            <NavLink to="/memes">Memes</NavLink>
            <br></br>
            <br></br>

            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    );
}

export default NavBar;