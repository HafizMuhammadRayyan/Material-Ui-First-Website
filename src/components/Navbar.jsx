import React from 'react'
import {
    AppBar, Toolbar,
    Typography, Button
} from '@mui/material'
// import LoginIcon from '@mui/icons-material/Login';
import CallIcon from '@mui/icons-material/Call';


const Navbar = () => {
    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" flexGrow={1}>
                        HR Graphics
                    </Typography>
                    <Button variant="button" color="inherit" startIcon={<CallIcon />}>
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
