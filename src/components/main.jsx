import React from 'react';
import '../App.css';
// import LoggedOutModal from './LoggedOutModal';


//Import Components 
// import ListMessages from './ListMessages';
// import Profile from './Profile.jsx';
// import Post from './Post.jsx';
import Header from './header.jsx';
import MainSlider from './slider.jsx';
import PopGames from './popGames.jsx';
import MMNavbar from './MapMode/MM-navbar';


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
                <MMNavbar />
                <MainSlider />
                <PopGames />
            </React.Fragment>
        );
    };
};



//Exporting
export default Main;