import React from 'react';
import checkboxes from './checkboxes';
import Checkbox from './Seat.jsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

class Theater extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  handleSubmit = event => {
    event.preventDefault()
    const item=event.target.name;
    const isDisabled = event.target.disabled;
    console.log(event.isChecked)
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isDisabled) }));
  }
    

  render() {
    return (
      <React.Fragment>
        <Container>
        <Grid container justify='center'>
        <Grid item>
        <form onSubmit={this.handleSubmit}>
        <Grid item><h1>SCREEN</h1></Grid>
        {
          checkboxes.map(item => (
            <Tooltip title={item.name}>
            <label key={item.key}>
              
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} disable={item.disable} />
              
            </label>
            </Tooltip>
          ))
        }
        
        <input type='submit' />
        </form>
        </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Theater;