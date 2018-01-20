import React, { Component } from 'react';
import './App.css';
import Button from './components/RaisedButton'
import OpportunityCard from './components/OpportunityCard'
import Header from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

class App extends Component {
  render() {
    return (
      <div>
        <Header style={{backgroundColor: 'white'}} position="sticky">
          <Toolbar>
            <Typography type="title" >
              We Are Ubuntu
            </Typography>
          </Toolbar>
        </Header>
        <div className="BaseContainer">
          <Grid container >

            {[0,0,0,0,0].map(() => (
              <Grid item md={6} sm={6} xs={12}>
                <OpportunityCard />
              </Grid>
            ))}

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
