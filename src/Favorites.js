import React, {useState} from "react";


function Favorites({ addFav }) {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    
    function handleSubmit(e) {
        e.preventDefault()
        const favoritesObj = { 
            fav: { 
                description: description, 
                image: image
            }
        }
        fetch("/db.json/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favoritesObj)
        })
            .then(r => r.json())
            .then(data => addFav(data))
    };
  
    return (
        <div>

        <form onSubmit={handleSubmit}>
            
            <h2>Add favorites</h2>

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <label htmlFor="image"> Image</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />  

            <button type="submit">Add New Favorite</button>

        </form>

        </div>
    
    )
}





export default Favorites;