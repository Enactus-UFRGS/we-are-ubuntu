import React, { Component } from 'react'
import { push } from 'react-router-redux'
import Modal from 'material-ui/Modal'
import { connect } from 'react-redux'
import Card, { CardContent, CardHeader, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { OPPORTUNITY_TYPES_COLORS } from "../model/opportunity";
import Button from 'material-ui/Button'
import { getAllOpportunities } from '../actions/opportunities'

class OpportunityDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      opportunity: {}
    }
  }

  componentWillMount(){
    this.props.getAllOpportunities()
    const urlParams = this.props.match.params
    const opportunity = this.props.opportunities.find(({id}) => id === urlParams.id )
    this.setState({ opportunity })
  }

  render(){
    const { title, description, type } = this.state.opportunity
    return (
      <Modal open={true} onClose={() => this.props.push("/")} className="ModalBase" >
        <Card style={{ width: '100%', height: '100%', maxHeight: '90vh' }}>
          <CardHeader classes={{title: 'OpportunityCardHeader'}} style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[type], maxHeight: '20vh', color: 'white'}} title={title} />
          <CardContent style={{maxHeight: '70vh', overflow: 'scroll'}}>
            <Typography type="body2">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => this.props.push("/")}>
              Fechar
            </Button>
          </CardActions>
        </Card>
      </Modal>
    )
  }
}


export default connect(store => ({
  opportunities: store.opportunities.list
}), {
  push,
  getAllOpportunities,
})(OpportunityDetail)
