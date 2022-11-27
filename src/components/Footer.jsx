import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{padding: '7px 0px', textAlign: 'center', mt: '30px'}}>
        <Typography variant="body1">
          Created by @HafizMuhammmadRayyan
        </Typography>
    </AppBar>
  )
}

export default Footer
