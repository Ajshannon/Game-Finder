import React, { Component } from 'react';
import '../App.css';
import Main from './main';
import Footer from "./footer";
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MapContainer from './MapContainer.jsx'
import Header from './header.jsx';
import MMmain from './MapMode/MM-main.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div>

          
          <Switch>
            {/* <Route exact path="/" component={props => <Auth />} /> */}
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