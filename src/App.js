import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Main from './containers/Main';
import PageNotFound from './containers/PageNotFound';

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Main} />
      <PrivateRoute exact path="/givemefacts" component={Main} />
      <Route exact path="/english" render={() => <Redirect to="/givemefacts?language=en" />} />
      <Route exact path="/german" render={() => <Redirect to="/givemefacts?language=de" />} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
