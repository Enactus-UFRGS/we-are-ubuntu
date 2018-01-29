import React  from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import green from 'material-ui/colors/green'


export default function OpportunityCard({ title, description }){
  return (
    <Card style={{ width: '100%', height: '100%', maxHeight: '90vh' }}>
      <CardHeader style={{backgroundColor: green.A400, maxHeight: '20vh'}} title={title} />
      <CardContent style={{maxHeight: '70vh', overflow: 'scroll'}}>
        <Typography type="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
