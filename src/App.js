import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom"; 
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Characters from "./Characters";
import Memes from "./Memes";
import Favorites from "./Favorites";



function App() {
  const [page, setPage] = useState("/characters")

  return (
    <div className="App">
      <Router>
      <NavBar onChangePage={setPage} />
            <Switch>
            <Route exact path="/characters">
                    <Characters />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/memes">
                    <Memes />
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
