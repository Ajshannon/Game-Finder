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

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div>
          <Switch>
            <Route exact path="/" component={props => <SignUp />} />
            <Route exact path="/login" component={props => <Login />} />
            <Route path="/map" component={props => <MMmain />} />
            <Route path="/main" component={props => <Main />} />
          </Switch>

          <MapContainer markers={[
            {
              title: `Smash Brothers Friday's Final Destination at Guardian Games`,
              lat: 39.683099,
              lng: -86.148345,
              game: 'Super Smash Bros. for Wii U',
              day: 'Fridays',
              time: '7:00pm',
              link: 'https://www.facebook.com/events/1410766155717859/'
            },
            {
              title: 'Salty Sundays at Boss Battle Games',
              lat: 39.779038,
              lng: -85.985527,
              game: 'Super Smash Bros. for Wii U',
              day: 'Sundays',
              time: '4:00pm',
              link: 'https://www.facebook.com/pg/bossbattlegamesindy/events/'
            }
          ]}/>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;