import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import SampledByKanye from './components/sampledByKanye'


const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/sampledbykanye" component={SampledByKanye} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )


ReactDOM.render(
routing,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

