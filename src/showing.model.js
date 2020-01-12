import react from 'react'
import { Grid, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Show extends react.Component
{
    constructor(movieTitle="default", times=["time1", "time2"]) {
        this.movie = movieTitle
        this.time=times
    }
    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Paper className={classes.button}>{this.movie}</Paper>
                        {
                            this.time.map(t => (
                            <label key={t.key}>
                                <Grid item xs>
                                    {t.time}
                                </Grid>
                            </label>
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
            
        )
    }
}
export default withStyles(useStyles)(Show)

export const shows=new Show("First Movie", ["345", "10", "12"])