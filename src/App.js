
import React from 'react';
import Intro from './components/Intro';
import ArtistCards from './components/ArtistCards';
import './App.css';
import artistData from './components/artistData'
import artist from './components/artistData';

// import Gettoken from './spotifyAuth'
//redirect and acces token set

// const button = document.querySelector("button");

//https://lfcuc.codesandbox.io/
//this tool is great: https://kigiri.github.io/fetch/

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

// Set token

const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5dffda321ef44de7b28e59b32f030be7";
const redirectUri = "http://localhost:3000/artist/";
const scopes = [""];

// If there is no token, redirect to Spotify authorization
// if (!_token) {
// alert("si")
// }

export function GetToken() {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
}
//end of spotify auth code

// function App() {
// let _token = hash.access_token;
//   // MAPPPP the components with the right props, so the component gets the right data
//   const artistComponents = artistData.map(artist =>
//     <ArtistCards key={artist.id} artist={artist} name={artist.name} image={artist.image} desc={artist.desc} />)
//   return (
//     <div className="App">
//       {/* <SpotifyApiContext.Provider value={token}> */}
//         {artistComponents}
//         {/* </SpotifyApiContext.Provider> */}
//     </div>

//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: null
    }
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    
    }else{
      console.log('no token :(');
      
    }
  }
  render() {
    // MAPPPP the components with the right props, so the component gets the right data
    const artistComponents = artistData.map(artist =>
      <ArtistCards key={artist.id} artist={artist} name={artist.name} image={artist.image} desc={artist.desc} />)

    return (
      <div className="App">
          <h1> {this.state.token}</h1>
        {artistComponents} 
     
      </div>
    )
  }
  
}

export default App;