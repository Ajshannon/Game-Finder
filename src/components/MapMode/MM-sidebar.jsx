import React from 'react';
import { Icon, SideNav, Button, SideNavItem, Collapsible, CollapsibleItem  } from 'react-materialize';
import MMGamesList from './MM-gamesList';
import MMCollapsible from './MM-Collapsible';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class MMSideBar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <SideNav 
                    fixed
                    blue-grey darken-4
                    
                    // trigger={<Button>SIDE NAV DEMO</Button>}
                    options={{ closeOnClick: true }}
                    >
                    <SideNavItem userView
                        user={{
                        background: 'img/office.jpg',
                        image: 'img/yuna.jpg',
                        name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                        }}
                    />
                    <MMCollapsible />

                    <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                    <SideNavItem href='#!second'>Second Link</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>Subheader</SideNavItem>
                    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
                </SideNav>
            </React.Fragment>
        );
    };
};

export default MMSideBar;