import React, { Component } from 'react'
import Button from 'material-ui/Button'
import LoginForm from '../Authentication/LoginForm'
import SignupForm from '../Authentication/SignupForm'
import Modal from 'material-ui/Modal'
import firebase from 'firebase'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'

function logout(){
  firebase.auth().signOut()
}

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      opportunities: [],
      loading: false,
      openLoginModal: false,
      openSignupModal: false,
      user: null,
      openMenu: false,
    }
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user })
      });
    })
  }

  openLoginModal(){
    this.closeMenu()
    this.setState({ openLoginModal: true })
  }

  closeLoginModal(){
    this.setState({ openLoginModal: false })
  }

  openSignupModal(){
    this.closeMenu()
    this.setState({ openSignupModal: true })
  }

  closeSignupModal(){
    this.setState({ openSignupModal: false })
  }

  closeMenu(){
    this.setState({ openMenu: false })
  }

  openMenu(e){
    this.setState({ openMenu: true, anchor: e.currentTarget })
  }

  UserActions(){
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <IconButton
        aria-owns={this.state.openMenu ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={e => this.openMenu(e)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={this.state.anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={this.state.openMenu}
        onClose={() => this.closeMenu()}
      >
        <MenuItem onClick={() => this.openLoginModal() }>Login</MenuItem>
        <MenuItem onClick={() => this.openSignupModal() }>Cadastro</MenuItem>
      </Menu>
      <Modal open={this.state.openLoginModal} onClose={() => this.closeLoginModal()} className="ModalBase" >
        <LoginForm />
      </Modal>
      <Modal open={this.state.openSignupModal} onClose={() => this.closeSignupModal()} className="ModalBase" >
        <SignupForm />
      </Modal>
    </div>

  }

  render() {
    if(this.state.user){
      return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <b>{this.state.user.displayName || this.state.user.email}</b>
          <Button style={{height: '100%', color: 'white'}} onClick={() => logout()}>Sair</Button>
        </div>
      )
    }
    return this.UserActions()
  }
}



export default Header;
