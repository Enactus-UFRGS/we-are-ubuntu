import React, { Component } from 'react'
import Button from 'material-ui/Button'
import firebase from 'firebase'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'
import { ListItemIcon, ListItemText } from 'material-ui/List'
import LaunchIcon from 'material-ui-icons/Launch'
import PersonAdd from 'material-ui-icons/PersonAdd'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

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
        <MenuItem onClick={() => this.props.push("/login") }>
          <ListItemIcon>
            <LaunchIcon />
          </ListItemIcon>
          <ListItemText inset primary="Entrar" />
        </MenuItem>
        <MenuItem onClick={() => this.props.push("/cadastro") }>
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          <ListItemText inset primary="Cadastrar" />
        </MenuItem>
      </Menu>
    </div>

  }

  render() {
    if(this.state.user){
      return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button style={{height: '100%', color: 'white'}} onClick={() => logout()}>Sair</Button>
        </div>
      )
    }
    return this.UserActions()
  }
}



export default connect(null, {
  push
})(Header);
