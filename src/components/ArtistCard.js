import React from 'react'


function ArtistCard (props) {
    // console.log(props);
   
    //little hairy but dynamic system to make kaytranda white and tcq white could also take the length of the props maybe?
    return(
        <div className="artist-card">
        <h1 style={{color: props.Artist === "Kaytranada" || props.Artist === "A Tribe Called Quest" ? "white" : "black"}}>Sampled By  {props.Artist}</h1>
        <button>Discover</button>
        <img alt="background-img" src={'./images/' + props.src}/>
        </div>

    )
}
export default ArtistCard