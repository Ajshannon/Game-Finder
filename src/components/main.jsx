import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import LoggedOutModal from './LoggedOutModal';

//Import Components 
// import ListMessages from './ListMessages';
// import Profile from './Profile.jsx';
// import Post from './Post.jsx';
import Header from './header.jsx';




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
        const currentLocation = window.location.href
        const profile = "http://localhost:3000/main/profile"
        const messages = "http://localhost:3000/main/messages"
        const post = "http://localhost:3000/main/post"
        return (
            <React.Fragment>
                {/* <LoggedOutModal logOut={this.state.logOut} /> */}
                
                <Header>

                </Header>

                <Switch>
                    {/* <Route path="/main/profile" render={props => <Profile />} /> */}
                    {/* <Route path="/main/messages" render={props => <ListMessages />} /> */}
                    {/* <Route path="/main/post" render={props => <Post />} /> */}
                </Switch>
            </React.Fragment>
        );
    };
};



//Exporting
export default Main;