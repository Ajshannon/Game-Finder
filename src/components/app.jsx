import React, { Component } from 'react';
import '../App.css';
import Main from './main';
import Footer from "./footer";
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MapContainer from './MapContainer.jsx'

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="ui container">

          <div className="App-header">
            <div className="App-title">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> where's smash? </h1></Link>
            </div>
          </div>

          <Switch>
            {/* <Route exact path="/" component={props => <Auth />} /> */}
            <Route path="/main" component={props => <Main />} />
          </Switch>

        <MapContainer />
          <Footer />
        </div>



      </React.Fragment>
    );
  }
}

export default App;