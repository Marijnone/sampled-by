
import React from 'react';
import Intro from './components/Intro';
import ArtistCards from './components/ArtistCards';
import SampledByKanye from './components/sampledByKanye';
import './App.css';
import artistData from './components/artistData'
import artist from './components/artistData';



function App() {
    // const id = artist.length
    const artistComponents = artistData.map(artist => <ArtistCards key={artist.id} artist={artist} name={artist.name}  image={artist.image} desc={artist.desc} />)
    
  return (

    <div className="App">
      {/* <Intro /> */}
        {artistComponents}

      {/* <ArtistCards Artist="Kanye West" img src='Image-1@2x.png' />
      <ArtistCards Artist="Kaytranada" img src='kaytra-header.jpg' />
      <ArtistCards Artist="Dr Dre" img src='dr-header@2x.png' />
      <ArtistCards Artist="A Tribe Called Quest" img src='tribe@2x.png' /> */}
      {/* <ArtistCard Artist="Pharcyde" img src='tribe-header.jpg'/> */}
      {/* <SampledByKanye /> */}
      {/* <Route exact path="/" component={App} /> */}

      {/* <Route path="/sampledbykanye" component={SampledByKanye} /> */}
      {/* <Route path="/artist" component={artistCards} /> */}
    </div>
  );
}

export default App;