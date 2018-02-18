import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { ConnectedRouter, push } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from './store'
import Home from './routes/Home'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
