import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Spinner from 'react-spinkit'
import '../App.css';
import OpportunityCard from '../components/Opportunity/Card'
import Header from '../components/Header/Header'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import firebase from 'firebase'
import { OPPORTUNITY_TYPES_COLORS, OPPORTUNITY_TYPES } from "../model/opportunity";
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { getAllOpportunities } from '../actions/opportunities'
import Onboarding from "../components/Onboarding";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.props.getAllOpportunities()
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ logged: !!user })
      });
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="BaseContainer">
          <Onboarding />
          <ul className="OpportunitiesLegend">
            <li>
              <div style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[OPPORTUNITY_TYPES.JOB]}} className="LegendCircle" />
              Vaga de emprego
            </li>
            <li>
              <div style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[OPPORTUNITY_TYPES.HOME]}} className="LegendCircle" />
              Oferta de moradia
            </li>
            <li>
              <div style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[OPPORTUNITY_TYPES.EDUCATION]}} className="LegendCircle" />
              Educação
            </li>
          </ul>
          <Grid container spacing={16}>
            { this.props.loading && this.props.opportunities.length === 0 ? <Grid item xs={ 12 } style={ {
              display: 'flex',
              justifyContent: 'center'
            } }><Spinner
              style={ {
                height: 62,
                width: 62
              } } name="circle" color="green"/></Grid> : null }
            { this.props.opportunities.length === 0 && !this.props.loading ?
              <h1>Nenhuma oportunidade no momento</h1> : null }
            { this.props.opportunities.map((opp, index) => (<Grid key={ index } item md={ 3 } sm={ 6 } xs={ 12 }>
              <OpportunityCard { ...opp }/>
            </Grid>)) }
          </Grid>
          { this.state.logged ? (
            <Button onClick={ () => this.props.push("/criar-oportunidade") } variant="fab" style={ {
              position: 'fixed',
              right: 32,
              bottom: 32
            } } color="primary">
            <AddIcon/>
          </Button>) : null }
        </div>
      </div>
  );
  }
}

export default connect(store => ({
  opportunities: store.opportunities.list,
  loading: store.opportunities.status.loading,
}), {
  push,
  getAllOpportunities,
})(App);
