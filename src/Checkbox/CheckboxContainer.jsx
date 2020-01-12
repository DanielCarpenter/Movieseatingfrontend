import React from 'react';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox.jsx';
import Auth from '../Auth'

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
        <h1>SCREEN</h1>
        <form onSubmit={this.handleSubmit}>
        {
          checkboxes.map(item => (
            <label key={item.key}>
              {item.name}
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} disable={item.disable} />
            </label>
          ))
        }
        <input type='submit' />
        </form>
        <button onClick={() => Auth.logout(() => {
                  this.props.history.push("/");
              })} >
              Logout</button>
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;