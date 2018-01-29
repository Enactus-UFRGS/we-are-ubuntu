import React  from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import green from 'material-ui/colors/green'


export default function OpportunityCard({ title, description }){
  return (
    <Card>
      <CardHeader style={{backgroundColor: green.A200}} title={title} />
      <CardContent>
        <Typography type="body2" style={{maxHeight: 300, overflow: 'scroll'}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
