import React, { Component } from 'react'
import { push } from 'react-router-redux'
import Modal from 'material-ui/Modal'
import { connect } from 'react-redux'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import LaunchIcon from 'material-ui-icons/Launch'
import green from 'material-ui/colors/green'
import { login } from '../actions/auth'

class Signin extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const title = <div style={{display: 'flex', alignItems: 'center'}}><LaunchIcon /> Login</div>
    return (
      <Modal open={true} onClose={() => this.props.push("/")} className="ModalBase" >
        <Card style={{padding: 20}}>
          <CardHeader title={title} />
          <CardContent>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <TextField margin="dense" fullWidth style={{marginBottom: 20}} value={this.state.email} onChange={e => this.setState({ email: e.target.value })} label="email" type="email"/>
              <TextField margin="dense" fullWidth style={{marginBottom: 20}} value={this.state.password} onChange={e => this.setState({ password: e.target.value })} label="senha" type="password"/>
              <Button raised onClick={() => this.props.login(this.state.email, this.state.password).then(() => this.props.push("/"))} style={{backgroundColor: green.A400}} >Entrar</Button>
            </form>
          </CardContent>
        </Card>
      </Modal>
    )
  }
}


export default connect(null, {
  push,
  login,
})(Signin)
