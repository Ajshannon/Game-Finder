import React from 'react';
import '../App.css';
import { Switch, Link } from 'react-router-dom';

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
                {/* <LoggedOutModal logOut={this.state.logOut} /> */}
                <div className="ui secondary pointing menu">
                    <Link   to="/main/profile">Profile</Link>
                    <Link   to="/main/events">Events</Link>
                    <Link   to="/main/post">Post</Link><div className="right menu">
                        <a onClick={this.handleLogout}>Logout</a>
                    </div>
                </div>

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