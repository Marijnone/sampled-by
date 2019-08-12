import React from 'react'
import ArtistData from './artistData'
import SpotifyAuth from '../spotifyAuth'
import GetToken from '../spotifyAuth';


function artistDetails(props) {
    console.log(props);
    // for some reason i think it is not possible to handle this via props. so this works alswell i just look up the id in the dat file and create an artist form that :)
    const artist = ArtistData.find(artist => artist.id === props.match.params.id)


    return (
        <div className="artist-detail-container">
          <img alt="artist-header" src={artist.image}></img> 
           
            {/* <p>{props.match.params.id}</p> */}
            <div className="sample-table">
                <h1>{artist.name}</h1>
                <p>{artist.desc}</p>
            </div>
            <div className="spotify-data"> 
                <button class="connect-spotify" onClick={GetToken}> Get connected with Spotify</button>
            </div>

        </div>
    )

}

export default artistDetails
