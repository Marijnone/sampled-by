import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function artistDetails (props) {
    console.log(props);
    // const { params } = props.artist.match
    // console.log(params);
    
    
    return(
        <div className="artist-container">
                {/* <img src={props.artist.image} alt="header" className="detail-image"></img> */}
                <h1>{props.match.params.id}</h1>
                {/* <p>{params.id}</p> */}
                <div className="sample-table">
                    <h1>Original</h1>
                    <h1>Hello again</h1>
                 </div>
        </div>
    )

}

export default artistDetails
