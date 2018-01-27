import React, { Component } from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import green from 'material-ui/colors/green'

const OpCard = ({title, description}) => (
  <Card>
    <CardHeader style={{backgroundColor: green.A200}} title={title} />
    <CardContent>
      <Typography type="body2" style={{maxHeight: 300, overflow: 'scroll'}}>
        {description}
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
          <OpCard {...this.props}/>
        </Modal>
        <div onClick={() => this.openModal()}>
          <OpCard {...this.props}  />
        </div>
      </div>
    )
  }
}
