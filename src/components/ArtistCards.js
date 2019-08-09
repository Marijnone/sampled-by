import React from 'react'
import sampledbykanye from './sampledByKanye'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ArtistCard(props) {
    // console.log(props);

    //little hairy but dynamic ternary system to make kaytranda white and tcq white could also take the length of the props maybe?
    return (
        <div className="artist-card">
            <h1 style={{ color: props.Artist === "Kaytranada" || props.Artist === "A Tribe Called Quest" ? "white" : "black" }}>Sampled By  {props.Artist}</h1>
            <ul>
                {/* <li><Link to='/sampledbykanye'></Link></li> */}
            </ul>
            <button><Link to='/sampledbykanye'>Discover</Link> </button>



            <img alt="background-img" src={'./images/' + props.src} />
        </div>
        

    )
}
export default ArtistCard