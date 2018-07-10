import React from 'react';
import { SideNav, Button, SideNavItem, } from 'react-materialize';
// import MMGamesList from './MM-gamesList';
import MMCollapsible from './MM-Collapsible';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class MMSideBar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <SideNav 
                    fixed
                    
                    trigger={<Button>SIDE NAV DEMO</Button>}
                    options={{ closeOnClick: false }}
                    >
                    {/* { <SideNavItem userView
                        user={{
                        background: 'img/office.jpg',
                        image: 'img/yuna.jpg',
                        name: 'Jack. Avery and Kooper',
                        email: 'jdandturk@gmail.com'
                        }}
                    /> } */}
                    <div id="loginBar">
                        
                    </div>
                    <MMCollapsible />

                    {/* <SideNavItem href='#!icon' icon='cloud'> First Link With Icon</SideNavItem>
                    <SideNavItem href='#!second'>Second Link</SideNavItem> */}
                    {/* <SideNavItem divider /> */}
                    {/* <SideNavItem subheader>Subheader</SideNavItem> */}

                </SideNav>
            </React.Fragment>
        );
    };
};

export default MMSideBar;