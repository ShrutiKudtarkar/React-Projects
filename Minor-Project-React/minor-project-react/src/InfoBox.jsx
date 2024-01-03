import React from 'react'
import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

function InfoBox ({ info }){

    let HOT_URL = "https://images.unsplash.com/photo-1591010746236-f0fa10edf051?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let SMOKE_URL = "https://images.unsplash.com/photo-1675702662605-57e37a8cb2c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNtb2t5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAINY_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
  return (
    <div className='InfoBox'>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80
            ? RAINY_URL
            : info.temp > 30
            ? HOT_URL
            : info.temp < 30 && info.temp >15
            ? SMOKE_URL
            : COLD_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{lineHeight: "4px"}}>
          <h2>{info.temp}&deg;C</h2>
          <h3>{info.city.charAt(0).toUpperCase() + info.city.slice(1).toLowerCase()}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} style={{fontSize: "15px", fontWeight: 'light'}}>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
         </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
  )
}

export default InfoBox