import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import artistDetails from './components/artistDetail';
import ScrollMemory from 'react-router-scroll-memory';
import { SpotifyApiContext, Artist } from 'react-spotify-api';




const routing = (
  <Router>
    <ScrollMemory />
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
            <SpotifyApiContext.Provider value={window.localStorage.getItem('token')}>

        <Route exact path="/" component={App}></Route>
        <Route path="/artist/:id" component={artistDetails} />
        {/* <Route component={Notfound} /> let thi sout for now maybe come in handy later */}
        </SpotifyApiContext.Provider>

      </Switch>

    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

