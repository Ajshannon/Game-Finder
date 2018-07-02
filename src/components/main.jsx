import React from 'react';
import '../App.css';
// import LoggedOutModal from './LoggedOutModal';
import { Switch, Link } from 'react-router-dom';

//Import Components 
// import ListMessages from './ListMessages';
// import Profile from './Profile.jsx';
// import Post from './Post.jsx';
import Header from './header.jsx';
import MainSlider from './slider.jsx';
import PopGames from './popGames.jsx';
import Nav1 from './nav1.jsx';

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
                <Header />
                <MainSlider />
                <Nav1 />
                    <Switch>
                        {/* <Route path="/main/profile" render={props => <Profile />} /> */}
                        {/* <Route path="/main/messages" render={props => <ListMessages />} /> */}
                        {/* <Route path="/main/post" render={props => <Post />} /> */}
                    </Switch>
                <PopGames />
            </React.Fragment>
        );
    };
};



//Exporting
export default Main;