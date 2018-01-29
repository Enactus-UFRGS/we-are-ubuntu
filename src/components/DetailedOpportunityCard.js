import React  from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import green from 'material-ui/colors/green'


export default function OpportunityCard({ title, description }){
  return (
    <Card style={{ width: '100%', height: '100%', maxHeight: '50vh' }}>
      <CardHeader style={{backgroundColor: green.A400}} title={title} />
      <CardContent >
        <Typography type="body2" style={{overflow: 'scroll'}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
