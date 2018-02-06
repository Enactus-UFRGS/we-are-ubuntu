import React, { Component } from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import DetailedOpportunityCard from './DetailedOpportunityCard'
import { OPPORTUNITY_TYPES_COLORS } from "../../model/opportunity";

const OpCard = ({title, shortDescription, type}) => (
  <Card className="Clickable OpportunityCard">
    <CardHeader classes={{title: 'OpportunityCardHeader'}} style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[type]}} title={title} />
    <CardContent>
      <Typography type="body2">
        {shortDescription}
      </Typography>
    </CardContent>
  </Card>
)

export default class OpportunityCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }

  closeModal(){
    this.setState({showModal: false})
  }

  openModal(){
    this.setState({showModal: true})
  }

  render(){
    return (
      <div>
        <Modal open={this.state.showModal} onClose={() => this.closeModal()} className="ModalBase" >
          <DetailedOpportunityCard {...this.props}/>
        </Modal>
        <div onClick={() => this.openModal()}>
          <OpCard {...this.props}  />
        </div>
      </div>
    )
  }
}
