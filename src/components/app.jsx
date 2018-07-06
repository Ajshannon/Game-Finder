import React, { Component } from 'react';
import '../App.css';
import Main from './main';
import Footer from "./footer";
// import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
// import Header from './header.jsx';
import MMmain from './MapMode/MM-main.jsx';
import SignUp from './Forms/sign-up';
import Login from './Forms/login';
import CreatEvent from './Forms/create-event';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Switch>
            <Route exact path="/" component={props => <SignUp />} />
            <Route exact path="/login" component={props => <Login />} />
            <Route exact path="/create-event" component={props => <CreatEvent />} />
            <Route path="/map" component={props => <MMmain />} />
            <Route path="/main" component={props => <Main />} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;