import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(0),
    textAlign: 'center',
	color: theme.palette.text.secondary,
	justify: 'left'
  },
});

class AutoGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs>
            <Paper className={classes.button}>Movie</Paper>
          </Grid>
          <Grid item xs>
			<Button className={classes.button} 
            component={RouterLink} to="/listings/showing"
			color="default" variant="contained">time1</Button>
          </Grid>
          <Grid item xs>
			  <Button className={classes.button}
			  component={RouterLink} to="/listings/showing"
			  color="default" variant="contained">time2</Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <Paper className={classes.button}>Movie</Paper>
          </Grid>
          <Grid item xs>
			  <Button className={classes.button}
			  component={RouterLink} to="/listings/showing"
			  color="default" variant="contained" spacing={0}>time1</Button>
          </Grid>
          <Grid item xs>
			  <Button className={classes.button}
			  component={RouterLink} to="/listings/showing"
			  color="default" variant="contained">time2</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(AutoGrid)