import React from 'react';
import Intro from './components/Intro'
import ArtistCard from './components/ArtistCard'
import './App.css';



//here i played around with props i give the artist card components the artist name and the image url
function App() {

  
  return (
    <div className="App">
     <Intro />
     <ArtistCard Artist="Kanye West" img src='Image-1@2x.png'/>
     <ArtistCard Artist="Kaytranada" img src='kaytra-header.jpg' />
     <ArtistCard Artist="Dr Dre"     img src='dr-header@2x.png'/>
     <ArtistCard Artist="A Tribe Called Quest" img src='tribe@2x.png'/>
     {/* <ArtistCard Artist="Pharcyde" img src='tribe-header.jpg'/> */}

    </div>
  );
}

export default App;
