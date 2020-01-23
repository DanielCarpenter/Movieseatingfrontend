import React from 'react';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox.jsx';
import Auth from '../Auth'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

class CheckboxContainer extends React.Component {
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
  
  }
    

  render() {
    return (
      <React.Fragment>
        <Container>
        <Grid justify='center'>
        <h1>SCREEN</h1>
        </Grid>
        <form onSubmit={this.handleSubmit}>
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
        </Container>
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;