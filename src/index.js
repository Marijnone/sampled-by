import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import artistDetails from './components/artistDetail';
import artistData from './components/artistData'




const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/artist/:id" component={artistDetails} />
        {/* <Route component={Notfound} /> let thi sout for now maybe come in handy later */}
      </Switch>
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

