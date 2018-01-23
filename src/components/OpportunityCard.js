import React from 'react';
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

export default function({title, description}){
  return (
    <Card>
      <CardHeader style={{backgroundColor: "#61BF0F"}} title={title} />
      <CardContent>
        <Typography type="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
