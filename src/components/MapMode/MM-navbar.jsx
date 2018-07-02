import React from 'react';
import { Navbar, NavItem, Icon, Row, Button, Col } from 'react-materialize';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class MMNavbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar brand='Map Mode' right>
                    <NavItem href='/'>Login</NavItem>
                    <NavItem href='/'>Sign up</NavItem>
                    <NavItem href='/'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            
            </React.Fragment>
        );
    };
};

export default MMNavbar;