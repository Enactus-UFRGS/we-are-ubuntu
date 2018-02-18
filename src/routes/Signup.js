import React, { Component } from 'react'
import Base from './base'
import { push } from 'react-router-redux'
import Modal from 'material-ui/Modal'
import { connect } from 'react-redux'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import firebase from 'firebase'
import PersonAdd from 'material-ui-icons/PersonAdd'
import green from 'material-ui/colors/green'

function signup(email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error)
    })
}

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const title = <div style={{display: 'flex', alignItems: 'center'}}><PersonAdd /> Cadastro</div>

    return (
      <Base>
        <Modal open={true} onClose={() => this.props.push("/")} className="ModalBase" >
          <Card style={{padding: 20}}>
            <CardHeader title={title} />
            <CardContent>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <TextField margin="dense" fullWidth style={{marginBottom: 20}} value={this.state.email} onChange={e => this.setState({ email: e.target.value })} label="email" type="email"/>
                <TextField margin="dense" fullWidth style={{marginBottom: 20}} value={this.state.password} onChange={e => this.setState({ password: e.target.value })} label="senha" type="password"/>
                <Button raised onClick={() => signup(this.state.email, this.state.password)} style={{backgroundColor: green.A400}}>Cadastrar-se</Button>
              </div>
            </CardContent>
          </Card>
        </Modal>
      </Base>
    )
  }
}


export default connect(null, {
  push
})(Signup)
