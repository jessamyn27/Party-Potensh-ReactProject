import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, 'this is our parsed data at login');
    if(parsedResponse.data === 'login successful'){
      // this.props.history.push('/profile');
      //Directs to spotify login ,then directs to profile page
      window.location.assign('http://localhost:9000/spotify/login')
      

    } else if(parsedResponse.data === 'Password incorrect'){
      alert('Password Incorrect')
    } else if(parsedResponse.data === 'Username incorrect'){
      alert('Username Not Found. Please Register')
    }


    }
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    console.log('this is props for Login', this.props)
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        </label>
        <input type='Submit' value='Login'/>
      </form>
    </div>
    )
  };
}

export default Login;
