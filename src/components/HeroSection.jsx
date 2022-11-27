import React from 'react'
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import manImg from '../assets/manImg.png';



const HeroSection = () => {
    return (
        <Grid container mt={7} alignItems='center' spacing={2} >
            <Grid item xs={12} sm={6} alignItems='center' order={{xs:2, sm:1}}>
                <Typography variant="h3" mb={1} >
                    HR Graphics
                </Typography>
                <Typography variant="h6" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora itaque quaerat vero ullam incidunt numquam laborum nostrum totam quo!
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ borderRadius: "15px", marginTop: '20px', padding: '8px 30px' }}>
                    Contact Us
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} justifyContent="center" order={{xs:1, sm:2}}>
                <Box component="img" src={manImg} sx={{ position: 'relative', width: '100%' }} />
            </Grid>
        </Grid>
    )
}

export default HeroSection