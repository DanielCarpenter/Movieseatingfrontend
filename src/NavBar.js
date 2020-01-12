import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" alignItems="center">
                <Toolbar>
                    <Typography variant="title" color="inherit" component="h4">
                            Movie Seat Picking Powered by React and Material UI    
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;