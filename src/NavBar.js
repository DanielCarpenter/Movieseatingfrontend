import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Auth from './Auth'
class NavBar extends React.Component {
    
    render() { return (
        <div>
            <AppBar position="static">
                <Grid container justify='space-between'>
                    <Grid item>
                    <Typography variant="h4" color="inherit">
                            {this.props.message}
                    </Typography>
                    </Grid>
                    <Grid item>
                    {/* left as a conditional for when the navbar becomes global */}
                    {Auth.isAuthenticated ? (<button onClick={() => Auth.logout(() => {
                  this.props.history.push("/")
              })} >
                    Logout</button>) : null}
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
    }
}
export default NavBar;