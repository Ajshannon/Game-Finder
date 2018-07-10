import React, { Component } from 'react';
import '../App.css';
import Main from './main';
import Footer from "./footer";
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
        <div>
          <Switch>
            <Route exact path="/signup" component={props => 
                                              <div>
                                                <MMNavbar />
                                                <Container>
                                                  <SignUp />
                                                </Container>
                                              </div>
                                              } />
            <Route exact path="/login" component={props => 
                                                  <div>
                                                    <MMNavbar />
                                                    <Container>
                                                      <Login />
                                                    </Container>
                                                  </div>
                                                  } />
            <Route exact path="/create-event" component={props => 
                                                          <div>
                                                            <MMNavbar />
                                                            <Container>
                                                            <CreatEvent />
                                                            </Container>
                                                          </div>
                                                        } />

            <Route path="/map" component={props => <MMmain />} />
            <Route path="/" component={props => <Main />} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);