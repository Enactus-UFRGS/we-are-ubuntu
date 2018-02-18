import React, { Component } from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { OPPORTUNITY_TYPES_COLORS } from "../../model/opportunity";
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class OpportunityCard extends Component {
  render(){
    const {title, shortDescription, type} = this.props
    return (
      <div>
        <div onClick={() => this.props.push(`/oportunidade/${this.props.id}`)}>
          <Card className="Clickable OpportunityCard">
            <CardHeader classes={{title: 'OpportunityCardHeader'}} style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[type]}} title={title} />
            <CardContent>
              <Typography type="body2">
                {shortDescription}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  push
})(OpportunityCard)
