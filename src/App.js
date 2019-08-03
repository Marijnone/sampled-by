import React from 'react';
import Intro from './components/Intro';
import ArtistCard from './components/ArtistCard';
import SampledByKanye from './components/sampledByKanye';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//here i played around with props i give the artist card components the artist name and the image url
function App() {


  return (
    <Router>
      <div className="App">
        <Intro />
        <ArtistCard Artist="Kanye West" img src='Image-1@2x.png' />
        <ArtistCard Artist="Kaytranada" img src='kaytra-header.jpg' />
        <ArtistCard Artist="Dr Dre" img src='dr-header@2x.png' />
        <ArtistCard Artist="A Tribe Called Quest" img src='tribe@2x.png' />
        {/* <ArtistCard Artist="Pharcyde" img src='tribe-header.jpg'/> */}
        {/* <SampledByKanye /> */}
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/sampledbykanye" component={SampledByKanye} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    
        <Route path="/about" component={SampledByKanye} />
    </Router>
  );
}

export default App;
