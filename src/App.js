
import React from 'react';
import Intro from './components/Intro';
import ArtistCards from './components/ArtistCards';
import SampledByKanye from './components/sampledByKanye';
import './App.css';
import artistData from './components/artistData'
import artist from './components/artistData';




function App() {

    const artistComponents = artistData.map(artist => <ArtistCards key={artist.id} artist={artist} name={artist.name} image={artist.image} desc={artist.desc}   />)
    
  return (

    <div className="App">
      {/* <Intro /> */}
        {artistComponents}
    </div>
  );
}

export default App;