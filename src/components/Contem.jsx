
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', pr: 4 }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent  sx={{ minWidth: 275, width: 600 ,height: 460, mt: 5}}>

      <Typography sx={{ fontSize: 14, fontWeight: 200, }} color="text.secondary" gutterBottom>
        SNEAKER     COMPANY
      </Typography>

      <Typography variant="h2" component="div" sx={{ fontWeight: '600', mb: 7}}>
      Fall Limited Edition Sneaker
      </Typography>

      <Typography sx={{ mb: 1.5, pr: 3, fontSize: 18, fontWeight: 400, mb: 4 }} color="text.secondary" >
      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.
      </Typography>

       <Typography variant="h3"  sx={{ fontWeight: '600', mb: 7}}>
        $125.00  
        <Typography variant='span' sx={{ color: 'white', background: 'black', ml: 5, fontSize: 30, p: 1, borderRadius: 2.5}}>
        50%
        </Typography> 
        <Typography variant='h6' sx={{p: 2, color: 'gray', textDecoration: 'line-through', fontWeight: 300}}>
        $250.00
      </Typography>
      </Typography> 


    </CardContent>
    <CardActions >
    <ButtonGroup variant="contained" aria-label="Basic button group" sx={{height: 50, width: 200, border: 'white', fontSize: 30}}>
      <Button sx={{color: 'orange', width: 1/3, background: 'white', fontSize: 30}}>+</Button>
      <Button sx={{color: 'black', width: 1/3, background: 'white', fontSize: 20}}>0</Button>
      <Button sx={{color: 'orange', width: 1/3, background: 'white', fontSize: 30}}>-</Button>
    </ButtonGroup>
       <Button 
       variant="contained" 
       sx={{background: 'orange', color:'black', width: 350, height: 50}}
       startIcon={ <ShoppingCartOutlinedIcon />}>
        Add to Cart
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, width: 600 ,height: 630, px: 10}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}



