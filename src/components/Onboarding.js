import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Button from "material-ui/es/Button/Button";
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
class Onboarding extends Component {
    constructor(props){
        super(props)
        this.state = {
            userType: null
        }
    }


    render(){
        let content = null;
        if(this.state.userType == null){
            content = (
                <div className="Onboarding__UserTypeIdentification">
                    <div className="UserTypeQuestion">
                        <Typography variant="subheading">
                            Você é um(a) imigrante?
                        </Typography>
                        <div className="UserTypeQuestion__Options">
                            <Button onClick={() => this.setState({ userType: 'immigrant'})} variant="raised" color="primary">
                                Sim
                            </Button>
                            <Button onClick={() => this.setState({ userType: 'normal'})}>
                                Não
                            </Button>
                        </div>
                    </div>
                </div>
            )
        }

        if(this.state.userType === 'immigrant') {
            content = (
                <div className="Onboarding__ImmigrantUser" >
                    <div>
                        <Typography variant="title">
                            Que bom te ter aqui!
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2">
                            Para melhorar ainda mais a sua experiência, clique no botão abaixo e preencha seu currículo para que possamos encontrar melhores oportunidades para você!
                        </Typography>
                    </div>
                    <Button className="OnboardingButton" target href="https://goo.gl/forms/QiagdYAOP5fWxca83" variant="raised" color="primary">
                        Cadastrar meu currículo
                    </Button>
                </div>
            )

        }

        if(this.state.userType === 'normal') {
            content = (
                <div className="Onboarding__NormalUser" >
                    <div>
                        <Typography variant="title">
                            Que bom que você veio nos conhecer!
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2">
                            Se estiver interessado em ajudar, clique no botão abaixo e cadastre uma oportunidade, ou mande-nos um e-mail em <a href="mailto:wa.ubuntu@gmail.com">wa.ubuntu@gmail.com</a>!
                        </Typography>
                    </div>
                    <Button onClick={ () => this.props.push("/criar-oportunidade") } disabled={!this.props.userIsLogged} className="OnboardingButton" variant="raised" color="primary">
                        Cadastrar uma oportunidade
                    </Button>
                    <Typography variant="caption" color="error">
                        {this.props.userIsLogged === false ? 'Você precista estar logado para cadastrar uma oportunidade.' : ''}
                    </Typography>
                </div>
            )
        }

        return (
            <Card className="Onboarding">
                <CardHeader className="Onboarding__Title" title="Seja bem-vindo(a) a plataforma do We Are Ubuntu!" />
                <CardContent>
                    {content}
                </CardContent>
            </Card>
        )
    }
}

export default connect(store => ({
    userIsLogged: store.auth
}), {
    push
})(Onboarding)
