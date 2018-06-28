import React from 'react';
import { Slider, Slide } from 'react-materialize';
// import { Navbar, NavItem, Icon } from 'react-materialize';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class MainSlider extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Slider>
                    <Slide
                        src="../public/images/smash.jpg"
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="../public/images/StreetFighter.jpg"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    
                </Slider>
            </React.Fragment>
        );
    };
};

export default MainSlider;