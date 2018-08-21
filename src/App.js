import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layouts/AppNavbar';
import Dashboard from './components/layouts/Dashboard';
import AddClient from './components/clients/AddClient';

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
                  <Route exact path="/clients/add" component={AddClient} />
                </Switch>
              </div>
            </div>
          </Router>
      </Provider>
    )
  }
}

export default App;
