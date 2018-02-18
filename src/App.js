import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { ConnectedRouter, push } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from './store'
import Home from './routes/Home'
import OpportunityDetail from './routes/OpportunityDetail'
import Signin from './routes/Signin'
import Signup from './routes/Signup'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/opportunity/:id" component={OpportunityDetail}/>
            <Route exact path="/login" component={Signin}/>
            <Route exact path="/cadastro" component={Signup}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
