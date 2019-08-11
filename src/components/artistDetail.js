import React from 'react'
import ArtistData from './artistData'



function artistDetails(props) {
    console.log(props);
    // for some reason i think it is not possible to handle this via props. so this works alswell i just look up the id in the dat file and create an artist form that :)
    const artist = ArtistData.find(artist => artist.id === props.match.params.id)


    // const { params } = props.artist.match
    // console.log(params);

    return (
        <div className="artist-detail-container">
            <img alt="artist-header" src={artist.image}></img>

            {/* <p>{params.id}</p> */}
            <div className="sample-table">
                <h1>{artist.name}</h1>
                <p>{artist.desc}</p>
            </div>
        </div>
    )

}

export default artistDetails
