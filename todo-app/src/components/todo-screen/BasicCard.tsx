import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ 
        minWidth: 275 ,
        maxWidth: 400,
        margin: 5,
      }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          My tasks
        </Typography>
        <Typography variant="body2">
          Upcomming task
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          scheduled time
        </Typography>
      </CardContent>
    </Card>
  );
}
