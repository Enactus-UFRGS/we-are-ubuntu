import React, { Component } from 'react'
import { push } from 'react-router-redux'
import Modal from 'material-ui/Modal'
import { connect } from 'react-redux'
import Form from '../components/Opportunity/Form'

class OpportunityNew extends Component {
  render(){
    return (
      <Modal open={true} onClose={() => this.props.push("/")} className="ModalBase" >
        <Form open={true} onClose={() => this.props.push("/")}/>
      </Modal>
    )
  }
}


export default connect(null, {
  push
})(OpportunityNew)
