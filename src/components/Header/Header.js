import React, { Component } from 'react';
import MUIHeader from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import UserSection from './UserSection'

class Header extends Component {
  render() {
    return (
      <MUIHeader  style={{backgroundColor: '#61bf0f', flexDirection: 'row' ,justifyContent: 'space-between'}} position="static">
        <Toolbar>
          <Typography variant="title" style={{fontFamily: 'Abril Fatface', color: 'white'}} >
            We Are Ubuntu
          </Typography>
        </Toolbar>
        <UserSection />
      </MUIHeader>
    );
  }
}

export default Header;
