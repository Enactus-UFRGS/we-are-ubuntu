import React from 'react';
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

export default function(){
  return (
    <Card>
      <CardHeader style={{backgroundColor: "#61BF0F"}} title="Titulo da vaga" />
      <CardContent>
        <Typography type="body2">
          Descricao da vaga
        </Typography>
      </CardContent>
    </Card>
  )
}
