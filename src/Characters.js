import React, {useEffect} from "react";
import michael from './images/michael.jpeg';
import jim from './images/jim.jpeg';
import dwight from './images/dwight.jpeg';
import pam from './images/pam.jpeg';
import ryan from './images/ryan.jpeg';
import kelly from './images/kelly.jpeg';
import kevin from './images/kevin.jpeg';
import oscar from './images/oscar.jpeg';
import andy from './images/andy.jpeg';
import creed from './images/creed.jpeg';



function Characters({page, setPage}){


    useEffect(() => {
        fetch("/db.json")
          .then((r) => r.json())
          .then(data => setPage(data));
    }, [])


    return(
        <div className="center-images">


            <h1 className="title">The Office characters</h1>
            
            <div>
            <img src={michael} />
            <h2>Michael Scott</h2>
            </div>

            <div>
            <img src={jim} />
            <h2>Jim Halpert</h2>
            </div>

            <div>
            <img src={dwight} />
            <h2>Dwight Shrute</h2>
            </div>

            <div>
            <img src={pam} />
            <h2>Pam Beesly</h2>
            </div>

            <div>
            <img src={ryan} />
            <h2>Ryan Howard</h2>
            </div>

            <div>
            <img src={kelly} />
            <h2>kelly Kapoor</h2>
            </div>

            <div>
            <img src={kevin} />
            <h2>Kevin Malone</h2>
            </div>

            <div>
            <img src={oscar} />
            <h2>Oscar Martinez</h2>
            </div>

            <div>
            <img src={andy} />
            <h2>Andy Bernard</h2>
            </div>

            <div>
            <img src={creed} />
            <h2>Creed Bratton</h2>
            </div>





            
        

        
            
            
            



        </div>
        )
} 


export default Characters;