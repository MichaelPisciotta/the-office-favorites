import React, {useEffect} from "react";
import michael from './memes/michael.jpeg';
import jim from './memes/jim.jpeg';
import dwight from './memes/dwight.jpeg';
import pam from './memes/pam.jpeg';
import ryan from './memes/ryan.jpeg';
import kelly from './memes/kelly.jpeg';
import kevin from './memes/kevin.jpeg';
import oscar from './memes/oscar.jpeg';
import andy from './memes/andy.jpeg';
import creed from './memes/creed.jpeg';

function Memes({page, setPage}){
 return(
        <div>
            <h1> Office memes</h1>

            <div> <img src={michael} /> </div>
            <div> <img src={jim} /> </div>
            <div> <img src={dwight} /> </div>
            <div> <img src={pam} /> </div>
            <div> <img src={ryan} /> </div>
            <div> <img src={kelly} /> </div>
            <div> <img src={kevin} /> </div>
            <div> <img src={oscar} /> </div>
            <div> <img src={andy} /> </div>
            <div> <img src={creed} /> </div>



        </div>       
        )
}


export default Memes;