import React from 'react';
import '../App.css';
import MainSlider from './slider.jsx';
import PopGames from './popGames.jsx';
import MMNavbar from './MapMode/MM-navbar';
import { Container, Card, Button } from 'react-materialize';
import Footer from "./footer";
import { Route, Switch, Link } from 'react-router-dom';
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
                                                <MMNavbar id="MMnavbar2" />
                                                <Container>
                                                  <SignUp />
                                                </Container>
                                              </div>
                                              } />
            <Route exact path="/login" component={props => 
                                                  <div>
                                                    <MMNavbar id="MMnavbar2" />
                                                    <Container>
                                                      <Login />
                                                    </Container>
                                                  </div>
                                                  } />
            <Route exact path="/create-event" component={props => 
                                                          <div>
                                                            <MMNavbar id="MMnavbar2" />
                                                            <Container>
                                                            <CreatEvent />
                                                            </Container>
                                                          </div>
                                                        } />

            <Route path="/map" component={props => <MMmain />} />

          </Switch>
                <MMNavbar id="MMnavbar2" />
                <MainSlider />
                <Card id="promoCard1" ClassName='white-text' actions={[
                    <div>
                        <h3 className="whiteText">
                            Looking for game events near you?
                        </h3>    

                    </div>]}>
                </Card>
                <Container>
                    <PopGames />
                </Container>
                <Card id="promoCard2" className='white-text' actions={[
                       
                        <Link to='/signup' className="whiteText"><Button className="">Sign up here!</Button></Link>
                    ]}>
                </Card>
                     
                <Footer />
            </React.Fragment>
        );
    };
};



//Exporting
export default Main;