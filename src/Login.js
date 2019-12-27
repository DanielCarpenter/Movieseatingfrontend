import React from 'react'

class Login extends React.Component {
    state = {
        username: "",
        password: "",
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
            <h1>Login</h1>
    
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
    
            <input type='submit'/>
          </form>
        )
      }
    }
    
    
    export default Login