import React, {useState} from "react";

function FavoriteItem({favorites}){
return(
    <div>

            <h2>My Favorites</h2>
                <ul>
                    {Favorites.map((favorite) => (<FavoriteItem />))}
                </ul>

    </div>
)
}

export default FavoriteItem;