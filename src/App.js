
import React from 'react';
import Intro from './components/Intro';
import ArtistCards from './components/ArtistCards';
import './App.css';
import artistData from './components/artistData'
import artist from './components/artistData';

import Gettoken from './spotifyAuth'


function App() {
  // MAPPPP the components with the right props, so the component gets the right data
  const artistComponents = artistData.map(artist =>
    <ArtistCards key={artist.id} artist={artist} name={artist.name} image={artist.image} desc={artist.desc} />)
    

  return (

    <div className="App">
      {/* <SpotifyApiContext.Provider value={token}> */}
        {artistComponents}
        {/* </SpotifyApiContext.Provider> */}
    </div>

  )
}

export default App;