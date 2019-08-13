import React from 'react'
import ArtistData from './artistData'
// import SpotifyAuth from '../spotifyAuth'
// import GetToken from '../spotifyAuth'
import { GetToken } from '../App'
import { Artist } from 'react-spotify-api'
import { Playlist, PlaylistTracks } from 'react-spotify-api'

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
                    <p></p>
                </div>

                <div style={{ display: window.localStorage.getItem('token') ? "none" : "block" }} className="spotify-data">
                    <button className="connect-spotify" onClick={GetToken}> Get connected with Spotify</button>
                </div>
                    <div className="spotify-data-track">
                    <Playlist id="060QHhmOlYMEfFdxl4NpAS">
                        {(playlist, loading, error) => (
                            playlist ? <h1>{playlist.name} </h1> : null)}
                    </Playlist>
                    <PlaylistTracks id="060QHhmOlYMEfFdxl4NpAS">
                    {(tracks, loading, error) => (
                      tracks ? (
                    tracks.items.map(track => (
                    <h1 key={track.track.id}>{track.track.name}</h1>
            ))
        ) : null
    )}
</PlaylistTracks>
                    </div>
                

                
            </div>
    )
}

export default artistDetails
