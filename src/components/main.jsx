import React from 'react';
import '../App.css';
import MainSlider from './slider.jsx';
import PopGames from './popGames.jsx';
import MMNavbar from './MapMode/MM-navbar';
import { Container } from 'react-materialize';
import Footer from "./footer";
import { Route, Switch } from 'react-router-dom';
// import Header from './header.jsx';
import MMmain from './MapMode/MM-main.jsx';
import SignUp from './Forms/sign-up';
import Login from './Forms/login';
import CreatEvent from './Forms/create-event';


class Main extends React.Component {

    state = {
        logOut: false,
        profileActive: false,
        messagesActive: false,
        postActive: false,
    }

    handleLogout = () => {
        fetch("https://kwitter-api.herokuapp.com/auth/logout",
            {
                method: 'GET',
                mode: "cors",
            })
            .then(response => response.json())
            .then(data => {
                console.log("Logged out:", data);
                this.setState({ logOut: true })
            })
    }

    render() {
        return (
            <React.Fragment>
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

          </Switch>
                <MMNavbar />
                <MainSlider />
                <Container>
                    <PopGames />
                </Container>
                <Footer />
            </React.Fragment>
        );
    };
};



//Exporting
export default Main;