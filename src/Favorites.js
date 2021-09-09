import React, {useState} from "react";



   
function Favorites({ addFav }) {
    const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");

    
    function handleSubmit(e) {
        e.preventDefault()
        const favObj = { 
            fav: { 
                description: description, 
                // image: image,
            }
        }
        // persist todo on server
        fetch("/db.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favObj)
        })
            .then(r => r.json())
            .then(data => console.log(data.fav))
    };
  
    return (
        <div>

        <form onSubmit={handleSubmit}>
            
            <h2>Add favorites</h2>

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            {/* <label htmlFor="image"> Image</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />   */}

            <button type="submit">Add New Favorite</button>

        </form>

        </div>
       











    )
}





export default Favorites;