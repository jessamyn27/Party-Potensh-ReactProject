import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import './App.css';
import About from './About';
import Edit from './Edit';
import Parties from './Parties';
import CreateParty from './CreateParty';
import Register from './Register';
import Nav from './Nav';
import Maincontainer from './Maincontainer';


class App extends Component {
  render() {
    return (
      <main>
      <Nav/>
      <Maincontainer/>

      <Switch>
        <Route exact path='/' component={Login}/>
        {/* <Route exact path='/profile' component={Profile}/> */}
      </Switch>
    </main>

        /* <Login />
        <About />
        <Edit />
<Parties />
        <CreateParty />
        <Register />
        <Profile />
        <CreateParty />
 */


    );
  }
}

export default App;
