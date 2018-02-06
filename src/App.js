import React, { Component } from 'react';
import './App.css';
import OpportunityCard from './components/OpportunityCard/OpportunityCard'
import Grid from 'material-ui/Grid'
import Spinner from 'react-spinkit'
import Header from './components/Header/Header'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import firebase from 'firebase'
import { onValueChange } from './model/opportunity'
import OpportunityForm from './components/OpportunityForm'
import { OPPORTUNITY_TYPES_COLORS, OPPORTUNITY_TYPES } from "./model/opportunity";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opportunities: [],
      loading: true,
      openLoginModal: false,
      openDialog: false,
      logged: false
    }
    onValueChange(opportunities => {
      this.setState({
        opportunities,
        loading: false
      })
    })
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ logged: !!user })
      });
    })
  }

  openFormDialog() {
    this.setState({ openDialog: true })
  }

  closeFormDialog() {
    this.setState({ openDialog: false })
  }

  render() {
    return (<div>
      <Header/>
      <div className="BaseContainer">
        <ul className="OpportunitiesLegend">
          <li>
            <div style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[OPPORTUNITY_TYPES.JOB]}} className="LegendCircle"></div>
            Vaga de emprego
          </li>
          <li>
            <div style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[OPPORTUNITY_TYPES.HOME]}} className="LegendCircle"></div>
            Oferta de moradia
          </li>
        </ul>
        <Grid container>

          { this.state.loading ? <Grid item xs={ 12 } style={ {
            display: 'flex',
            justifyContent: 'center'
          } }><Spinner
            style={ {
              height: 62,
              width: 62
            } } name="circle" color="green"/></Grid> : null }
          { this.state.opportunities.length === 0 && !this.state.loading ?
            <h1>Nenhuma oportunidade no momento</h1> : null }
          { this.state.opportunities.map((opp, index) => (<Grid key={ index } item md={ 3 } sm={ 6 } xs={ 12 }>
            <OpportunityCard { ...opp }/>
          </Grid>)) }

        </Grid>
        { this.state.logged ? (<Button onClick={ () => this.openFormDialog() } fab style={ {
          position: 'fixed',
          right: 32,
          bottom: 32
        } }
                                       color="primary">
          <AddIcon/>
        </Button>) : null }

        <OpportunityForm open={ this.state.openDialog } onClose={ () => this.closeFormDialog() }/>
      </div>
    </div>);
  }
}

export default App;
