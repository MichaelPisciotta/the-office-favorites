import React from "react";
import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <nav>
            <NavLink exact to="/characters">Characters</NavLink>
           
            <NavLink to="/memes">Memes</NavLink>
        
            <NavLink to="/favorites">Favorites</NavLink>

            <a className="mail" href="mailto:mfp56@miami.edu">Email Me!</a>  

        </nav>
    );
}

export default NavBar;