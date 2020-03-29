import React, { Component } from 'react';
import './App.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import {Link } from 'react-router-dom';


class NavbarPage extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {

  return (
  
      <MDBContainer-fluid>
        <MDBNavbar color="amber lighten-4"  light>
          <MDBContainer>
            <MDBNavbarBrand>
              MY COOKBOOK
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <Link to="/"  style={linkstyle}>HOME</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/Confinement" style={linkstyle}>MY RECIPES DURING CONFINEMENT</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/Sign" style={linkstyle}>SIGN IN or SIGN UP</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer-fluid>
   
    );
  }
}

const linkstyle = {
  color : 'black',
  float: 'left'
  };

export default NavbarPage;