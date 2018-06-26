import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar brand='' right>
                    <NavItem href='/'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            </React.Fragment>
        );
    };
};

export default Header;