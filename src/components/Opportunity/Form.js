import React, { Component } from 'react';
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';
import { create, OPPORTUNITY_TYPES } from '../../model/opportunity'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newOpportunity: {},
      errors: {},
    }
  }

  updateUpportunity(key, value) {
    this.setState({
      newOpportunity: {
        ...this.state.newOpportunity,
        [key]: value,
      }
    })
  }

  validOpportunity() {
    const { description, shortDescription, title, type } = this.state.newOpportunity
    let errors = {}
    if(!description) {
      errors.description = true
    }
    if(!shortDescription) {
      errors.shortDescription = true
    }
    if(!title) {
      errors.title = true
    }
    if(!type) {
      errors.type = true
    }
    this.setState({ errors })
    return Object.keys(errors).length === 0
  }

  createOpportunity() {
    if(this.validOpportunity()) {
      create(this.state.newOpportunity)
      this.props.onClose()
    }
  }

  render() {
    const { errors } = this.state
    return (<Dialog
      open={ this.props.open }
      onClose={ () => this.props.onClose() }
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Criar oportunidade</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insira as informações para criar a oportunidade!
        </DialogContentText>
        <FormControl required error={errors.type} component="fieldset">
          <FormLabel component="legend">Que oportunidade quer oferecer?</FormLabel>
          <RadioGroup
            aria-label="Tipo de Oportunidade"
            value={this.state.newOpportunity.type}
            onChange={e => this.updateUpportunity('type', e.target.value)}
          >
            <FormControlLabel value={OPPORTUNITY_TYPES.JOB} control={<Radio />} label="Vaga de Emprego" />
            <FormControlLabel value={OPPORTUNITY_TYPES.HOME} control={<Radio />} label="Moradia/Dividir apartamento" />
            <FormControlLabel value={OPPORTUNITY_TYPES.EDUCATION} control={<Radio />} label="Educação" />
          </RadioGroup>
        </FormControl>
        <TextField error={ errors.title } required onChange={ e => this.updateUpportunity('title', e.target.value) }
                   autoFocus
                   margin="dense" label="Título da oportunidade" type="text" fullWidth/>
        <TextField error={ errors.shortDescription } required
                   onChange={ e => this.updateUpportunity('shortDescription', e.target.value) }
                   margin="dense" label="Descrição curta" type="text" fullWidth/>
        <TextField error={ errors.description } required
                   onChange={ e => this.updateUpportunity('description', e.target.value) }
                   margin="dense" label="Descrição longa" type="text" fullWidth multiline rows="6"
                   rowsMax="6"/>

      </DialogContent>
      <DialogActions>
        <Button onClick={ () => this.props.onClose() } color="primary">
          Cancelar
        </Button>
        <Button raised onClick={ () => this.createOpportunity() } color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>)
  }
}

export default Form
