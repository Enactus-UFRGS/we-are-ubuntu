import React  from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { OPPORTUNITY_TYPES_COLORS } from "../../model/opportunity";


export default function OpportunityCard({ title, description, type }){
  return (
    <Card style={{ width: '100%', height: '100%', maxHeight: '90vh' }}>
      <CardHeader classes={{title: 'OpportunityCardHeader'}} style={{backgroundColor: OPPORTUNITY_TYPES_COLORS[type], maxHeight: '20vh', color: 'white'}} title={title} />
      <CardContent style={{maxHeight: '70vh', overflow: 'scroll'}}>
        <Typography type="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
