import React, { Component } from 'react';
import './App.css';
import OpportunityCard from './components/OpportunityCard'
import Header from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Spinner from 'react-spinkit'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      opportunities: [],
      loading: false,
    }
  }

  componentWillMount(){
    this.setState({ loading: true })
    fetch('https://we-are-ubuntu.firebaseio.com/opportunities.json')
      .then(response => response.json())
      .then(opportunities => this.setState({ opportunities, loading: false }))
  }

  render() {
    return (
      <div>
        <Header style={{backgroundColor: 'white'}} position="static">
          <Toolbar>
            <Typography type="title" >
              We Are Ubuntu
            </Typography>
          </Toolbar>
        </Header>
        <div className="BaseContainer">
          <Grid container >

            {this.state.loading ? <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}><Spinner style={{height: 62, width: 62}} name="circle" color="green" /></Grid> : null}
            {this.state.opportunities.length === 0 && !this.state.loading ? <h1>Nenhuma oportunidade no momento</h1> : null}
            {this.state.opportunities.map((opp, index) => (
              <Grid key={index} item md={6} sm={6} xs={12}>
                <OpportunityCard {...opp}/>
              </Grid>
            ))}

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
