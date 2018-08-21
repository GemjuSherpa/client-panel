import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layouts/AppNavbar';
import Dashboard from './components/layouts/Dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
          
            <div className="App">
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                </Switch>
              </div>
            </div>
          </Router>
      </Provider>
    )
  }
}

export default App;
