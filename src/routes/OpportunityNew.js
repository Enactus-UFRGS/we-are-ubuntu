import React, { Component } from 'react'
import Base from './base'
import { find } from '../model/opportunity'
import { push } from 'react-router-redux'
import Modal from 'material-ui/Modal'
import { connect } from 'react-redux'
import Card, { CardContent, CardHeader, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { OPPORTUNITY_TYPES_COLORS } from "../model/opportunity";
import Button from 'material-ui/Button'
import OpportunityForm from '../components/OpportunityForm'

class OpportunityNew extends Component {
  render(){
    return (
      <Base>
        <Modal open={true} onClose={() => this.props.push("/")} className="ModalBase" >
          <OpportunityForm open={true} onClose={() => this.props.push("/")}/>
        </Modal>
      </Base>
    )
  }
}


export default connect(null, {
  push
})(OpportunityNew)
