import React from 'react';
import Intro from './components/Intro';
import ArtistCards from './components/ArtistCards';
import SampledByKanye from './components/sampledByKanye';
import './App.css';



//here i played around with props i give the artist card components the artist name and the image url
function App() {


  return (

    <div className="App">
      <Intro />
      <ArtistCards Artist="Kanye West" img src='Image-1@2x.png' />
      <ArtistCards Artist="Kaytranada" img src='kaytra-header.jpg' />
      <ArtistCards Artist="Dr Dre" img src='dr-header@2x.png' />
      <ArtistCards Artist="A Tribe Called Quest" img src='tribe@2x.png' />
      {/* <ArtistCard Artist="Pharcyde" img src='tribe-header.jpg'/> */}
      {/* <SampledByKanye /> */}
      {/* <Route exact path="/" component={Home} /> */}

      {/* <Route path="/sampledbykanye" component={SampledByKanye} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  );
}

export default App;
