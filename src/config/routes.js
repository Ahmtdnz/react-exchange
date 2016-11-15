import React from 'react';
import {Route, IndexRoute, Router} from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import Parite from '../containers/Parite';

export default (
  <Router>
      <Route path="/" name='Home' component={App}>
        <IndexRoute component={Home}/>
        <Route path="/parite" component={Parite} />
      </Route>
  </Router>
);
