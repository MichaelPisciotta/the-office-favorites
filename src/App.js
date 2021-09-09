import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom"; 
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Characters from "./Characters";
import Memes from "./Memes";
import NewFavorite from "./NewFavorite";
import FavoriteItem from './FavoriteItem';



function App() {
  const [page, setPage] = useState("/characters")
  const [favorites, setFavorites] = useState("")



  function addFav(favoritesObj){
    const updatedFavorites = [...favorites, favoritesObj]
    setFavorites(updatedFavorites)

  }


  return (
    <div className="App">
      <Router>
      <NavBar onChangePage={setPage} />
      <FavoriteItem favorites={favorites} setFavorites={setFavorites} />
            <Switch>
            <Route exact path="/characters">
                    <Characters  page={page} setPage={setPage}/>
                </Route>
                <Route path="/memes">
                    <Memes page={page} setPage={setPage}/>
                </Route>
                <Route path="/favorites/new">
                    <NewFavorite addFav={addFav} favorites={favorites} setFavorites={setFavorites}/>
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
