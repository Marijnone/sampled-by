
import React from 'react'

function SampledByKanye(props) {
    return (
        <div className="artist-container">
        <img src={props.artist.image} alt="header" className="detail-image"></img>
        <h1>{props.artist.name}</h1>
        <div className="sample-table">
        <h1>Original</h1>
        <h1>Hello again</h1>
        
           
        </div>
        </div>
    )

}

export default SampledByKanye