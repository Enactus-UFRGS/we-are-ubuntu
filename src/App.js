import React, { Component } from 'react';
import './App.css';
import OpportunityCard from './components/OpportunityCard/OpportunityCard'
import Grid from 'material-ui/Grid'
import Spinner from 'react-spinkit'
import Header from './components/Header/Header'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import firebase from 'firebase'
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      opportunities: [],
      loading: false,
      openLoginModal: false,
      logged: false
    }
  }

  componentWillMount(){
    this.setState({ loading: true })
    fetch('https://we-are-ubuntu.firebaseio.com/opportunities.json')
      .then(response => response.json())
      .then(opportunities => this.setState({ opportunities, loading: false }))

    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ logged: !!user })
      });
    })
  }

  openFormDialog(){
    this.setState({ openDialog: true })
  }

  closeFormDialog(){
    this.setState({ openDialog: false })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="BaseContainer">
          <Grid container >

            {this.state.loading ? <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}><Spinner style={{height: 62, width: 62}} name="circle" color="green" /></Grid> : null}
            {this.state.opportunities.length === 0 && !this.state.loading ? <h1>Nenhuma oportunidade no momento</h1> : null}
            {this.state.opportunities.map((opp, index) => (
              <Grid key={index} item md={3} sm={6} xs={12}>
                <OpportunityCard {...opp}/>
              </Grid>
            ))}

          </Grid>
          { this.state.logged ?
              ( <Button onClick={() => this.openFormDialog()} fab style={{position: 'fixed', right: 32, bottom: 32}} color="primary">
                <AddIcon />
              </Button> )
            : null
          }

            <Dialog
              open={this.state.openDialog}
              onClose={() => this.closeFormDialog()}
              aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Criar oportunidade</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Insira as informações para criar a oportunidade!
              </DialogContentText>
              <TextField required autoFocus margin="dense" id="name" label="Título da oportunidade" type="text" fullWidth />
              <TextField required margin="dense" id="name" label="Descrição curta" type="text" fullWidth />
              <TextField required margin="dense" id="name" label="Descrição longa" type="text" fullWidth multiline rows="6" rowsMax="6" />

            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.closeFormDialog()} color="primary">
                Cancelar
              </Button>
              <Button raised onClick={() => this.closeFormDialog()} color="primary">
                Salvar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default App;
