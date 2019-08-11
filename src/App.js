
import React from 'react';
import Intro from './components/Intro';
import ArtistCards from './components/ArtistCards';
import './App.css';
import artistData from './components/artistData'
import artist from './components/artistData';




function App() {

    const artistComponents = artistData.map(artist =>
    <ArtistCards key={artist.id} artist={artist} name={artist.name} image={artist.image} desc={artist.desc}   />)
    
  return (

    <div className="App">
      {/* <Intro /> */}
    {/* this is an array of components build in the above .map */}
        {artistComponents}
    </div>
  );
}

export default App;