import React, {Component} from 'react';

class Signup extends Component {
    state = {
      username: "",
      password: "",
      firstName: "",
      lastName: ""
    }
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault()
      //this.props.userPostFetch(this.state)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up For An Account</h1>
  
          <label>Username</label>
          <input
            name='username'
            placeholder='email@example.com'
            value={this.state.username}
            onChange={this.handleChange}
            /><br/>
  
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>
  
          <label>First Name</label>
            <input
              name='firstName'
              placeholder='First Name'
              value={this.state.firstName}
              onChange={this.handleChange}
              /><br/>
  
            <label>Last Name</label>
            <input
              name='lastName'
              placeholder='Last Name'
              value={this.state.lastName}
              onChange={this.handleChange}
              /><br/>
  
          <input type='submit'/>
        </form>
      )
    }
  }
  
  
  export default Signup