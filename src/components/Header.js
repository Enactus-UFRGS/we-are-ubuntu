import React, { Component } from 'react';
import MUIHeader from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import UserSection from './Header/UserSection'
import green from 'material-ui/colors/green'

class Header extends Component {
  render() {
    return (
      <MUIHeader  style={{backgroundColor: green.A700, flexDirection: 'row' ,justifyContent: 'space-between'}} position="static">
        <Toolbar>
          <Typography type="title" style={{color: 'white'}} >
            We Are Ubuntu
          </Typography>
        </Toolbar>
        <UserSection />
      </MUIHeader>
    );
  }
}

export default Header;