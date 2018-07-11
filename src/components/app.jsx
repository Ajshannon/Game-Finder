import React, { Component } from 'react';
import '../App.css';
import Main from './main';
// import { Link } from 'react-router-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
// import Header from './header.jsx';
import MMmain from './MapMode/MM-main.jsx';
import SignUp from './Forms/sign-up';
import Login from './Forms/login';
import CreatEvent from './Forms/create-event';
import MMNavbar from './MapMode/MM-navbar.jsx'
import Container from 'react-materialize/lib/Container';


class App extends Component {
  render() {
    return (
      <React.Fragment>

            
            <Switch>
              <Route exact path="/signup" component={ SignUp } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/create-event" component={ CreatEvent } />
              <Route path="/map" component={ MMmain } />
              <Route path="/" component={ Main } />
            </Switch>


      </React.Fragment>
    );
  }
}

export default withRouter(App);