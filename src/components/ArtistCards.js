
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import artistDetail from "./artistDetail";

function ArtistCards(props) {
    // console.log(props);
    

    //little hairy but dynamic ternary system to make kaytranda white and tcq white could also take the length of the props maybe?
    //take the data and map over the artist grabbing their info
    return (
    
            <div className="artist-card">
               
                    <img  alt="artist-header" src={props.artist.image}></img>
                    <h1>Sampled By {props.artist.name}</h1>
                    <p>{props.desc}</p>
                    <Link to={`/artist/${props.artist.id}`}>
                    <button>Discover</button>
                </Link>
                {/* <Route path="/artist/:id" component={artistDetail} /> */}
            </div> 
           
    )}


        //{/* // <div className="artist-card">
        //     <h1 style={{ color: props.Artist === "Kaytranada" || props.Artist === "A Tribe Called Quest" ? "white" : "black" }}>Sampled By  {}</h1>
        //     <ul>
        //         {/* <li><Link to='/sampledbykanye'></Link></li> */}
        //     </ul>
        //     <button><Link to='/sampledbykanye'>Discover</Link> </button>



        //     <img alt="background-img" src={'./images/' + props.src} />
        // </div>
        

   // ) */}
//}
export default ArtistCards