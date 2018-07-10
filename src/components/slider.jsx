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
                        src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/06/Switch_SuperSmashBrosUltimate_illustration_021.png"
                        title="">

                        
                    </Slide>
                    <Slide
                        src="http://www.psu.com/media/articles/image/PS4_StreetFighterVscreenshot%5D.jpg"title=""
                        placement="center">
                        
                        
                    </Slide>
                    
                </Slider>
            </React.Fragment>
        );
    };
};

export default MainSlider;