import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import Main from './main';
// import Auth from './Auth';
import Footer from "./footer";
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
        <React.Fragment>

        <div className="container">

          <div className="App-header">
            <div className="">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> Event Finder </h1></Link>
            </div>
          </div>

          <Switch>
            {/* <Route exact path="/" component={props => <Auth />} /> */}
            <Route path="/main" component={props => <Main />} />
          </Switch>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;