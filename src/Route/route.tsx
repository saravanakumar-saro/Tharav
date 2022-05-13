import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from '../Pages/Login';

interface RouteProps {}
class RoutePage extends Component<RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RoutePage;
