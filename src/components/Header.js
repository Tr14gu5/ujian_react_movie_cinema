import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut } from '../actions';

class Header extends Component {
    
    onRightClick = () => {
        this.props.onLogOut();
    }

    renderNavbar = () => {
        if(this.props.auth.username !== "") {
            return (<Navbar fixedTop={true} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1}>
                        <Link to="/movielist">Movie List</Link>
                    </NavItem>
                    
                    </Nav>
                    <Nav pullRight>
                        {/*<NavItem eventKey={1} href="#">
                            Hello, {this.props.auth.username}
                        </NavItem>*/}
                        <NavDropdown eventKey={2} title= { "Hello," + this.props.auth.username} id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>Login</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.2} onSelect={this.onLogOutClik} >LogOut </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
        }

        return (<Navbar fixedTop={true} inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to="/movielist">Movie List</Link>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link to="/login">Login</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/register">Register</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
    render() {
        return( 
            this.renderNavbar()
        );
    }
}

const mapStateToProps = (state) => {
    const auth = state.auth;

    return { auth };
}

export default connect(mapStateToProps, {onLogOut}) (Header);